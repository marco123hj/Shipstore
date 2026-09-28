// Highlighted placeholder for real-world values only Marco can supply
// (legal entity name, tax IDs, confirmed shipping figures). Replace the
// text and drop the <Fill> wrapper before launch. Every one is easy to
// spot by its brass highlight.
export default function Fill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-brass/30 px-1 font-medium text-ink ring-1 ring-brass/50">
      {children}
    </span>
  );
}
