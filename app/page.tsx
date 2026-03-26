import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
      <h1>Welcome to Shipstore</h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        Browse products from our two Shopify stores.
      </p>

      <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
        <Link
          href="/zepory"
          style={{
            display: "block",
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            textDecoration: "none",
            color: "#111",
            flex: 1,
          }}
        >
          <h2 style={{ margin: "0 0 0.5rem" }}>Zepory</h2>
          <p style={{ margin: 0, color: "#6b7280" }}>Shop Zepory products</p>
        </Link>

        <Link
          href="/nautictalk"
          style={{
            display: "block",
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            textDecoration: "none",
            color: "#111",
            flex: 1,
          }}
        >
          <h2 style={{ margin: "0 0 0.5rem" }}>Nautic Talk</h2>
          <p style={{ margin: 0, color: "#6b7280" }}>
            Shop Nautic Talk products
          </p>
        </Link>
      </div>
    </div>
  );
}
