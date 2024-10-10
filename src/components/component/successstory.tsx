import TiltedExperienceScroll from "@/components/component/experience";

const stories = [
  {
    title: "2012 - Gründung des Unternehmens",
    description:
      "Mit der Vision, innovative IT-Lösungen zu entwickeln, wurde unser Unternehmen gegründet.",
  },
  {
    title: "2015 - Erste große Projekte",
    description:
      "Wir konnten unsere ersten großen Kunden gewinnen und erfolgreich Projekte umsetzen.",
  },
  {
    title: "2018 - Erweiterung des Teams",
    description:
      "Um das Wachstum zu unterstützen, haben wir unser Team deutlich erweitert.",
  },
  {
    title: "2021 - Umzug in neue Büroräume",
    description:
      "Mit dem Umzug in unsere neuen, modernen Büroräume konnten wir unsere Kapazitäten weiter ausbauen.",
  },
];

export function SuccessStory() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-1 md:gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unsere Erfolgsgeschichte
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Seit über 10 Jahren sind wir im IT-Bereich tätig und haben uns
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
