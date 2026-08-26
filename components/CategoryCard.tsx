import Link from "next/link";
import Icon from "@/components/Icon";
import { Category } from "@/lib/data";

export default function CategoryCard({
  category,
  index,
  locale,
}: {
  category: Category;
  index: number;
  locale: string;
}) {
  return (
    <Link
      href={`/${locale}/category/${category.slug}`}
      className="group flex min-h-[140px] flex-col justify-between rounded-lg border border-navy/10 bg-white p-5 transition hover:border-navy/40"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-navy/5 text-navy">
          <Icon name={category.icon} className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold text-navy/25">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-ink transition group-hover:text-brass-dark">
        {category.name}
      </h3>
    </Link>
  );
}
