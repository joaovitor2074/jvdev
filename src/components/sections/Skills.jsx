import reactIcon from "@/assets/images/icons/react.png";
import viteIcon from "@/assets/images/icons/vite.png";
import tailwindIcon from "@/assets/images/icons/tailwind.png";
import framerIcon from "@/assets/images/icons/frame.png";
import wordpressIcon from "@/assets/images/icons/wordpress.png";

import nodeIcon from "@/assets/images/icons/node.png";
import expressIcon from "@/assets/images/icons/express.png";
import mysqlIcon from "@/assets/images/icons/mysql.png";
import nestIcon from "@/assets/images/icons/nest.png";

import threeIcon from "@/assets/images/icons/three.png";
import blenderIcon from "@/assets/images/icons/blender.png";

import gitIcon from "@/assets/images/icons/git.png";
import linuxIcon from "@/assets/images/icons/linux.png";
import puppeteerIcon from "@/assets/images/icons/puppeteer.png";
import vercelIcon from "@/assets/images/icons/vercel.png";
import { SiPostgresql, SiPrisma, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Front-end",
      items: [
        { name: "React", icon: reactIcon },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "Vite", icon: viteIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
        { name: "Framer Motion", icon: framerIcon },
        { name: "WordPress", icon: wordpressIcon },
      ],
    },
    {
      title: "Back-end e dados",
      items: [
        { name: "Node.js", icon: nodeIcon },
        { name: "Express", icon: expressIcon },
        { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
        { name: "Prisma", Icon: SiPrisma, color: "#E5E7EB" },
        { name: "NestJS", icon: nestIcon },
        { name: "MySQL", icon: mysqlIcon },
      ],
    },
    {
      title: "3D e interfaces",
      items: [
        { name: "Three.js", icon: threeIcon },
        { name: "Blender", icon: blenderIcon },
      ],
    },
    {
      title: "Ferramentas",
      items: [
        { name: "Git", icon: gitIcon },
        { name: "Linux", icon: linuxIcon },
        { name: "Puppeteer", icon: puppeteerIcon },
        { name: "Vercel", icon: vercelIcon },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-kicker mx-auto">Stack técnica</span>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mt-3">
            Tecnologias
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ferramentas que utilizo em sistemas reais, estudos avançados,
            automações e aplicações em produção.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6"
            >
              <h3 className="text-white text-lg font-medium mb-4">
                {skill.title}
              </h3>

              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    {item.Icon ? (
                      <item.Icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                        aria-hidden="true"
                      />
                    ) : (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-5 h-5 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
