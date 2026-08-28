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
      className="group flex flex-col overflow-hidden rounded-lg border border-navy/10 bg-white transition hover:border-navy/40"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
        {category.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Icon name={category.icon} className="h-10 w-10 text-navy/20" />
          </div>
        )}
        <span className="absolute right-2 top-2 rounded bg-white/85 px-1.5 py-0.5 text-xs font-semibold text-navy/40 backdrop-blur">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="flex items-center gap-2.5 p-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-navy/5 text-navy">
          <Icon name={category.icon} className="h-4 w-4" />
        </span>
        <h3 className="text-base font-semibold text-ink transition group-hover:text-brass-dark">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}
