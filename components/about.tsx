import Image from "next/image";

export function About() {
  return (
    <div className="flex justify-center px-6 pt-10">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-16 md:px-0">

        <div className="flex-[1.5] space-y-6">
          <h2 className="mb-6 text-2xl">About</h2>

          <div className="space-y-2">
            <p>
              I'm a Computer Engineer from Addis Ababa, Ethiopia. I got interested in
              technology when I was about 14, even though access to resources was
              very limited at the time. I started by learning Linux and experimenting
              with open-source software.
            </p>
            <p>
              Over time, that curiosity turned into a strong desire to understand how
              things actually work, which pushed me to pursue Computer Engineering.
            </p>
            <p>
              Today, I've had the chance to work with different companies as a full stack
              developer, including startups, where I've tried new ideas, learned fast,
              and built practical solutions. I'm deeply inspired by open-source values
              and enjoy creating tools that can make a real impact.
            </p>
          </div>

          <div className="flex items-center gap-10 pt-6">
            <button className="font-bold text-white transition-colors hover:text-[#6fa3e6]">
              Hire my team
            </button>
            <button className="flex items-center gap-1 font-bold text-white transition-colors hover:text-[#6fa3e6]">
              Connect with me
            </button>
          </div>
        </div>

        <div className="relative flex-1 flex justify-center">
          <div className="absolute inset-0 scale-125 opacity-30 pointer-events-none flex items-center justify-center">
            <Image
              src="/linesBackground.svg"
              alt="background grid"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className=" relative -mt-2 h-[10.7rem] w-[10.7rem] overflow-hidden rounded-full border border-white/10 md:h-[12.6rem] md:w-[12.6rem]">
            <Image
              src="/mine1.png"
              alt="photo of eyasu"
              fill
              className="object-cover "
            />
            <div className="pixel-matrix" aria-hidden="true" />
            <div className="matrix-shimmer" aria-hidden="true" />
          </div>
        </div>

      </div>
    </div>
  );
}
