"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import AuthForm from "@/components/AuthForm";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brass";

export default function CheckoutClient({ locale, dict }: { locale: string; dict: Dict }) {
  const t = dict.checkout;
  const { items, subtotal, count, clear } = useCart();
  const { user, addOrder } = useAuth();
  const [method, setMethod] = useState<"ship" | "pickup">("ship");
  const [placed, setPlaced] = useState<string | null>(null);
  const [guest, setGuest] = useState(false);

  const shipping = method === "pickup" || subtotal >= 75 ? 0 : 5.95;
  const total = subtotal + shipping;
  const vat = (total * 21) / 121;

  const genRef = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let s = "";
    for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return `LC-${s}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const emailField = form.querySelector('input[type="email"]') as HTMLInputElement | null;
    const email = user?.email ?? emailField?.value ?? "";
    const ref = genRef();
    addOrder({
      ref,
      email,
      total,
      date: new Date().toISOString().slice(0, 10),
      method: method === "pickup" ? t.methodPickup : t.methodShip,
      items: items.map((it) => ({ name: it.name, qty: it.qty, price: it.price })),
    });
    setPlaced(ref);
    clear();
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Confirmation
  if (placed) {
    return (
      <div className="container-c py-16">
        <div className="mx-auto max-w-lg rounded-xl border border-navy/10 bg-white p-8 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green/10 text-green">
            <Icon name="check" className="h-7 w-7" />
          </span>
          <h1 className="mt-5 text-2xl font-bold text-ink">{t.thanksTitle}</h1>
          <p className="mt-3 text-navy/70">{t.thanksBody}</p>
          <div className="mt-6 rounded-lg bg-sand px-4 py-3">
            <div className="text-xs text-navy/50">{t.orderRef}</div>
            <div className="text-lg font-bold tracking-wide text-ink">{placed}</div>
          </div>
          <Link href={`/${locale}/shop`} className="btn-primary mt-6 inline-flex">
            {t.continue}
          </Link>
        </div>
      </div>
    );
  }

  // Empty basket
  if (count === 0) {
    return (
      <div className="container-c py-16 text-center">
        <Icon name="cart" className="mx-auto h-10 w-10 text-navy/25" />
        <p className="mt-4 text-navy/60">{t.empty}</p>
        <Link href={`/${locale}/shop`} className="btn-primary mt-5 inline-flex">
          {t.backToShop}
        </Link>
      </div>
    );
  }

  // Choice step: sign in, create account, or continue as guest
  if (!user && !guest) {
    return (
      <div className="container-c py-12">
        <div className="mx-auto max-w-md">
          <h1 className="text-2xl font-bold text-ink">{t.chooseTitle}</h1>
          <p className="mt-2 text-sm text-navy/60">{t.chooseSubtitle}</p>
          <div className="mt-6">
            <AuthForm dict={dict} />
          </div>
          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wide text-navy/40">
            <span className="h-px flex-1 bg-navy/10" />
            {t.or}
            <span className="h-px flex-1 bg-navy/10" />
          </div>
          <button
            type="button"
            onClick={() => setGuest(true)}
            className="flex w-full items-center justify-center rounded-md border border-navy/25 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy transition hover:border-navy hover:bg-sand"
          >
            {t.continueGuest}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-c py-12">
      <h1 className="text-3xl font-bold text-ink">{t.title}</h1>

      {user && (
        <p className="mt-3 text-sm text-navy/60">
          {t.signedInAs} <span className="font-medium text-ink">{user.email}</span>
        </p>
      )}

      <form key={user?.email ?? "guest"} onSubmit={onSubmit} className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Form */}
        <div className="space-y-8">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">{t.contactTitle}</h2>
            <input className={inputClass} placeholder={t.name} defaultValue={user?.name} required autoComplete="name" />
            <div className="grid gap-3 sm:grid-cols-2">
              <input className={inputClass} type="email" placeholder={t.email} defaultValue={user?.email} required autoComplete="email" />
              <input className={inputClass} type="tel" placeholder={t.phone} autoComplete="tel" />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-ink">{t.deliveryTitle}</h2>
            <div className="grid grid-cols-2 gap-2">
              {(["ship", "pickup"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMethod(m)}
                  className={`rounded-md border px-4 py-2.5 text-sm font-semibold transition ${
                    method === m
                      ? "border-navy bg-navy text-white"
                      : "border-navy/20 bg-white text-navy hover:border-navy"
                  }`}
                >
                  {m === "ship" ? t.methodShip : t.methodPickup}
                </button>
              ))}
            </div>

            {method === "ship" && (
              <div className="space-y-3 pt-1">
                <input className={inputClass} placeholder={t.address} required autoComplete="street-address" />
                <div className="grid gap-3 sm:grid-cols-3">
                  <input className={inputClass} placeholder={t.postcode} required autoComplete="postal-code" />
                  <input className={`${inputClass} sm:col-span-2`} placeholder={t.city} required autoComplete="address-level2" />
                </div>
                <input className={inputClass} placeholder={t.country} defaultValue="España" required autoComplete="country-name" />
              </div>
            )}

            <textarea className={inputClass} rows={3} placeholder={t.notes} />
          </section>
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-navy/10 bg-sand-dark p-5">
            <h2 className="text-lg font-bold text-ink">{t.summaryTitle}</h2>
            <div className="mt-4 space-y-3">
              {items.map((it) => (
                <div key={it.slug} className="flex items-start justify-between gap-3 text-sm">
                  <span className="min-w-0 text-navy/75">
                    <span className="font-medium text-ink">{it.qty}× </span>
                    {it.name}
                  </span>
                  <span className="shrink-0 font-medium text-ink">{formatPrice(it.price * it.qty, locale)}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 border-t border-navy/10 pt-4 text-sm">
              <div className="flex justify-between text-navy/70">
                <span>{t.subtotal}</span>
                <span>{formatPrice(subtotal, locale)}</span>
              </div>
              <div className="flex justify-between text-navy/70">
                <span>{t.shipping}</span>
                <span>{shipping === 0 ? t.free : formatPrice(shipping, locale)}</span>
              </div>
              <div className="flex justify-between pt-2 text-base font-bold text-ink">
                <span>{t.total}</span>
                <span>{formatPrice(total, locale)}</span>
              </div>
              <div className="flex justify-between text-xs text-navy/50">
                <span>{t.vat}</span>
                <span>{formatPrice(vat, locale)}</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-navy/50">{t.shippingNote}</p>

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-green hover:shadow-md active:scale-[0.99]"
            >
              {t.place}
            </button>
            <p className="mt-3 text-xs text-navy/50">{t.paymentNote}</p>
          </div>
        </aside>
      </form>
    </div>
  );
}
