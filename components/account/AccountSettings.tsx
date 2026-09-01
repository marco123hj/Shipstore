"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { useAuth } from "@/context/AuthContext";
import type { Dict } from "@/lib/i18n";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brass";
const labelClass = "mb-1.5 block text-sm font-medium text-navy";

export default function AccountSettings({ dict }: { dict: Dict }) {
  const t = dict.account;
  const { user, updateProfile } = useAuth();
  const [firstName, setFirstName] = useState(user?.firstName ?? "");
  const [lastName, setLastName] = useState(user?.lastName ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [marketing, setMarketing] = useState(user?.marketing ?? false);
  const [saved, setSaved] = useState(false);

  if (!user) return null;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateProfile({ firstName: firstName.trim(), lastName: lastName.trim(), phone: phone.trim(), marketing });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-ink">{t.settingsTitle}</h2>

      <form onSubmit={onSubmit} className="mt-5 rounded-xl border border-navy/10 bg-white p-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-navy/50">{t.profile}</h3>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="firstName">
              {t.fFirstName}
            </label>
            <input
              id="firstName"
              className={inputClass}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
              required
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="lastName">
              {t.fLastName}
            </label>
            <input
              id="lastName"
              className={inputClass}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className={labelClass} htmlFor="email">
            {t.fEmail}
          </label>
          <input id="email" className={`${inputClass} bg-sand/60 text-navy/60`} value={user.email} disabled />
          <p className="mt-1 text-xs text-navy/45">{t.emailLocked}</p>
        </div>

        <div className="mt-4">
          <label className={labelClass} htmlFor="phone">
            {t.fPhone}
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>

        <label className="mt-5 flex items-start gap-3 text-sm text-navy/80">
          <input
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-navy/30 text-navy accent-navy"
          />
          <span>{t.marketing}</span>
        </label>

        <div className="mt-6 flex items-center gap-3">
          <button type="submit" className="btn-primary">
            {t.saveChanges}
          </button>
          {saved && (
            <span className="flex items-center gap-1.5 text-sm font-medium text-green">
              <Icon name="check" className="h-4 w-4" />
              {t.saved}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
