import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { getDict } from "@/lib/i18n";
import { locales, isLocale } from "@/lib/i18n";

const sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Capitana — Marine & Yacht Supplies · Valencia",
  description:
    "Marine and yacht supplies at the Valencia Mar marina. Maintenance, hardware, safety, electronics and fishing gear.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDict(params.locale);

  return (
    <html lang={dict.htmlLang} className={sans.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header locale={params.locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={params.locale} dict={dict} />
        <CookieBanner locale={params.locale} dict={dict} />
      </body>
    </html>
  );
}
