const clients = [
  {
    name: "Client 1",
    logo: "/placeholder.svg",
  },
  {
    name: "Client 2",
    logo: "/placeholder.svg",
  },
  {
    name: "Client 3",
    logo: "/placeholder.svg",
  },
  {
    name: "Client 4",
    logo: "/placeholder.svg",
  },
  {
    name: "Client 5",
    logo: "/placeholder.svg",
  },
];

export default function Clients() {
  return (
    <section className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Clients
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Acme Software has had the privilege of working with industry-leading
            clients across various sectors. Here are some of our notable
            projects:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
          {clients.map((client) => (
            <img
              src={client.logo}
              width="140"
              height="70"
              alt={client.name}
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              key={client.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
