import { Link } from "@/components/Link";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <Main>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="01-client-server">01-client-server</Link>
        </li>
      </ul>
    </Main>
  );
}
