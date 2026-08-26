import { notFound } from "next/navigation";
import {
  getProduct,
  getProducts,
  getCategory,
  getProductsByCategory,
} from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  return { title: p ? `${p.name} — La Capitana` : "La Capitana" };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return <ProductDetail product={product} category={category} related={related} />;
}
