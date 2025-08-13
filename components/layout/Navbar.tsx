import { ThemeChanger } from "@/app/Theme-changer";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navLinks";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-4 bg-background/30 backdrop-blur-sm">
      <div className="container flex flex-row justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl">RootScope</h1>
        </Link>
        <ul className="md:flex flex-row justify-between gap-8 hidden">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-end space-x-2">
          <ThemeChanger />
          <Button asChild>
            <Link
              href="https://github.com/rootscope/rootscope"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <GitHubLogoIcon className="w-4 h-4 mr-2" /> Get Started
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
