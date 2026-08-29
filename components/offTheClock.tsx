import { CustomDivider } from "./customDivide";

const interests = [
  {
    title: "Large-scale engineering",
    body: "I helped build the very first boat for the GERD in Ethiopia. Watercraft, infrastructure, anything built at a scale where the tolerances stop being theoretical. I&apos;ll talk about it for hours.",
  },
  {
    title: "Linux, for as long as I can remember",
    body: "Arch, Hyprland and Neovim. I like owning every layer of the machine I work on, which is the same instinct that got me into building the printer. It's also where the themes come from.",
  },
  {
    title: "Open source that goes somewhere",
    body: "If you're building something community-driven, or want to collaborate on something new, I'm all ears.",
  },
];

export function OffTheClock() {
  return (
    <section className="w-full">
      <CustomDivider />
      <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-12">
        <h2 className="mb-10 text-2xl">Off the clock</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {interests.map((item) => (
            <div key={item.title} className="border-t border-[var(--border)] pt-5">
              <h3 className="mb-3 text-base text-[var(--fg-bright)]">{item.title}</h3>
              <p className="text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
