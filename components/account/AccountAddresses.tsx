"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { useAuth } from "@/context/AuthContext";
import type { Address } from "@/context/AuthContext";
import type { Dict } from "@/lib/i18n";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brass";
const labelClass = "mb-1.5 block text-sm font-medium text-navy";

type Editing = null | "new" | string;

export default function AccountAddresses({ dict }: { dict: Dict }) {
  const t = dict.account;
  const { user, addAddress, updateAddress, removeAddress, setDefaultAddress } = useAuth();
  const [editing, setEditing] = useState<Editing>(null);

  if (!user) return null;
  const addresses = user.addresses ?? [];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-ink">{t.addressesTitle}</h2>
          <p className="mt-1 text-sm text-navy/60">{t.addressesSubtitle}</p>
        </div>
        {editing === null && (
          <button type="button" onClick={() => setEditing("new")} className="btn-primary inline-flex items-center gap-2">
            <Icon name="plus" className="h-4 w-4" />
            {t.addAddress}
          </button>
        )}
      </div>

      {editing === "new" && (
        <AddressForm
          t={t}
          onCancel={() => setEditing(null)}
          onSave={(data) => {
            addAddress(data);
            setEditing(null);
          }}
        />
      )}

      {addresses.length === 0 && editing !== "new" ? (
        <div className="mt-6 rounded-xl border border-dashed border-navy/15 bg-white py-12 text-center">
          <Icon name="pin" className="mx-auto h-9 w-9 text-navy/25" />
          <p className="mt-3 text-navy/60">{t.noAddresses}</p>
        </div>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {addresses.map((a) =>
            editing === a.id ? (
              <div key={a.id} className="sm:col-span-2">
                <AddressForm
                  t={t}
                  initial={a}
                  onCancel={() => setEditing(null)}
                  onSave={(data) => {
                    updateAddress(a.id, data);
                    setEditing(null);
                  }}
                />
              </div>
            ) : (
              <div key={a.id} className="rounded-xl border border-navy/10 bg-white p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-semibold text-ink">{a.name}</div>
                  {a.isDefault && (
                    <span className="rounded bg-brass/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brass-dark">
                      {t.default}
                    </span>
                  )}
                </div>
                <address className="mt-2 space-y-0.5 text-sm not-italic text-navy/70">
                  <div>{a.line1}</div>
                  {a.line2 && <div>{a.line2}</div>}
                  <div>
                    {a.postcode} {a.city}
                  </div>
                  <div>{a.country}</div>
                  {a.phone && <div className="text-navy/50">{a.phone}</div>}
                </address>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <button
                    type="button"
                    onClick={() => setEditing(a.id)}
                    className="font-semibold text-navy hover:text-ink"
                  >
                    {t.edit}
                  </button>
                  {!a.isDefault && (
                    <button
                      type="button"
                      onClick={() => setDefaultAddress(a.id)}
                      className="font-semibold text-navy hover:text-ink"
                    >
                      {t.makeDefault}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removeAddress(a.id)}
                    className="font-semibold text-red-600 hover:text-red-700"
                  >
                    {t.delete}
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

function AddressForm({
  t,
  initial,
  onSave,
  onCancel,
}: {
  t: Dict["account"];
  initial?: Address;
  onSave: (data: Omit<Address, "id">) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [line1, setLine1] = useState(initial?.line1 ?? "");
  const [line2, setLine2] = useState(initial?.line2 ?? "");
  const [postcode, setPostcode] = useState(initial?.postcode ?? "");
  const [city, setCity] = useState(initial?.city ?? "");
  const [country, setCountry] = useState(initial?.country ?? "España");
  const [phone, setPhone] = useState(initial?.phone ?? "");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      name: name.trim(),
      line1: line1.trim(),
      line2: line2.trim() || undefined,
      postcode: postcode.trim(),
      city: city.trim(),
      country: country.trim(),
      phone: phone.trim() || undefined,
      isDefault: initial?.isDefault,
    });
  }

  return (
    <form onSubmit={submit} className="mt-5 rounded-xl border border-navy/10 bg-white p-6">
      <h3 className="text-sm font-bold uppercase tracking-wide text-navy/50">
        {initial ? t.editAddress : t.addAddress}
      </h3>
      <div className="mt-4 space-y-4">
        <div>
          <label className={labelClass}>{t.fRecipient}</label>
          <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
        </div>
        <div>
          <label className={labelClass}>{t.fLine1}</label>
          <input className={inputClass} value={line1} onChange={(e) => setLine1(e.target.value)} required autoComplete="address-line1" />
        </div>
        <div>
          <label className={labelClass}>{t.fLine2}</label>
          <input className={inputClass} value={line2} onChange={(e) => setLine2(e.target.value)} autoComplete="address-line2" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>{t.fPostcode}</label>
            <input className={inputClass} value={postcode} onChange={(e) => setPostcode(e.target.value)} required autoComplete="postal-code" />
          </div>
          <div>
            <label className={labelClass}>{t.fCity}</label>
            <input className={inputClass} value={city} onChange={(e) => setCity(e.target.value)} required autoComplete="address-level2" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>{t.fCountry}</label>
            <input className={inputClass} value={country} onChange={(e) => setCountry(e.target.value)} required autoComplete="country-name" />
          </div>
          <div>
            <label className={labelClass}>{t.fPhone}</label>
            <input className={inputClass} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button type="submit" className="btn-primary">
          {t.save}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-navy"
        >
          {t.cancel}
        </button>
      </div>
    </form>
  );
}
