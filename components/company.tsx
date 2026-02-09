import React from "react";
import { CustomDivider } from "./customDivide";
import NextImage from "next/image";

const experienceData = [
  {
    date: "September 2025 - Present",
    company: "Warka Fitness",
    logo: "/warka1.png",
    link: "https://warkafitness.com",
    description: "Co Founded and lead developer at Warka Fitness (warkafitness.com), helping build Ethiopia's largest platform for fitness courses, meal planning, and influencer-led programs.",
    width: 60,
    height: 60,
  },
  {
    date: "Jun 2022 - Aug 2022 & Dec 2023 - Jul 2024",
    company: "Solicy.net",
    logo: "/solicy_logo_new.png",
    link: "https://solicy.net",
    width: 40,
    height: 40,
    points: [
      {
        title: "Solicy Company Website",
        text: "Contributed significantly to the full-stack development and design of the official company website for Solicy, a leading blockchain and custom software development firm.",
        link: "https://solicy.net"
      },
      {
        title: "BTicino Home – Electronics & Home Equipment E-commerce Platform",
        text: "Played a key role in system design, architecture, and implementation of a robust online store specializing in electrical installation equipment and home automation products (Bticino brand).",
        link: "https://www.bticinohome.am"
      },
      {
        title: "DeliverEnd – Secure Peer-to-Peer Delivery & Logistics Mobile App",
        text: "Made meaningful backend contributions, including API development and integration, to a logistics application that enables safe, contactless item delivery for online marketplace transactions.",
        link: "https://apps.apple.com/us/app/deliverend/id1449106896"
      },
      {
        title: "ZeepUp – Premium Food Delivery & Ordering Platform",
        text: "Contributed substantially to backend development (APIs, business logic, integrations) for a high-quality food delivery service focused on curated menus, chef specialties, and sustainable ingredients.",
        link: "https://www.zeepup.com"
      }
    ]
  }
];

export function Company() {
  return (
    <section className="w-full mt-16">
      <CustomDivider />

      <div className="relative mx-auto w-full max-w-5xl border-l-0 border-white/10 md:border-l">
        <div className="ml-4 border-l border-white/10 px-6 py-12 md:ml-0 md:border-l-0 md:px-12">
          <h2 className="mb-12 text-2xl">Worked in</h2>

          <div className="flex flex-col gap-20">
            {experienceData.map((job, index) => (
              <div key={index} className="relative pl-8 pt-6">
                <div className="absolute -top-8 -left-7 flex -translate-x-2 items-center gap-2 lg:-left-16 xl:-left-20">
                  <div className="z-10 whitespace-nowrap rounded-full border border-white/20 bg-[#111214] px-4 py-1.5 text-xs text-gray-300">
                    {job.date}
                  </div>
                </div>

                <div className="mb-6 flex items-center gap-4">
                  <NextImage src={job.logo} width={job.width} height={job.height} alt={`${job.company} logo`} />
                  <h3 className="text-lg">
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--accent)] decoration-[var(--accent)] hover:underline hover:underline-offset-4"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                </div>

                <div className="max-w-2xl">
                  {job.description && <p>{job.description}</p>}
                  {job.points && (
                    <ul className="mt-6 space-y-6">
                      {job.points.map((point, i) => (
                        <li key={i} className="relative pl-6">
                          <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-zinc-600"></span>
                          <p>
                            {point.link ? (
                              <a
                                href={point.link}
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[var(--accent)] decoration-[var(--accent)] hover:underline hover:underline-offset-4"
                              >
                                {point.title}
                              </a>
                            ) : (
                              <span className="font-medium text-white">{point.title}</span>
                            )}{" "}
                            - {point.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CustomDivider />
    </section>
  );
}
