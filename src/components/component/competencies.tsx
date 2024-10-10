import { FaCheck } from "react-icons/fa6";

export default function Competencies() {
  return (
    <section className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Core Competencies
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              At Acme Software, we specialize in delivering cutting-edge
              software solutions that empower our clients to achieve their
              business goals. Our core competencies include:
            </p>
            <ul className="grid gap-4">
              <li className="flex items-start gap-2">
                <FaCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Web Development</h3>
                  <p className="text-muted-foreground">
                    Crafting modern, responsive, and user-friendly web
                    applications.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Mobile Development</h3>
                  <p className="text-muted-foreground">
                    Developing high-performance, feature-rich mobile apps for
                    iOS and Android.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Cloud Solutions</h3>
                  <p className="text-muted-foreground">
                    Leveraging cloud technologies to build scalable and secure
                    infrastructure.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Data Analytics</h3>
                  <p className="text-muted-foreground">
                    Transforming data into actionable insights to drive business
                    decisions.
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
