"use client";

import { useSyncExternalStore, useEffect } from "react";

const KEY = "ss-wishlist";
let slugs: string[] = [];
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
    localStorage.setItem(KEY, JSON.stringify(slugs));
  } catch {
    // ignore
  }
}
function hydrate() {
  if (hydrated) return;
  hydrated = true;
  try {
    const r = localStorage.getItem(KEY);
    if (r) slugs = JSON.parse(r);
  } catch {
    // ignore
  }
  if (slugs.length) emit();
}

export function toggleWish(slug: string) {
  slugs = slugs.includes(slug) ? slugs.filter((s) => s !== slug) : [...slugs, slug];
  persist();
  emit();
}
export function removeWish(slug: string) {
  slugs = slugs.filter((s) => s !== slug);
  persist();
  emit();
}

const EMPTY: string[] = [];
const getSlugs = () => slugs;
const getServer = () => EMPTY;

export function useWishlist() {
  const list = useSyncExternalStore(subscribe, getSlugs, getServer);
  useEffect(() => {
    hydrate();
  }, []);
  return {
    slugs: list,
    count: list.length,
    has: (s: string) => list.includes(s),
    toggle: toggleWish,
    remove: removeWish,
  };
}
