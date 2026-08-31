"use client";

import { useSyncExternalStore, useEffect } from "react";

// Front-end-only account system (browser storage). NOT secure and NOT a real
// auth backend: passwords are only SHA-256 hashed in localStorage so they are
// not stored in plain text, but this is a prototype to be replaced by real
// server-side authentication before launch.
export type User = { name: string; email: string };
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
function hydrate() {
  if (hydrated) return;
  hydrated = true;
  const s = read<User>(SKEY);
  if (s) {
    user = s;
    emit();
  }
}

async function sha256(s: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

type StoredUser = { name: string; email: string; passHash: string };
type Result = { ok: true } | { ok: false; error: "exists" | "wrong" };

export async function register(name: string, email: string, password: string): Promise<Result> {
  const users = read<StoredUser[]>(UKEY) ?? [];
  const e = email.trim().toLowerCase();
  if (users.some((u) => u.email === e)) return { ok: false, error: "exists" };
  const passHash = await sha256(password);
  users.push({ name: name.trim(), email: e, passHash });
  write(UKEY, users);
  user = { name: name.trim(), email: e };
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
  user = { name: u.name, email: u.email };
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
  return { user: u, register, login, logout, addOrder, getOrders };
}
