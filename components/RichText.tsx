import { Fragment, ReactNode } from "react";
import Link from "next/link";
import Fill from "@/components/Fill";
import type { Block } from "@/lib/i18n/types";

// Parses inline tokens inside a translated string:
//   {{l:/path|label}}      internal link (locale prefix added)
//   {{a:https://..|label}} external link
//   {{f:text}}             highlighted <Fill> placeholder
const TOKEN = /\{\{([laf]):([^}]*)\}\}/g;

export function RichText({ text, locale }: { text: string; locale: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) out.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    const kind = m[1];
    const payload = m[2];
    if (kind === "f") {
      out.push(<Fill key={i++}>{payload}</Fill>);
    } else {
      const [href, label] = payload.split("|");
      if (kind === "a") {
        out.push(
          <a
            key={i++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brass-dark hover:underline"
          >
            {label}
          </a>
        );
      } else {
        out.push(
          <Link key={i++} href={`/${locale}${href}`} className="font-medium text-brass-dark hover:underline">
            {label}
          </Link>
        );
      }
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

export function Blocks({ blocks, locale }: { blocks: Block[]; locale: string }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return (
              <p key={i}>
                <RichText text={b.s} locale={locale} />
              </p>
            );
          case "note":
            return (
              <p key={i} className="text-sm text-navy/60">
                <RichText text={b.s} locale={locale} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-1 pl-5">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <RichText text={it} locale={locale} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-1 pl-5">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <RichText text={it} locale={locale} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-navy/15 text-left text-navy">
                      {b.head.map((h, j) => (
                        <th key={j} className="py-2 pr-4 font-semibold last:pr-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-navy/75">
                    {b.rows.map((row, r) => (
                      <tr key={r} className="border-b border-navy/10">
                        {row.map((cell, c) => (
                          <td key={c} className="py-2 pr-4 last:pr-0">
                            <RichText text={cell} locale={locale} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
