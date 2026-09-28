"use client";

import { useSyncExternalStore, useEffect } from "react";

const KEY = "ss-recent";
const MAX = 8;
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
}

export function recordView(slug: string) {
  hydrate();
  slugs = [slug, ...slugs.filter((s) => s !== slug)].slice(0, MAX);
  persist();
  emit();
}

const EMPTY: string[] = [];
const getSlugs = () => slugs;
const getServer = () => EMPTY;

export function useRecent() {
  const list = useSyncExternalStore(subscribe, getSlugs, getServer);
  useEffect(() => {
    hydrate();
    if (slugs.length) emit();
  }, []);
  return list;
}
