"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import AuthForm from "@/components/AuthForm";
import AccountSettings from "@/components/account/AccountSettings";
import AccountAddresses from "@/components/account/AccountAddresses";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice, Product } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

type Tab = "dashboard" | "orders" | "addresses" | "wishlist" | "settings";
const TABS: Tab[] = ["dashboard", "orders", "addresses", "wishlist", "settings"];

export default function AccountHub({
  locale,
  dict,
  products,
}: {
  locale: string;
  dict: Dict;
  products: Product[];
}) {
  const { user, logout, getOrders } = useAuth();
  const { slugs } = useWishlist();
  const t = dict.account;
  const [tab, setTab] = useState<Tab>("dashboard");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("tab");
    if (p && (TABS as string[]).includes(p)) setTab(p as Tab);
  }, []);

  const go = (next: Tab) => {
    setTab(next);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", next);
    window.history.replaceState(null, "", url.toString());
  };

  // Not signed in -> sign in / register gate.
  if (!user) {
    return (
      <div className="container-c py-12">
        <div className="mx-auto max-w-md">
          <h1 className="text-2xl font-bold text-ink">{dict.auth.signIn}</h1>
          <div className="mt-6">
            <AuthForm dict={dict} />
          </div>
        </div>
      </div>
    );
  }

  const orders = getOrders(user.email);
  const wishItems = products.filter((p) => slugs.includes(p.slug));
  const addressCount = user.addresses?.length ?? 0;

  const navItems: { id: Tab; label: string; icon: string }[] = [
    { id: "dashboard", label: t.nav.dashboard, icon: "grid" },
    { id: "orders", label: t.nav.orders, icon: "cart" },
    { id: "addresses", label: t.nav.addresses, icon: "pin" },
    { id: "wishlist", label: t.nav.wishlist, icon: "heart" },
    { id: "settings", label: t.nav.settings, icon: "gear" },
  ];

  const navBtn = (active: boolean) =>
    `flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
      active ? "bg-navy text-white shadow-sm" : "text-navy hover:bg-sand"
    }`;

  return (
    <div className="container-c py-10">
      <h1 className="mb-6 text-2xl font-bold text-ink sm:text-3xl">{t.title}</h1>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Sidebar / mobile tab bar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex gap-1.5 overflow-x-auto rounded-xl border border-navy/10 bg-white p-2 lg:flex-col lg:overflow-visible">
            {navItems.map((it) => (
              <button key={it.id} type="button" onClick={() => go(it.id)} className={navBtn(tab === it.id)}>
                <Icon name={it.icon} className="h-5 w-5" />
                {it.label}
              </button>
            ))}
            <button
              type="button"
              onClick={logout}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold text-navy/70 transition hover:bg-sand hover:text-ink lg:mt-1 lg:border-t lg:border-navy/10 lg:pt-3"
            >
              <Icon name="logout" className="h-5 w-5" />
              {t.nav.logout}
            </button>
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0">
          {tab === "dashboard" && (
            <div>
              <h2 className="text-xl font-bold text-ink">
                {t.hello}, {user.firstName || user.name.split(" ")[0]}
              </h2>
              <p className="mt-1 text-navy/60">{t.dashSubtitle}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <StatCard label={t.statOrders} value={orders.length} icon="cart" onClick={() => go("orders")} />
                <StatCard label={t.statWishlist} value={wishItems.length} icon="heart" onClick={() => go("wishlist")} />
                <StatCard label={t.statAddresses} value={addressCount} icon="pin" onClick={() => go("addresses")} />
              </div>

              {orders.length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-ink">{t.recentOrder}</h3>
                    <button
                      type="button"
                      onClick={() => go("orders")}
                      className="text-sm font-semibold text-brass-dark hover:underline"
                    >
                      {t.viewAll}
                    </button>
                  </div>
                  <div className="mt-3">
                    <OrderCard order={orders[0]} locale={locale} t={t} />
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "orders" && (
            <div>
              <h2 className="text-xl font-bold text-ink">{t.orders}</h2>
              {orders.length === 0 ? (
                <EmptyState
                  icon="cart"
                  text={t.noOrders}
                  ctaHref={`/${locale}/shop`}
                  ctaLabel={t.startShopping}
                />
              ) : (
                <div className="mt-5 space-y-3">
                  {orders.map((o) => (
                    <OrderCard key={o.ref} order={o} locale={locale} t={t} />
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "addresses" && <AccountAddresses dict={dict} />}

          {tab === "wishlist" && (
            <div>
              <h2 className="text-xl font-bold text-ink">{t.nav.wishlist}</h2>
              {wishItems.length === 0 ? (
                <EmptyState
                  icon="heart"
                  text={dict.wishlist.empty}
                  ctaHref={`/${locale}/shop`}
                  ctaLabel={dict.wishlist.browse}
                />
              ) : (
                <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {wishItems.map((p) => (
                    <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "settings" && <AccountSettings dict={dict} />}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  onClick,
}: {
  label: string;
  value: number;
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-4 rounded-xl border border-navy/10 bg-white p-5 text-left transition hover:border-navy/30 hover:shadow-sm"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sand text-brass-dark">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-2xl font-bold text-ink">{value}</span>
        <span className="block text-sm text-navy/60">{label}</span>
      </span>
    </button>
  );
}

function OrderCard({
  order,
  locale,
  t,
}: {
  order: import("@/context/AuthContext").Order;
  locale: string;
  t: Dict["account"];
}) {
  return (
    <div className="rounded-lg border border-navy/10 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-ink">
          {t.order} {order.ref}
        </div>
        <div className="text-sm font-bold text-ink">{formatPrice(order.total, locale)}</div>
      </div>
      <div className="mt-1 text-xs text-navy/50">
        {order.date} · {order.method}
      </div>
      <ul className="mt-2 space-y-0.5 text-sm text-navy/70">
        {order.items.map((it, i) => (
          <li key={i}>
            {it.qty}× {it.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmptyState({
  icon,
  text,
  ctaHref,
  ctaLabel,
}: {
  icon: string;
  text: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="mt-6 rounded-xl border border-dashed border-navy/15 bg-white py-12 text-center">
      <Icon name={icon} className="mx-auto h-9 w-9 text-navy/25" />
      <p className="mt-3 text-navy/60">{text}</p>
      <Link href={ctaHref} className="btn-primary mt-5 inline-flex">
        {ctaLabel}
      </Link>
    </div>
  );
}
