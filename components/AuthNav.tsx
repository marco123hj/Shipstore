"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { useAuth } from "@/context/AuthContext";

export default function AuthNav({ locale, label }: { locale: string; label: string }) {
  const { user } = useAuth();
  return (
    <Link
      href={`/${locale}/account`}
      title={label}
      aria-label={label}
      className="flex items-center gap-1.5 text-navy transition hover:text-ink"
    >
      <Icon name="user" className="h-5 w-5" />
      {user && <span className="hidden max-w-[90px] truncate text-sm font-medium sm:inline">{user.name.split(" ")[0]}</span>}
    </Link>
  );
}
