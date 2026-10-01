"use client";

import { useSyncExternalStore } from "react";

// Site-wide "show prices incl. / excl. BTW" preference, like shipstore.nl.
// Prices in the data are the consumer price INCL. 21% BTW; excl. = / 1.21.

const KEY = "ss-btw";
export const BTW_RATE = 0.21;

let inclusive = true;
const listeners = new Set<() => void>();

function load() {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "excl") inclusive = false;
  } catch {}
}
if (typeof window !== "undefined") load();

function emit() {
  for (const l of listeners) l();
}

export function setBtwInclusive(next: boolean) {
  inclusive = next;
  try {
    localStorage.setItem(KEY, next ? "incl" : "excl");
  } catch {}
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useBtwInclusive(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => inclusive,
    () => true
  );
}

// Convert a consumer (incl. BTW) price to the active display value.
export function displayAmount(inclPrice: number, inc: boolean): number {
  return inc ? inclPrice : inclPrice / (1 + BTW_RATE);
}
