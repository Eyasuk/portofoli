import { sameAs, site } from "@/lib/site";

/**
 * Structured data for the page. This is what lets Google show a knowledge
 * panel style result and connect this site to the same person on GitHub,
 * LinkedIn and X, rather than treating each profile as unrelated.
 */
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      image: `${site.url}${site.portrait.url}`,
      jobTitle: site.jobTitle,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.locality,
        addressCountry: site.country,
      },
      sameAs,
      knowsAbout: [
        "Full stack web development",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Linux",
        "Arch Linux",
        "Hyprland",
        "Omarchy theming",
        "3D printing",
        "CoreXY printers",
        "Klipper firmware",
        "Open source software",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Warka Fitness",
        url: "https://warkafitness.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: `${site.name} | ${site.jobTitle}`,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      primaryImageOfPage: `${site.url}${site.portrait.url}`,
      inLanguage: "en",
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
