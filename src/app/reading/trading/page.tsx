import Link from "next/link";

const articles = [
  {
    title: "The Fear of Losing Money",
    source: "chrisperruna.com",
    href: "https://www.chrisperruna.com/2007/07/23/the-fear-of-losing-money/",
    notes: "Scared money is dead money. The difference between successful and unsuccessful investors isn't intelligence—it's psychology. Accept that losses are inevitable, focus on positive expectancy over time, and never let fear paralyze decision-making.",
  },
  {
    title: "The Holy Grail of Trading: It's Not Your System",
    source: "chrisperruna.com",
    href: "https://www.chrisperruna.com/2007/07/11/the-holy-grail-of-trading-its-not-your-system/",
    notes: "Everyone chases the perfect system, but that's not what separates winners from losers. The Market Wizards all used wildly different strategies—what they shared was psychological mastery and disciplined money management. It's you that makes the system work, not the other way around.",
  },
  {
    title: "Position Sizing and Expectancy",
    source: "chrisperruna.com",
    href: "https://www.chrisperruna.com/2007/06/26/position-sizing-and-expectancy/",
    notes: "The math behind survival. Position size = risk % ÷ stop loss %. Expectancy = (win rate × avg win) - (loss rate × avg loss). A 40% win rate can still be highly profitable with proper sizing. Commissions and slippage can kill an edge—treat it like a business, not gambling.",
  },
  // Add more articles here
];

export default function TradingReading() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <Link href="/reading" className="text-stone hover:text-ochre text-sm">
          ← Back to Reading
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-ink">
          Trading & Psychology
        </h1>
        <p className="text-lg text-ink-muted">
          Market psychology, risk management, and the mental game.
        </p>
      </header>

      <div className="space-y-6">
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-lg border border-border hover:border-ochre/50 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg text-ink group-hover:text-ochre transition-colors font-medium">
                  {article.title}
                </h2>
                <span className="text-sm text-stone shrink-0">
                  {article.source}
                </span>
              </div>
              {article.notes && (
                <p className="text-stone leading-relaxed">
                  {article.notes}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
