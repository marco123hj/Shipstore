import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body>
        <nav className="nav">
          <Link href="/" className="nav-logo">
            Shipstore
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/zepory" className="nav-link">
                Zepory
              </Link>
            </li>
            <li>
              <Link href="/nautictalk" className="nav-link">
                Nautic Talk
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="footer">
          &copy; {new Date().getFullYear()} Shipstore. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
