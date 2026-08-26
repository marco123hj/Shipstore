import { ReactNode } from "react";

export default function LegalLayout({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-14">
          <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
          {intro && <p className="mt-3 max-w-2xl text-white/75">{intro}</p>}
          {updated && <p className="mt-4 text-xs text-white/45">Last updated: {updated}</p>}
        </div>
      </section>

      <div className="container-c py-12">
        <div className="max-w-3xl space-y-8 leading-relaxed text-navy/75">{children}</div>
      </div>
    </>
  );
}
