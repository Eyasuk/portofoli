import Image from "next/image";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { CustomDivider } from "@/components/customDivide";
import { Company } from "@/components/company";
import { OtherProjects } from "@/components/otherProjects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      <Header />
      <main>
        <About />
        <Company />
        <OtherProjects />
      </main>
      <Footer />
    </div >
  );
}
