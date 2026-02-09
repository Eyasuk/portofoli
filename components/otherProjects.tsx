import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function OtherProjects() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-16 text-c
        enter">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
        <Image
          src="/linesBackground.svg"
          alt="background grid"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      <h2 className="mb-12 text-2xl">Other projects</h2>
      <div className="mb-16 grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Semayi Labs", href: "https://semayi.dev" },
          { name: "Ethio index", href: "#" },
          { name: "BTBC.org", href: "https://btbc.org" },
          { name: "btc wallet", href: "#" }
        ].map((proj) => (
          <a
            key={proj.name}
            href={proj.href}
            className="w-full max-w-xs rounded-lg border border-white/15 px-8 py-2 text-center text-[var(--accent)] transition-colors hover:border-white/40 hover:bg-white/10 hover:underline hover:underline-offset-4"
          >
            {proj.name}
          </a>
        ))}
        <a
          href="https://github.com/eyasuk"
          target="_blank"
          rel="noreferrer"
          className="flex w-full max-w-xs items-center justify-center gap-2 text-[var(--accent)] transition-colors hover:underline hover:underline-offset-4"
        >
          more on github
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mx-auto max-w-3xl space-y-12 text-left">
        <h3 className="text-lg">We can connect if you're interested in...</h3>
        <ul className="space-y-8">
          <li className="flex gap-4">
            <span className="text-white">•</span>
            <p>I’m usually deep into some kind of hardware project. Lately, it’s been a custom Rook MK1 3D printer, but I just love the process of building things from the ground up and seeing them actually work.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-white">•</span>
            <p>
              I have a huge soft spot for big engineering projects. I actually helped build the very first boat for the GERD in Ethiopia, so I’m always down to chat about watercraft, infrastructure, or anything that involves building on a massive scale.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="text-white">•</span>
            <p>
              I’m an avid fan of Linux and have been for as long as I can remember. I really value the total control I get with software like Arch and Neovim, but I’m always looking to connect over other open-source projects. If you’re building something community-driven or want to collaborate on something new, I’m all ears.
            </p>
          </li>
        </ul>
      </div>
    </section>)
};
