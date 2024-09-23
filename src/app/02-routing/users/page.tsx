import { Link } from "@/components/Link";
import { SubTittle } from "@/components/SubTitle";

export default function Page() {
  return (
    <>
      <SubTittle>Users</SubTittle>
      <ul>
        <li>
          <Link href="/02-routing/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/02-routing/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/02-routing/users/3">User 3</Link>
        </li>
      </ul>
    </>
  );
}
