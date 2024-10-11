import { FaCheck } from "react-icons/fa6";
import { IconCloud } from "../ui/iconcloud";

const skills = [
  {
    title: "Analyse und Konzeption",
    description:
      "Wir analysieren Ihre Geschäftsanforderungen und entwerfen maßgeschneiderte IT-Lösungen für komplexe Projekte.",
  },
  {
    title: "Implementierung und Entwicklung",
    description:
      "Entwicklung von sicheren und skalierbaren IT-Systemen mit modernen Technologien.",
  },
  {
    title: "Betrieb und Wartung",
    description:
      "Sicherstellung des reibungslosen Betriebs und Wartung kritischer Systeme.",
  },
  {
    title: "Qualitätssicherung",
    description:
      "Durchführung strenger Tests zur Sicherstellung der höchsten Qualitätsstandards.",
  },
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Competencies() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Unsere Kernkompetenzen
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Bei der dansys GmbH bieten wir maßgeschneiderte IT-Lösungen, die
              auf die individuellen Anforderungen unserer Kunden abgestimmt
              sind. Unsere Kernkompetenzen umfassen:
            </p>
            <ul className="grid gap-4">
              {skills.map((skill) => (
                <li className="flex items-start gap-2">
                  <FaCheck className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
}
