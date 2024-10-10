import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    title: "IT-Consulting",
    description:
      "Beratung und Entwicklung maßgeschneiderter IT-Lösungen für Ihr Unternehmen.",
  },
  {
    title: "Systemintegration",
    description:
      "Implementierung und nahtlose Integration von unternehmenskritischen IT-Systemen.",
  },
  {
    title: "Cloud-Lösungen",
    description:
      "Skalierbare und sichere Cloud-Infrastrukturen zur Unterstützung Ihres Geschäfts.",
  },
  {
    title: "Softwareentwicklung",
    description:
      "Individuelle Softwarelösungen, die speziell auf Ihre Geschäftsanforderungen zugeschnitten sind.",
  },
  {
    title: "Qualitätssicherung",
    description:
      "Umfassende Test- und QA-Services zur Sicherstellung hoher Softwarequalität.",
  },
  {
    title: "Projektmanagement",
    description:
      "Effiziente Planung, Steuerung und Durchführung von IT-Projekten mit höchster Präzision.",
  },
];

export default function Services() {
  return (
    <section className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unsere Dienstleistungen
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Die dansys GmbH bietet ein breites Spektrum an Dienstleistungen, um
            Ihre IT-Anforderungen effizient und nachhaltig zu erfüllen. Von der
            Beratung bis hin zur Umsetzung komplexer Systeme – wir begleiten Sie
            in jeder Phase.
          </p>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card className="bg-muted p-6 rounded-xl" key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
