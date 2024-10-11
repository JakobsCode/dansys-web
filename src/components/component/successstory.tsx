import TiltedExperienceScroll from "@/components/component/experience";

const stories = [
  {
    title: "1999 - Gründung der dansys GmbH",
    description:
      "Masoud Danaei gründete dansys GmbH in Aachen, mit dem Fokus auf IT-Consulting und der Entwicklung hochwertiger IT-Systeme.",
  },
  {
    title: "2000 - Erste große Kundenprojekte",
    description:
      "Schon im ersten Jahr konnten wir uns durch Projekte mit renommierten Kunden wie T-Mobile (heute Deutsche Telekom) etablieren.",
  },
  {
    title: "2010 - Ausbau der freiberuflichen Experten",
    description:
      "Unser Team erweiterte sich durch den Zuwachs von über 20 hochqualifizierten freiberuflichen Experten, die mit uns eng zusammenarbeiten.",
  },
  {
    title: "2018 - Branchenübergreifende Expansion",
    description:
      "Wir haben unsere Expertise in den Bereichen Medizin, Telekommunikation, Versicherungen, Banken und öffentlicher Verwaltung weiter ausgebaut.",
  },
  {
    title: "2022 - Erfolgreiche Großprojekte mit Partnern",
    description:
      "Mit langjährigen Partnern wie Sopra Steria, T-System, BearingPoint und aus dem öffentlichen Dienst haben wir komplexe Projekte erfolgreich umgesetzt und unser Portfolio erweitert.",
  },
];

export function SuccessStory() {
  return (
    <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-1 md:gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unsere Erfolgsgeschichte
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Seit über 25 Jahren sind wir im IT-Bereich tätig und haben uns
                zu einem der führenden Unternehmen in der Region entwickelt.
                Erfahren Sie mehr über unseren Werdegang.
              </p>
            </div>
            <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">
              {stories.map((story) => (
                <div className="grid gap-1 relative" key={story.title}>
                  <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div>{story.title}</div>
                  <div className="text-muted-foreground">
                    {story.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <TiltedExperienceScroll />
        </div>
      </div>
    </section>
  );
}
