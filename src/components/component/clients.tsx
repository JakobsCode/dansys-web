const clients = [
  {
    name: "Berufsgenossenschaft Handel und Warenlogistik",
    logo: "/bghw.svg",
  },
  {
    name: "Deutsche Telekom",
    logo: "/dtag.svg",
  },
  {
    name: "Sopra Steria",
    logo: "/soppa.svg",
  },
  {
    name: "BearingPoint",
    logo: "/bearingpoint.svg",
  },
  {
    name: "Öffentliche Verwaltung",
    logo: "/adler.svg",
  },
];

export default function Clients() {
  return (
    <section className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unsere Kunden
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Die dansys GmbH IT-Consulting hat das Vertrauen führender
            Unternehmen in den Bereichen Medizin, Telekommunikation,
            Versicherungen, Banken und öffentlicher Verwaltung gewonnen. Hier
            sind einige unserer renommierten Partner und Kunden:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12 justify-center mx-auto">
          {clients.map((client) => (
            <div className="flex flex-col items-center" key={client.name}>
              <img
                src={client.logo}
                width="140"
                height="70"
                alt={client.name}
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <div className="text-muted-foreground text-center mt-4">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
