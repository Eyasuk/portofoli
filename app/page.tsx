import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Company } from "@/components/company";
import { ThemesSection } from "@/components/themesSection";
import { Workshop } from "@/components/workshop";
import { OtherProjects } from "@/components/otherProjects";
import { OffTheClock } from "@/components/offTheClock";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <About />
        <Company />
        <OtherProjects />
        <ThemesSection />
        <Workshop />
        <OffTheClock />
      </main>
      <Footer />
    </div>
  );
}
