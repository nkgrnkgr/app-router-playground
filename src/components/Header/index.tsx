import { Link } from "../Link";

function Spacer() {
  return <span className="text-gray-400 mx-2">/</span>;
}

export function Header() {
  return (
    <header className="m-6">
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link href="01-client-server">01-client-server</Link>
        <Spacer />
        <Link href="02-routing">02-routing</Link>
        <Spacer />
        <Link href="03-server-actions">03-server-actions</Link>
        <Spacer />
        <Link href="04-cache">04-cache</Link>
      </nav>
    </header>
  );
}
