import { SubTittle } from "@/components/SubTitle";

type Props = {
  children: React.ReactNode;
};

export function Server({ children }: Props) {
  // ここでは window オブジェクトなどブラウザのAPIにアクセスすることができません。
  // このコンソールログはブラウザのコンソールではなく、サーバーのコンソールに出力されます。
  console.log(new Date());

  return (
    <div>
      <SubTittle>This is Server Component</SubTittle>
      <p>このコンポーネントはサーバーで実行されます。</p>
      <div className="my-4">{children}</div>
    </div>
  );
}
