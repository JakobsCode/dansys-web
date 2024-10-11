import { BlurText } from "@/components/ui/blurtext";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <section className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <BlurText text="dansys GmbH" delay={35} className="" />
            </h1>
            <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              <p>Elsa-Brändström-Straße 15</p>
              <p>D-53225 Bonn</p>
            </div>
            <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              <p>Geschäftsführer:</p>
              <p>Dipl.-Ing. Masoud Danaei</p>
            </div>
            <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              <p>Tel: +49 (0) 228 40399522</p>
              <p>Fax: +49 (0) 228 40399524</p>
              <p>E-Mail: masoud.danaei@dansys.de</p>
            </div>
            <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              <p>Amtsgericht Bonn</p>
              <p>HBR-Nr.: 17016</p>
              <p>Ust-ID: DE202531277</p>
            </div>
            <div className="max-w-[600px] text-muted-foreground md:text-sm/relaxed">
              <p>
                Die Plattform zur Online-Streitbeilegung der Europäischen
                Kommission erreichen Sie unter:
                https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE
              </p>
              <p>
                Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle sind wir gesetzlich nicht
                verpflichtet; von einer freiwilligen Teilnahme sehen wir
                gegenwärtig ab.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/masoud.jpeg"
              width={400}
              alt="Geschäftsführer Masoud Danaei"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center lg:w-full"
            />
            <div className="text-center mt-4">
              Geschäftsführer Masoud Danaei
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
