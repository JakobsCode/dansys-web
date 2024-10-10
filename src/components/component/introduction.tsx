import { BlurText } from "@/components/ui/blurtext";
import GradientText from "@/components/ui/gradienttext";

export default function Introduction() {
  return (
    <section className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <BlurText
                text="Ihre Experten für innovative IT-Systemlösungen."
                delay={35}
                className=""
              />
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              dansys GmbH ist seit über zwei Jahrzehnten Ihr zuverlässiger
              Partner in der Entwicklung unternehmenskritischer IT-Systeme.
              Vertrauen Sie auf unser erfahrenes Team und unsere
              maßgeschneiderten Lösungen für Branchen wie Medizin,
              Telekommunikation, Banken und öffentliche Verwaltung.
            </p>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
