import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="hero-tag">Two Stores, One Destination</span>
        <h1>Welcome to Shipstore</h1>
        <p>
          Discover curated products from our Shopify stores. Browse Zepory and
          Nautic Talk collections all in one place.
        </p>
      </section>

      <div className="store-cards">
        <Link href="/zepory" className="store-card store-card--zepory">
          <span className="store-card-arrow">&nearr;</span>
          <h2>Zepory</h2>
          <p>Explore the Zepory collection</p>
        </Link>

        <Link href="/nautictalk" className="store-card store-card--nautictalk">
          <span className="store-card-arrow">&nearr;</span>
          <h2>Nautic Talk</h2>
          <p>Explore the Nautic Talk collection</p>
        </Link>
      </div>
    </>
  );
}
