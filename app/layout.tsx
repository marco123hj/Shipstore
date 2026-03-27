import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zepory — Limpieza Profesional",
  description:
    "Limpieza de grado profesional para cada superficie. Productos certificados Americol y herramientas Vikan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav className="nav">
          <Link href="/" className="nav-left">
            <div className="nav-logo-icon">Z</div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">Zepory</span>
              <span className="nav-logo-sub">Limpieza Profesional</span>
            </div>
          </Link>
          <ul className="nav-center">
            <li>
              <Link href="/productos" className="nav-link">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/productos" className="nav-link">
                Marcas
              </Link>
            </li>
            <li>
              <Link href="/productos" className="nav-link">
                Soluciones
              </Link>
            </li>
            <li>
              <Link href="/productos" className="nav-link">
                Nosotros
              </Link>
            </li>
          </ul>
          <Link href="/productos" className="nav-cta">
            Ver cat&aacute;logo
          </Link>
        </nav>
        {children}
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <div className="footer-brand-name">
                <div className="footer-logo-icon">Z</div>
                <div className="footer-logo-text">
                  <span className="footer-logo-name">Zepory</span>
                  <span className="footer-logo-sub">
                    Limpieza Profesional
                  </span>
                </div>
              </div>
              <p className="footer-desc">
                Limpieza profesional y uso diario para barcos, cocinas,
                industria y hogar. Calidad certificada europea.
              </p>
            </div>
            <div>
              <div className="footer-col-title">Productos</div>
              <ul className="footer-links">
                <li>
                  <Link href="/productos">Qu&iacute;micos Americol</Link>
                </li>
                <li>
                  <Link href="/productos">Herramientas Vikan</Link>
                </li>
                <li>
                  <Link href="/productos">Oven &amp; Grill</Link>
                </li>
                <li>
                  <Link href="/productos">Ver todo</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Soporte</div>
              <ul className="footer-links">
                <li>
                  <Link href="/productos">Contacto</Link>
                </li>
                <li>
                  <Link href="/productos">Env&iacute;os</Link>
                </li>
                <li>
                  <Link href="/productos">Devoluciones</Link>
                </li>
                <li>
                  <Link href="/productos">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Legal</div>
              <ul className="footer-links">
                <li>
                  <Link href="/productos">Aviso legal</Link>
                </li>
                <li>
                  <Link href="/productos">Privacidad</Link>
                </li>
                <li>
                  <Link href="/productos">Cookies</Link>
                </li>
                <li>
                  <Link href="/productos">Condiciones</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Zepory</span>
            <div className="footer-payments">
              <span>VISA</span>
              <span>MC</span>
              <span>PAYPAL</span>
              <span>BIZUM</span>
              <span>iDEAL</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
