import Link from "next/link";
import { getProducts, type ShopifyProduct } from "@/lib/shopify";

function formatPrice(amount: string, currency: string) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
  }).format(parseFloat(amount));
}

export default async function HomePage() {
  let products: ShopifyProduct[] = [];
  try {
    products = await getProducts("zepory", 10);
  } catch {
    // Products will be empty, sections will handle gracefully
  }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Profesional + Uso Diario</span>
          <h1>
            Limpieza de grado <em>profesional</em> para cada superficie
          </h1>
          <p className="hero-description">
            Barcos, cocinas industriales, cristales, tuber&iacute;as y hogar
            &mdash; productos certificados Americol y herramientas Vikan para
            profesionales y uso diario.
          </p>
          <div className="hero-buttons">
            <Link href="/productos" className="btn-primary">
              Ver productos &rarr;
            </Link>
            <Link href="/productos" className="btn-secondary">
              Pedir presupuesto
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-value">182+</div>
              <div className="hero-stat-label">Productos</div>
            </div>
            <div>
              <div className="hero-stat-value">6</div>
              <div className="hero-stat-label">Sectores</div>
            </div>
            <div>
              <div className="hero-stat-value">24h</div>
              <div className="hero-stat-label">Env&iacute;o</div>
            </div>
          </div>
        </div>
        <div className="hero-images">
          <div className="hero-image" style={{ background: "#dbeafe" }}>
            <div className="hero-image-label">Yates &amp; Barcos</div>
          </div>
          <div className="hero-image" style={{ background: "#e0f2fe" }}>
            <div className="hero-image-label">Cocinas</div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <div className="trust-icon">&#9989;</div>
            <div className="trust-title">Grado Profesional</div>
            <div className="trust-desc">
              Certificaci&oacute;n A1, HACCP, normativa UE
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">&#127968;</div>
            <div className="trust-title">Tambi&eacute;n Uso Diario</div>
            <div className="trust-desc">Productos para hogar, cocina y ba&ntilde;o</div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">&#128666;</div>
            <div className="trust-title">Env&iacute;o 24-72h</div>
            <div className="trust-desc">
              Espa&ntilde;a y toda Europa
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">&#128230;</div>
            <div className="trust-title">750ml a 200L</div>
            <div className="trust-desc">Todos los formatos</div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section">
        <div className="section-label">Cat&aacute;logo</div>
        <div className="section-title">Productos destacados</div>
        <div className="section-subtitle">
          Lo m&aacute;s solicitado por profesionales y para uso diario.
        </div>

        {products.length > 0 ? (
          <>
            <div className="product-grid">
              {products.map((product, index) => {
                const image = product.images.edges[0]?.node;
                const price = product.priceRange.minVariantPrice;
                const badges = ["TOP", "PRO", "PREMIUM", "", ""];
                const badgeClasses = [
                  "badge--top",
                  "badge--pro",
                  "badge--premium",
                  "",
                  "",
                ];

                return (
                  <Link
                    key={product.id}
                    href={`/productos/${product.handle}`}
                    className="product-card"
                  >
                    <div className="product-card-image">
                      {index < 3 && badges[index] && (
                        <span
                          className={`product-card-badge ${badgeClasses[index]}`}
                        >
                          {badges[index]}
                        </span>
                      )}
                      {image && (
                        <img
                          src={image.url}
                          alt={image.altText ?? product.title}
                          loading={index < 4 ? "eager" : "lazy"}
                        />
                      )}
                    </div>
                    <div className="product-card-info">
                      <div className="product-card-vendor">AMERICOL</div>
                      <div className="product-card-title">{product.title}</div>
                      <div className="product-card-bottom">
                        <span className="product-card-price">
                          {formatPrice(price.amount, price.currencyCode)}
                        </span>
                        <span className="product-card-buy">Comprar</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="view-all-btn">
              <Link href="/productos">
                Ver los {products.length}+ productos &rarr;
              </Link>
            </div>
          </>
        ) : (
          <p className="empty-message">
            Conecta tu tienda Shopify para ver los productos.
          </p>
        )}
      </section>

      {/* WHY ZEPORY */}
      <section
        className="section"
        style={{ background: "var(--bg-light)", maxWidth: "100%" }}
      >
        <div className="section-label">&iquest;Por qu&eacute; Zepory?</div>
        <div className="section-title">Profesional y para uso diario</div>
        <div className="section-subtitle">
          Productos que funcionan en una cocina industrial y en tu hogar.
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">&#10003;</div>
            <div className="feature-title">
              Certificaci&oacute;n Europea
            </div>
            <div className="feature-desc">
              Qu&iacute;micos Americol con certificaci&oacute;n A1, HACCP y
              normativa ambiental UE completa.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#128295;</div>
            <div className="feature-title">Herramientas Vikan</div>
            <div className="feature-desc">
              La marca danesa l&iacute;der mundial en cepillos, mangos y
              equipamiento de limpieza higi&eacute;nica.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#127775;</div>
            <div className="feature-title">Pro + Uso Diario</div>
            <div className="feature-desc">
              Misma calidad profesional accesible para tu hogar. Hornos,
              ba&ntilde;os, cocinas, cristales.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#127758;</div>
            <div className="feature-title">Env&iacute;o Internacional</div>
            <div className="feature-desc">
              Espa&ntilde;a, Pa&iacute;ses Bajos y toda Europa en 24-72h con
              seguimiento completo.
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2>
          Superficies <em>impecables</em>, siempre
        </h2>
        <p>
          Cat&aacute;logo completo, precios empresa y novedades profesionales.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            className="newsletter-input"
            placeholder="tu@empresa.com"
          />
          <button className="newsletter-btn">Suscribirme</button>
        </div>
      </section>
    </>
  );
}
