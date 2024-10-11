import { FaCheck } from "react-icons/fa6";

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
              <li className="flex items-start gap-2">
                <FaCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Analyse und Konzeption</h3>
                  <p className="text-muted-foreground">
                    Wir analysieren Ihre Geschäftsanforderungen und entwerfen
                    maßgeschneiderte IT-Lösungen für komplexe Projekte.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">
                    Implementierung und Entwicklung
                  </h3>
                  <p className="text-muted-foreground">
                    Entwicklung von sicheren und skalierbaren IT-Systemen mit
                    modernen Technologien.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Betrieb und Wartung</h3>
                  <p className="text-muted-foreground">
                    Sicherstellung des reibungslosen Betriebs und Wartung
                    kritischer Systeme.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Qualitätssicherung</h3>
                  <p className="text-muted-foreground">
                    Durchführung strenger Tests zur Sicherstellung der höchsten
                    Qualitätsstandards.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="Services"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
