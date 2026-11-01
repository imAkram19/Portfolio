import { Reveal } from "./PageMotion";
import React from "react";
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Mail,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiCloudflare,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGithub,
  SiPrisma,
  SiFirebase,
  SiDocker,
  SiJsonwebtokens,
  SiZod,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";
import BackgroundGrid from "./BackgroundGrid";

export default function MissionServices() {
  const skillCategories = [
    {
      id: 1,
      category: "Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "C", icon: SiC },
      ],
      mobileSkills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "C", icon: SiC },
      ],
      iconBg: "bg-[#ea580c]/10",
      iconColor: "text-[#ea580c]",
      headingColor: "text-[#9a3412]",
    },
    {
      id: 2,
      category: "Frontend",
      icon: Layout,
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "GSAP", icon: SiGreensock },
      ],
      mobileSkills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
        { name: "GSAP", icon: SiGreensock },
      ],
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      headingColor: "text-cyan-700",
    },
    {
      id: 3,
      category: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Flask", icon: SiFlask },
        { name: "Cloudflare Workers", icon: SiCloudflare },
        { name: "REST APIs", icon: FaServer },
      ],
      mobileSkills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Flask", icon: SiFlask },
        { name: "Cloudflare Workers", icon: SiCloudflare },
        { name: "REST APIs", icon: FaServer },
      ],
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      headingColor: "text-emerald-700",
    },
    {
      id: 4,
      category: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Supabase", icon: SiSupabase },
      ],
      mobileSkills: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Supabase", icon: SiSupabase },
      ],
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
      headingColor: "text-sky-700",
    },
    {
      id: 5,
      category: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "Prisma ORM", icon: SiPrisma },
        { name: "Firebase", icon: SiFirebase },
        { name: "Git & GitHub", icon: SiGithub },
        { name: "Docker", icon: SiDocker },
        { name: "JWT Auth", icon: SiJsonwebtokens },
        { name: "Zod", icon: SiZod },
      ],
      mobileSkills: [
        { name: "Prisma ORM", icon: SiPrisma },
        { name: "Docker", icon: SiDocker },
        { name: "Firebase", icon: SiFirebase },
        { name: "Git & GitHub", icon: SiGithub },
        { name: "JWT Auth", icon: SiJsonwebtokens },
        { name: "Zod", icon: SiZod },
      ],
      iconBg: "bg-[#ea580c]/10",
      iconColor: "text-[#ea580c]",
      headingColor: "text-[#9a3412]",
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <span className="index-label">01 / Skills</span>
        <h2>
          Built with care.
          <br />
          Backed by the right tools.
        </h2>
        <p>Web development, from the interface to the systems behind it.</p>
      </div>
      <div className="skill-list">
        {skillCategories.map((c) => (
          <Reveal className="skill-row" key={c.id}>
            <h3>{c.category}</h3>
            <div>
              {c.skills.map((s) => (
                <span key={s.name}>{s.name}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
