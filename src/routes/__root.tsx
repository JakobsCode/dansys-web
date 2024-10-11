import Footer from "@/components/component/footer";
import Header from "@/components/component/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
