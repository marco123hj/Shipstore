"use client";

import { useSyncExternalStore, useEffect } from "react";

export type CartItem = {
  slug: string;
  name: string;
  brand: string;
  price: number;
  unit?: string;
  iconName: string;
  qty: number;
};
type AddInput = Omit<CartItem, "qty">;

// Provider-free module store. Any client component can call useCart() and
// share the same cart, with no React context provider wrapping the tree.
const KEY = "lc-cart";
let items: CartItem[] = [];
let open = false;
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
function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}
function hydrate() {
  if (hydrated) return;
  hydrated = true;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) items = JSON.parse(raw);
  } catch {
    // ignore
  }
  if (items.length) emit();
}

export function addItem(item: AddInput, qty = 1) {
  const i = items.findIndex((p) => p.slug === item.slug);
  items =
    i >= 0
      ? items.map((p, idx) => (idx === i ? { ...p, qty: p.qty + qty } : p))
      : [...items, { ...item, qty }];
  open = true;
  persist();
  emit();
}
export function removeItem(slug: string) {
  items = items.filter((p) => p.slug !== slug);
  persist();
  emit();
}
export function setItemQty(slug: string, qty: number) {
  items = items.map((p) => (p.slug === slug ? { ...p, qty: Math.max(1, qty) } : p));
  persist();
  emit();
}
export function clearCart() {
  items = [];
  open = false;
  persist();
  emit();
}
export function openCart() {
  open = true;
  emit();
}
export function closeCart() {
  open = false;
  emit();
}

const EMPTY: CartItem[] = [];
const getItems = () => items;
const getItemsServer = () => EMPTY;
const getOpen = () => open;
const getOpenServer = () => false;

export function useCart() {
  const list = useSyncExternalStore(subscribe, getItems, getItemsServer);
  const isOpen = useSyncExternalStore(subscribe, getOpen, getOpenServer);
  useEffect(() => {
    hydrate();
  }, []);

  const count = list.reduce((n, x) => n + x.qty, 0);
  const subtotal = list.reduce((n, x) => n + x.price * x.qty, 0);

  return {
    items: list,
    count,
    subtotal,
    isOpen,
    add: addItem,
    remove: removeItem,
    setQty: setItemQty,
    clear: clearCart,
    open: openCart,
    close: closeCart,
  };
}
