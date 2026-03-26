import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipstore",
  description: "Multi-store Shopify storefront for Zepory and Nautic Talk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            padding: "1rem 2rem",
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "#fff",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: "1.25rem",
              textDecoration: "none",
              color: "#111",
            }}
          >
            Shipstore
          </Link>
          <Link
            href="/zepory"
            style={{ textDecoration: "none", color: "#4f46e5" }}
          >
            Zepory
          </Link>
          <Link
            href="/nautictalk"
            style={{ textDecoration: "none", color: "#0e7490" }}
          >
            Nautic Talk
          </Link>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
