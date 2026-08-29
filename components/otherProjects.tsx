import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Projects without a `href` render as plain cards rather than dead links -
// add the URL here once they have somewhere to point.
const projects: { name: string; href?: string }[] = [
  { name: "Semayi Labs", href: "https://semayi.xyz" },
  { name: "Better Chess", href: "https://better-chess.semayi.xyz" },
  { name: "Ethio index" },
  { name: "BTBC.org", href: "https://btbcon.org" },
  { name: "btc wallet" },
];

export function OtherProjects() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-16 text-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
        <Image
          src="/linesBackground.svg"
          alt=""
          aria-hidden="true"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      <div className="relative">
        <h2 className="mb-12 text-2xl">Other projects</h2>
        <div className="grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) =>
            proj.href ? (
              <a
                key={proj.name}
                href={proj.href}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-xs rounded-lg border border-[var(--border)] px-8 py-2 text-center text-[var(--link)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]/40 hover:underline hover:underline-offset-4"
              >
                {proj.name}
              </a>
            ) : (
              <span
                key={proj.name}
                className="w-full max-w-xs rounded-lg border border-[var(--border)] px-8 py-2 text-center text-[var(--fg-dim)]"
              >
                {proj.name}
              </span>
            )
          )}
          <a
            href="https://github.com/eyasuk"
            target="_blank"
            rel="noreferrer"
            className="flex w-full max-w-xs items-center justify-center gap-2 text-[var(--link)] transition-colors hover:underline hover:underline-offset-4"
          >
            more on github
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
