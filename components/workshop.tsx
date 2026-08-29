import Image from "next/image";

/**
 * Drop images into /public and list them here to turn on the photo grid.
 * e.g. { src: "/rook-build.jpg", alt: "Rook MK1 mid-build" }
 */
const photos: { src: string; alt: string }[] = [];

const specs = [
  { label: "Design", value: "Rook MK1 (CoreXY, LDO kit)" },
  { label: "Build volume", value: "110 × 110 × 112 mm" },
  { label: "Nozzle", value: "0.4 mm" },
  { label: "Usual profile", value: "0.2 mm PLA" },
  { label: "Slicer", value: "OrcaSlicer" },
  { label: "Control", value: "Klipper + OctoPrint" },
];

const printedParts = [
  "X carriage",
  "Left / right idlers",
  "Motor mounts",
  "Z endstop mount",
  "Rookery belt cradles",
  "Sherpa frame mount",
  "Foot mounts",
];

export function Workshop() {
  return (
    <section id="workshop" className="mx-auto w-full max-w-5xl px-6 py-16 md:px-12">
      <h2 className="mb-4 text-2xl">Workshop</h2>
      <p className="mb-10 max-w-2xl">
        Outside of work I&apos;m usually building hardware. Right now that&apos;s a Rook
        MK1, a small CoreXY printer I put together from the frame up, then used
        to print most of its own moving parts. The satisfying bit is the loop:
        print a bracket, bolt it on, measure what got better.
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h3 className="mb-4 text-base text-[var(--fg-bright)]">The machine</h3>
          <dl className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 py-2.5">
                <dt className="text-sm text-[var(--fg-dim)]">{spec.label}</dt>
                <dd className="text-right text-sm text-[var(--fg)]">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="mb-4 text-base text-[var(--fg-bright)]">
            Parts it printed for itself
          </h3>
          <ul className="flex flex-wrap gap-2">
            {printedParts.map((part) => (
              <li
                key={part}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg-dim)]"
              >
                {part}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            Design by{" "}
            <a
              href="https://github.com/rolohaun/Rook"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--link)] hover:underline hover:underline-offset-4"
            >
              Rolohaun
            </a>
            . My configs and mods live alongside the build.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-dashed border-[var(--border-strong)] p-5">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h3 className="text-base text-[var(--fg-bright)]">Build log</h3>
          <span className="rounded-full border border-[var(--border-strong)] px-2 py-0.5 text-[10px] uppercase tracking-wide text-[var(--link)]">
            coming soon
          </span>
        </div>
        <p className="max-w-2xl text-sm">
          I&apos;m writing up the printer builds properly: what I printed, what
          broke, and what actually fixed it. Tuning notes, failed prints and the
          mods that stuck. It&apos;ll live here.
        </p>
      </div>

      {photos.length > 0 && (
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
