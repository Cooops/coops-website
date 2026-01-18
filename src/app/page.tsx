import Image from "next/image";

const building = [
  {
    name: "OneGov",
    description: "AI for government affairs",
    href: "https://onegov.ai/",
    logo: "/images/onegov-logo-crop.png",
  },
  {
    name: "KamiBots",
    description: "Crypto game automation",
    href: "https://kamibots.xyz/",
    logo: "/images/whispo.jpg",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-ink">
          Cooper Ribb
        </h1>
        <p className="text-lg text-ink-muted leading-relaxed">
          Building things. Writing sometimes. Collecting taste.
        </p>
      </header>

      {/* Building */}
      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-stone">Building</h2>
        <div className="grid grid-cols-2 gap-4">
          {building.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 rounded-lg border border-border hover:border-ochre/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {project.logo && (
                  <div className="relative w-10 h-10 rounded overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <div className="text-ink group-hover:text-ochre transition-colors font-medium">
                    {project.name}
                  </div>
                  <div className="text-sm text-stone">
                    {project.description}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-stone">Projects</h2>
        <div className="space-y-3">
          <div>
            <span className="text-ink">ACR Labs</span>
            <span className="text-stone"> — Web3 ventures.</span>
          </div>
          <div>
            <span className="text-ink">Minerva</span>
            <span className="text-stone"> — E-commerce arbitrage engine. $250K+ revenue.</span>
          </div>
          <div>
            <span className="text-ink">BlackBorderBot</span>
            <span className="text-stone"> — MTGO market-making bot. Automated card trading.</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-stone">Previously</h2>
        <div className="space-y-3">
          <div>
            <span className="text-ink">Q2</span>
            <span className="text-stone"> — Senior Engineer. Fintech, multi-tenant banking software. 5 years.</span>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-stone">Writing</h2>
      </section>

      {/* Taste */}
      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-stone">Taste</h2>
        <div className="space-y-3">
          <div>
            <a href="#" className="text-ink hover:text-ochre">Obscura</a>
            <span className="text-stone"> — Baroque-meets-digital. Warm ochres, classical motifs.</span>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="space-y-4">
        <h2 className="text-sm uppercase tracking-widest text-stone">Connect</h2>
        <p className="text-ink-muted">
          <a href="https://github.com/cooops" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ochre">GitHub</a>
          {" · "}
          <a href="https://twitter.com/coopesmtg" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ochre">Twitter</a>
          {" · "}
          <a href="https://www.linkedin.com/in/cooper-ribb/" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ochre">LinkedIn</a>
          {" · "}
          <a href="mailto:cooperribb@gmail.com" className="text-ink hover:text-ochre">Email</a>
        </p>
      </section>
    </div>
  );
}
