import { Link } from "@/components/Link";
import { DataViewer } from "./_components/DataViewer";
import { fetchData } from "./_functions/fetchData";

export default async function Page() {
  const data = await fetchData();
  return (
    <div>
      <DataViewer message={data.message} />
      <div>
        <Link href="/02-routing/users">users</Link>
      </div>
    </div>
  );
}
