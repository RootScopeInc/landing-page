import { Button } from "@/components/ui/button";
import { footerLinks } from "@/data/footerLinks";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <p>
            Try it now: SSH into a preconfigured VM — no setup. Or install
            locally with minimal steps on GitHub.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
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
            {/* <Button variant="secondary">Learn more</Button> */}
          </div>
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2025 RootScope Inc. All rights reserved.</p>
          <Link href="mailto:support@rootscope.io">support@rootscope.ca</Link>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
