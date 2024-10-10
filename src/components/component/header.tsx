import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import Logo from "@/components/component/logo";

const headerLinks = [
  { label: "Home", to: "/" },
  { label: "Kontakt", to: "/contact" },
  { label: "Impressum", to: "/about" },
];

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0">
          <Logo width={80} height={80} />
          <span className="text-xl font-bold">Dansys GmbH</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {headerLinks.map((header) => (
              <NavigationMenuLink asChild key={header.to}>
                <Link
                  to={header.to}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2"
                >
                  {header.label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
