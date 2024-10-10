import Logo from "@/components/component/logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-0">
          <Logo width={50} height={50} />
          <span className="text-xl font-bold">Dansys GmbH</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div>
            <p className="text-sm text-primary-foreground/80">
              Elsa-Brändström-Straße 15, 53225 Bonn
            </p>
            <p className="text-sm text-primary-foreground/80">
              masoud.danaei@dansys.de
            </p>
            <p className="text-sm text-primary-foreground/80">
              +49 (0) 228 40399522
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
