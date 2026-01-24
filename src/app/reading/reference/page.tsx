import Link from "next/link";

const entries = [
  {
    title: "Retail Edge in Markets",
    source: "@nope_its_lily",
    notes: `Retail traders' actual edges:

1. Wider universe of products — institutions have mandates limiting what they can trade (liquidity/risk constraints). You don't.

2. Customer flow flag — you can see where retail is piling in.

3. Scale — things that make money are simpler under $100M, even simpler under $1M. Above that is a much harder problem.

Key insight: Most retail traders blow up trading ES (S&P futures) where institutions HAVE to execute. Trade "dumber" products instead — small/micro caps, less liquid futures. ES has the worst edge/var ratio of basically any futures product.`,
  },
  {
    title: "Chris Perruna's Stock Screening Criteria",
    source: "chrisperruna.com",
    notes: `Simple parameters for growth stock selection:

1. Great product, service and brand
2. Rising sales QoQ and YoY
3. Rising EPS QoQ and YoY (or EPS turning positive)
4. Increasing institutional sponsorship (500-1000 fund range is prime)
5. Technically: near support, at breakout, or within base (near 50d or 200d MA)

Philosophy: CANSLIM foundation. Hold positions over time. Cut losers quicker, take profits when technicals extend (100%+ above 200d MA). 95% of people should just own index funds.

Portfolio structure: Growth (active), IRA (passive), Index Funds (passive), Crypto (active & passive). Growth account = ~25% of investable net worth.`,
  },
  // Add more entries here
];

export default function ReferenceReading() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <Link href="/reading" className="text-stone hover:text-ochre text-sm">
          ← Back to Reading
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-ink">
          Reference
        </h1>
        <p className="text-lg text-ink-muted">
          Condensed wisdom, threads, and extracted knowledge surrounding trading/investing/money management.
        </p>
      </header>

      <div className="space-y-6">
        {entries.map((entry) => (
          <div
            key={entry.title}
            className="p-5 rounded-lg border border-border"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg text-ink font-medium">
                  {entry.title}
                </h2>
                <span className="text-sm text-stone shrink-0">
                  {entry.source}
                </span>
              </div>
              <pre className="text-stone leading-relaxed whitespace-pre-wrap font-sans text-sm">
                {entry.notes}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
