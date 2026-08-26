import Link from "next/link";
import { Category } from "@/lib/data";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative flex min-h-[150px] flex-col justify-end overflow-hidden rounded-2xl tile-gradient p-5 text-white shadow-sm transition hover:shadow-xl"
    >
      <span className="absolute right-4 top-4 text-4xl opacity-90 transition group-hover:scale-110">
        {category.icon}
      </span>
      <span className="eyebrow text-brass-light">{category.tagline}</span>
      <span className="mt-1 font-serif text-lg font-semibold">{category.name}</span>
    </Link>
  );
}
