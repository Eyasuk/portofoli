import { SocialRow } from "./socialRow";
import { ThemeSwitcher } from "./themeSwitcher";

export function Header() {
  return (
    <header className="w-full pt-3">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-[var(--fg-bright)] sm:text-2xl">
          Eyasu Kibru
        </h1>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <SocialRow />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
