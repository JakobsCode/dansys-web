import { createFileRoute } from "@tanstack/react-router";

import Introduction from "@/components/component/introduction";
import Competencies from "@/components/component/competencies";
import Clients from "@/components/component/clients";
import Footer from "@/components/component/footer";
import { SuccessStory } from "@/components/component/successstory";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Introduction />
        <SuccessStory />
        <Competencies />
        <Clients />
        <Footer />
      </main>
    </div>
  );
}
