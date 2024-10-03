import { Fragment } from "react";
import { Link } from "../Link";

function Spacer() {
  return <span className="text-gray-400 mx-2">/</span>;
}

const LINKS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/01-client-server",
    label: "01-client-server",
  },
  {
    href: "/02-routing",
    label: "02-routing",
  },
  {
    href: "/03-server-actions",
    label: "03-server-actions",
  },
  {
    href: "/04-cache",
    label: "04-cache",
  },
];

export function Header() {
  return (
    <header className="m-6">
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {LINKS.map(({ href, label }, index) => (
          <Fragment key={href}>
            <Link href={href}>{label}</Link>
            {index !== LINKS.length - 1 && <Spacer />}
          </Fragment>
        ))}
      </nav>
    </header>
  );
}
