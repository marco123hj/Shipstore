"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import type { Dict } from "@/lib/i18n";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brass";

export default function AuthForm({ dict, onSuccess }: { dict: Dict; onSuccess?: () => void }) {
  const a = dict.auth;
  const { register, login } = useAuth();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const res = tab === "register" ? await register(name, email, password) : await login(email, password);
    setBusy(false);
    if (!res.ok) {
      setError(res.error === "exists" ? a.exists : a.wrong);
      return;
    }
    onSuccess?.();
  };

  const tabBtn = (id: "login" | "register", label: string) => (
    <button
      type="button"
      onClick={() => {
        setTab(id);
        setError(null);
      }}
      className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
        tab === id ? "bg-navy text-white" : "bg-white text-navy hover:bg-sand"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 rounded-lg border border-navy/10 bg-white p-1">
        {tabBtn("login", a.loginTab)}
        {tabBtn("register", a.registerTab)}
      </div>

      <form onSubmit={submit} className="mt-4 space-y-3">
        {tab === "register" && (
          <input
            className={inputClass}
            placeholder={a.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        )}
        <input
          className={inputClass}
          type="email"
          placeholder={a.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          className={inputClass}
          type="password"
          placeholder={a.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          autoComplete={tab === "register" ? "new-password" : "current-password"}
        />
        {error && <p className="text-sm text-brass-dark">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="flex w-full items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-green hover:shadow-md disabled:opacity-60"
        >
          {tab === "register" ? a.registerCta : a.loginCta}
        </button>
      </form>
      <p className="mt-3 text-xs text-navy/50">{a.demoNote}</p>
    </div>
  );
}
