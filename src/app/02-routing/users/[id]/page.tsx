import { BackButton } from "./_components/BackButton";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ params }: Props) {
  return (
    <div>
      <p>User ID: {params.id}</p>
      <BackButton />
    </div>
  );
}
