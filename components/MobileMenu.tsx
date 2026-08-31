"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import type { Dict } from "@/lib/i18n";

export default function MobileMenu({ locale, dict }: { locale: string; dict: Dict }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();

  const nav = [
    { href: `/${locale}/shop`, label: dict.nav.shop },
    { href: `/${locale}/nautic-talk`, label: dict.nav.nauticTalk },
    { href: `/${locale}/category/fishing`, label: dict.nav.fishing },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
    { href: `/${locale}/wishlist`, label: dict.wishlist.title },
    { href: `/${locale}/account`, label: dict.auth.account },
  ];

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    const v = q.trim();
    if (v) {
      setOpen(false);
      router.push(`/${locale}/search?q=${encodeURIComponent(v)}`);
    }
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={open}
        className="flex items-center text-navy"
      >
        <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 top-16 z-30 bg-black/20" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute inset-x-0 top-16 z-40 border-b border-navy/10 bg-sand shadow-lg">
            <div className="container-c py-4">
              <form onSubmit={search} className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={dict.search.placeholder}
                  className="w-full rounded-md border border-navy/15 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brass"
                />
                <button type="submit" aria-label={dict.search.placeholder} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-navy/50">
                  <Icon name="search" className="h-4 w-4" />
                </button>
              </form>
              <nav className="mt-2 flex flex-col divide-y divide-navy/10">
                {nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-base font-medium text-navy transition hover:text-brass-dark"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
