"use client";

import { useAuth } from "@/context/AuthContext";
import AuthForm from "@/components/AuthForm";
import { formatPrice } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export default function AccountClient({ locale, dict }: { locale: string; dict: Dict }) {
  const { user, logout, getOrders } = useAuth();
  const t = dict.account;

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

  return (
    <div className="container-c py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold text-ink">{t.title}</h1>
        <button
          type="button"
          onClick={logout}
          className="rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:border-navy"
        >
          {dict.auth.signOut}
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="rounded-xl border border-navy/10 bg-white p-5">
          <h2 className="text-lg font-bold text-ink">{t.profile}</h2>
          <dl className="mt-3 text-sm">
            <dt className="text-navy/50">{dict.auth.name}</dt>
            <dd className="font-medium text-ink">{user.name}</dd>
            <dt className="mt-3 text-navy/50">{dict.auth.email}</dt>
            <dd className="font-medium text-ink">{user.email}</dd>
          </dl>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-ink">{t.orders}</h2>
          {orders.length === 0 ? (
            <p className="mt-3 text-navy/60">{t.noOrders}</p>
          ) : (
            <div className="mt-3 space-y-3">
              {orders.map((o) => (
                <div key={o.ref} className="rounded-lg border border-navy/10 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-ink">
                      {t.order} {o.ref}
                    </div>
                    <div className="text-sm font-bold text-ink">{formatPrice(o.total, locale)}</div>
                  </div>
                  <div className="mt-1 text-xs text-navy/50">
                    {o.date} · {o.method}
                  </div>
                  <ul className="mt-2 space-y-0.5 text-sm text-navy/70">
                    {o.items.map((it, i) => (
                      <li key={i}>
                        {it.qty}× {it.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
