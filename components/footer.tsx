"use client";

import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { CustomDivider } from "./customDivide";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/eyasuk",
    color: "#ffffff",
    hoverColor: "#181717",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eyasu-kibru-6151b61ab/",
    color: "#0A66C2",
    hoverColor: "#0A66C2",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    color: "#E4405F",
    hoverColor: "#E4405F",
  },
  {
    name: "X",
    url: "https://x.com/Eyasu_kga",
    color: "#ffffff",
    hoverColor: "#000000",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~0120aad2c2c79f5935",
    color: "#14A800",
    hoverColor: "#14A800",
  },
];

export function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <footer className="w-full pb-6 pt-10">
      <CustomDivider />
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 pt-6 sm:flex-row sm:gap-4 sm:px-6 lg:px-8">
        <p className="text-sm">© 2026 EK</p>
        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <SocialIcon
              key={social.name}
              url={social.url}
              target="_blank"
              rel="noreferrer"
              fgColor={hoveredIndex === index ? social.hoverColor : social.color}
              bgColor="transparent"
              style={{ height: 34, width: 34 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
