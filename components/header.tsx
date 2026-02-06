"use client";

import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/",
    color: "#ffffff",
    hoverColor: "#181717",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
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
    url: "https://x.com/",
    color: "#ffffff",
    hoverColor: "#ffffff",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/",
    color: "#14A800",
    hoverColor: "#14A800",
  },
];

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="w-full  pt-3">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-white sm:text-2xl">
          Eyasu Kibru
        </h1>

        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <SocialIcon
              key={social.name}
              url={social.url}
              target="_blank"
              rel="noreferrer"
              fgColor={hoveredIndex === index ? social.hoverColor : social.color}
              bgColor="transparent"
              style={{ height: 32, width: 32 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div >
    </header >
  );
}
