import Link from "next/link";
import Icon from "@/components/Icon";
import { Category, toneBg } from "@/lib/data";

export default function CategoryCard({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex min-h-[164px] flex-col justify-between border border-ink/15 bg-paper-warm p-5 transition hover:-translate-y-0.5 hover:border-ink"
    >
      <div className="flex items-start justify-between">
        <span className={`grid h-11 w-11 place-items-center text-paper ${toneBg(category.tone)}`}>
          <Icon name={category.icon} className="h-5 w-5" />
        </span>
        <span className="font-display text-2xl font-semibold text-ink/20">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-5">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/45">
          {category.tagline}
        </div>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink transition group-hover:text-rust">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}
