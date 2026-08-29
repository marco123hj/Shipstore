"use client";

import Icon from "@/components/Icon";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export default function CartDrawer({ locale, dict }: { locale: string; dict: Dict }) {
  const { items, isOpen, close, remove, setQty, subtotal, count } = useCart();
  const t = dict.cart;

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden
      />
      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-sand shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label={t.title}
      >
        <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
          <h2 className="text-lg font-bold text-ink">
            {t.title}
            {count > 0 && <span className="ml-2 text-sm font-normal text-navy/50">({count})</span>}
          </h2>
          <button type="button" onClick={close} aria-label={t.close} className="text-navy/60 transition hover:text-ink">
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <Icon name="cart" className="h-10 w-10 text-navy/25" />
            <p className="text-navy/60">{t.empty}</p>
            <button type="button" onClick={close} className="btn-primary mt-2">
              {t.continue}
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {items.map((it) => (
                <div key={it.slug} className="flex gap-3">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md border border-navy/10 bg-white">
                    <Icon name={it.iconName} className="h-7 w-7 text-navy/25" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-navy/50">{it.brand}</div>
                    <div className="line-clamp-2 text-sm font-medium text-ink">{it.name}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-md border border-navy/20">
                        <button
                          type="button"
                          onClick={() => setQty(it.slug, it.qty - 1)}
                          disabled={it.qty <= 1}
                          aria-label={dict.product.quantityDec}
                          className="grid h-7 w-7 place-items-center text-ink transition hover:bg-white disabled:opacity-30"
                        >
                          <Icon name="minus" className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm text-ink">{it.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(it.slug, it.qty + 1)}
                          aria-label={dict.product.quantityInc}
                          className="grid h-7 w-7 place-items-center text-ink transition hover:bg-white"
                        >
                          <Icon name="plus" className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-ink">{formatPrice(it.price * it.qty, locale)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(it.slug)}
                    aria-label={t.remove}
                    className="self-start text-navy/40 transition hover:text-brass-dark"
                  >
                    <Icon name="trash" className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-navy/10 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-navy/70">{t.subtotal}</span>
                <span className="text-lg font-bold text-ink">{formatPrice(subtotal, locale)}</span>
              </div>
              <p className="text-xs text-navy/50">
                {t.vat} · {t.checkoutNote}
              </p>
              <button
                type="button"
                disabled
                title={t.checkoutNote}
                className="w-full cursor-not-allowed rounded-md bg-brass/60 px-5 py-3 text-sm font-semibold text-navy/70"
              >
                {t.checkout}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
