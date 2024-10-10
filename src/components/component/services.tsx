import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting modern, responsive, and user-friendly web applications.",
  },
  {
    title: "Mobile Development",
    description:
      "Developing high-performance, feature-rich mobile apps for iOS and Android.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leveraging cloud technologies to build scalable and secure infrastructure.",
  },
  {
    title: "Data Analytics",
    description:
      "Transforming data into actionable insights to drive business decisions.",
  },
  {
    title: "UX/UI Design",
    description: "Creating intuitive and visually appealing user experiences.",
  },
  {
    title: "DevOps Consulting",
    description:
      "Optimizing your software development and deployment processes.",
  },
];

export default function Services() {
  return (
    <section className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Acme Software offers a wide range of services to help our clients
            achieve their business goals. From custom software development to
            cloud-based solutions, we have the expertise to deliver exceptional
            results.
          </p>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card className="bg-muted p-6 rounded-xl">
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
