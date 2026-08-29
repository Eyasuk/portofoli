import Image from "next/image";

export function About() {
  return (
    <div className="flex justify-center px-6 pt-10">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-16 md:px-0">

        <div className="flex-[1.5] space-y-6">
          <h2 className="mb-6 text-2xl">About</h2>

          <div className="space-y-2">
            <p>
              I&apos;m a Computer Engineer from Addis Ababa, Ethiopia. I got interested in
              technology when I was about 14, even though access to resources was
              very limited at the time. I started by learning Linux and experimenting
              with open-source software.
            </p>
            <p>
              Over time, that curiosity turned into a strong desire to understand how
              things actually work, which pushed me to pursue Computer Engineering.
            </p>
            <p>
              Today, I&apos;ve had the chance to work with different companies as a full stack
              developer, including startups, where I&apos;ve tried new ideas, learned fast,
              and built practical solutions. I&apos;m deeply inspired by open-source values
              and enjoy creating tools that can make a real impact.
            </p>
          </div>

          <div className="flex items-center gap-10 pt-6">
            <a
              href="https://www.upwork.com/freelancers/~0120aad2c2c79f5935"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[var(--fg-bright)] transition-colors hover:text-[var(--link)]"
            >
              Hire my team
            </a>
            <a
              href="https://www.linkedin.com/in/eyasu-kibru-6151b61ab/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-bold text-[var(--fg-bright)] transition-colors hover:text-[var(--link)]"
            >
              Connect with me
            </a>
          </div>
        </div>

        <div className="relative flex-1 flex justify-center">
          <div className="absolute inset-0 scale-125 opacity-30 pointer-events-none flex items-center justify-center">
            <Image
              src="/linesBackground.svg"
              alt=""
              aria-hidden="true"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className=" relative -mt-2 h-[10.7rem] w-[10.7rem] overflow-hidden rounded-full border border-[var(--border)] md:h-[12.6rem] md:w-[12.6rem]">
            <Image
              src="/portrait.png"
              alt="Eyasu Kibru"
              fill
              className="object-cover "
            />
          </div>
        </div>

      </div>
    </div>
  );
}
