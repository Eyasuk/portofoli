import { socials } from "@/components/socials";

export const site = {
  url: "https://eyasuk.semayi.xyz",
  name: "Eyasu Kibru",
  jobTitle: "Computer Engineer and Full Stack Developer",
  locality: "Addis Ababa",
  country: "Ethiopia",
  twitter: "@Eyasu_kga",
  description:
    "Eyasu Kibru is a Computer Engineer and full stack developer in Addis Ababa, Ethiopia. Web and mobile development, Omarchy and Linux themes, and 3D printing projects.",
  /** Shorter line for social cards, where long descriptions get truncated. */
  shortDescription:
    "Computer Engineer and full stack developer in Addis Ababa, Ethiopia. Open source, Linux themes and 3D printing.",
  portrait: {
    url: "/portrait.png",
    width: 900,
    height: 900,
    alt: "Eyasu Kibru portrait",
  },
} as const;

/** Profile URLs Google uses to tie this page to the same person elsewhere. */
export const sameAs = socials
  .filter((s) => !s.url.endsWith("instagram.com/"))
  .map((s) => s.url);

export const keywords = [
  "Eyasu Kibru",
  "Computer Engineer Ethiopia",
  "Full Stack Developer Addis Ababa",
  "software engineer Addis Ababa",
  "web developer Ethiopia",
  "hire developer Ethiopia",
  "create a website in Ethiopia",
  "Next.js developer Ethiopia",
  "Omarchy themes",
  "Hyprland theme",
  "Arch Linux ricing",
  "Rook MK1 3D printer",
  "CoreXY build",
  "Warka Fitness",
  "Solicy",
  "Semayi Labs",
  "open source Ethiopia",
];
