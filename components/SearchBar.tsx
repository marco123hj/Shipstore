"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";

export default function SearchBar({ locale, placeholder }: { locale: string; placeholder: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = q.trim();
    if (v) router.push(`/${locale}/search?q=${encodeURIComponent(v)}`);
  };

  return (
    <form onSubmit={submit} className="relative hidden sm:block">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-40 rounded-md border border-navy/15 bg-white/70 py-1.5 pl-8 pr-2 text-sm outline-none transition focus:w-56 focus:border-brass md:w-48"
      />
      <button type="submit" aria-label={placeholder} className="absolute left-2 top-1/2 -translate-y-1/2 text-navy/50 hover:text-ink">
        <Icon name="search" className="h-4 w-4" />
      </button>
    </form>
  );
}
