"use client";

import { useSyncExternalStore, useEffect } from "react";

// Front-end-only account system (browser storage). NOT secure and NOT a real
// auth backend: passwords are only SHA-256 hashed in localStorage so they are
// not stored in plain text, but this is a prototype to be replaced by real
// server-side authentication before launch.
export type Address = {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  postcode: string;
  city: string;
  country: string;
  phone?: string;
  isDefault?: boolean;
};

export type User = {
  name: string; // full name, kept for display/back-compat
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  marketing?: boolean;
  addresses?: Address[];
};

export type OrderLine = { name: string; qty: number; price: number };
export type Order = {
  ref: string;
  email: string;
  total: number;
  date: string;
  method: string;
  items: OrderLine[];
};

const UKEY = "lc-users";
const SKEY = "lc-session";
const OKEY = "lc-orders";

let user: User | null = null;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}
function subscribe(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}
function read<T>(key: string): T | null {
  try {
    const r = localStorage.getItem(key);
    return r ? (JSON.parse(r) as T) : null;
  } catch {
    return null;
  }
}
function write(key: string, val: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {
    // ignore
  }
}

function splitName(name: string): { firstName: string; lastName: string } {
  const parts = name.trim().split(/\s+/);
  return { firstName: parts[0] ?? "", lastName: parts.slice(1).join(" ") };
}

// Fill in fields that older stored records may be missing.
function normalize(u: Partial<User> & { name: string; email: string }): User {
  const split = splitName(u.name);
  return {
    name: u.name,
    email: u.email,
    firstName: u.firstName ?? split.firstName,
    lastName: u.lastName ?? split.lastName,
    phone: u.phone,
    marketing: u.marketing ?? false,
    addresses: u.addresses ?? [],
  };
}

function hydrate() {
  if (hydrated) return;
  hydrated = true;
  const s = read<User>(SKEY);
  if (s) {
    user = normalize(s);
    emit();
  }
}

async function sha256(s: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

type StoredUser = {
  name: string;
  email: string;
  passHash: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  marketing?: boolean;
  addresses?: Address[];
};
type Result = { ok: true } | { ok: false; error: "exists" | "wrong" };

// Push the current user into both the session and its stored record.
function persistUser(next: User) {
  user = next;
  write(SKEY, next);
  const users = read<StoredUser[]>(UKEY) ?? [];
  const i = users.findIndex((u) => u.email === next.email);
  if (i >= 0) {
    users[i] = {
      ...users[i],
      name: next.name,
      firstName: next.firstName,
      lastName: next.lastName,
      phone: next.phone,
      marketing: next.marketing,
      addresses: next.addresses,
    };
    write(UKEY, users);
  }
  emit();
}

export async function register(name: string, email: string, password: string): Promise<Result> {
  const users = read<StoredUser[]>(UKEY) ?? [];
  const e = email.trim().toLowerCase();
  if (users.some((u) => u.email === e)) return { ok: false, error: "exists" };
  const passHash = await sha256(password);
  const { firstName, lastName } = splitName(name);
  const record: StoredUser = {
    name: name.trim(),
    email: e,
    passHash,
    firstName,
    lastName,
    marketing: false,
    addresses: [],
  };
  users.push(record);
  write(UKEY, users);
  user = normalize(record);
  write(SKEY, user);
  emit();
  return { ok: true };
}

export async function login(email: string, password: string): Promise<Result> {
  const users = read<StoredUser[]>(UKEY) ?? [];
  const e = email.trim().toLowerCase();
  const passHash = await sha256(password);
  const u = users.find((x) => x.email === e && x.passHash === passHash);
  if (!u) return { ok: false, error: "wrong" };
  user = normalize(u);
  write(SKEY, user);
  emit();
  return { ok: true };
}

export function logout() {
  user = null;
  try {
    localStorage.removeItem(SKEY);
  } catch {
    // ignore
  }
  emit();
}

export function updateProfile(patch: Partial<Pick<User, "firstName" | "lastName" | "phone" | "marketing">>) {
  if (!user) return;
  const firstName = patch.firstName ?? user.firstName ?? "";
  const lastName = patch.lastName ?? user.lastName ?? "";
  const name = `${firstName} ${lastName}`.trim() || user.name;
  persistUser({ ...user, ...patch, firstName, lastName, name });
}

export function addAddress(addr: Omit<Address, "id">) {
  if (!user) return;
  const list = user.addresses ?? [];
  const id = crypto.randomUUID();
  const makeDefault = addr.isDefault || list.length === 0;
  let next: Address[] = [...list, { ...addr, id, isDefault: makeDefault }];
  if (makeDefault) next = next.map((a) => ({ ...a, isDefault: a.id === id }));
  persistUser({ ...user, addresses: next });
}

export function updateAddress(id: string, patch: Partial<Omit<Address, "id">>) {
  if (!user) return;
  let list = (user.addresses ?? []).map((a) => (a.id === id ? { ...a, ...patch } : a));
  if (patch.isDefault) list = list.map((a) => ({ ...a, isDefault: a.id === id }));
  persistUser({ ...user, addresses: list });
}

export function removeAddress(id: string) {
  if (!user) return;
  const list = (user.addresses ?? []).filter((a) => a.id !== id);
  if (list.length && !list.some((a) => a.isDefault)) list[0].isDefault = true;
  persistUser({ ...user, addresses: list });
}

export function setDefaultAddress(id: string) {
  if (!user) return;
  const list = (user.addresses ?? []).map((a) => ({ ...a, isDefault: a.id === id }));
  persistUser({ ...user, addresses: list });
}

export function addOrder(order: Order) {
  const orders = read<Order[]>(OKEY) ?? [];
  orders.unshift(order);
  write(OKEY, orders);
  emit();
}
export function getOrders(email: string): Order[] {
  const orders = read<Order[]>(OKEY) ?? [];
  return orders.filter((o) => o.email === email);
}

const getUser = () => user;
const getUserServer = () => null;

export function useAuth() {
  const u = useSyncExternalStore(subscribe, getUser, getUserServer);
  useEffect(() => {
    hydrate();
  }, []);
  return {
    user: u,
    register,
    login,
    logout,
    updateProfile,
    addAddress,
    updateAddress,
    removeAddress,
    setDefaultAddress,
    addOrder,
    getOrders,
  };
}
