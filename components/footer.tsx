import { SocialRow } from "./socialRow";
import { CustomDivider } from "./customDivide";

export function Footer() {
  return (
    <footer className="w-full pb-6 pt-10">
      <CustomDivider />
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 pt-6 sm:flex-row sm:gap-4 sm:px-6 lg:px-8">
        <p className="text-sm text-[var(--fg-dim)]">
          © {new Date().getFullYear()} EK
        </p>
        <SocialRow size={34} />
      </div>
    </footer>
  );
}
