import Link from "next/link";

const categories = [
  {
    slug: "trading",
    name: "Trading & Psychology",
    description: "Market psychology, risk management, and the mental game.",
    icon: "◈",
    count: 3,
  },
  {
    slug: "startups",
    name: "Startups & Building",
    description: "Founding, scaling, and the craft of making things.",
    icon: "◉",
    count: 0,
  },
  {
    slug: "thinking",
    name: "Thinking & Mental Models",
    description: "Decision making, frameworks, and clear thinking.",
    icon: "◎",
    count: 0,
  },
  {
    slug: "reference",
    name: "Reference",
    description: "Condensed wisdom, threads, and extracted knowledge surrounding trading/investing/money management.",
    icon: "◇",
    count: 1,
  },
  // Add more categories here
];

export default function Reading() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-ink">
          Reading
        </h1>
        <p className="text-lg text-ink-muted">
          Articles, essays, and ideas worth saving.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/reading/${category.slug}`}
            className="group block"
          >
            <div className="flex gap-5 p-4 rounded-lg border border-border hover:border-ochre/50 transition-colors">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-parchment-dark shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                <span className="text-3xl text-stone/30">{category.icon}</span>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-xl text-ink group-hover:text-ochre transition-colors font-medium">
                  {category.name}
                </h2>
                <p className="text-stone mt-1">
                  {category.description}
                </p>
                <span className="text-sm text-stone/60 mt-2">
                  {category.count} {category.count === 1 ? "article" : "articles"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
