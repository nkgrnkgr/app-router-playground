import { DataViewer } from "./_components/DataViewer";
import { fetchData } from "./_functions/fetchData";

export default async function Page() {
  const data = await fetchData();
  return <DataViewer message={data.message} />;
}
