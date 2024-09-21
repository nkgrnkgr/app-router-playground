import { PageContents } from "@/components/PageContents";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <>
      <Title>Home</Title>
      <PageContents>
        <p>App Router Playgroundへようこそ</p>
        <p>
          01 - 04 までページを作成しています。自由にコードを書いてみましょう。
        </p>
      </PageContents>
    </>
  );
}
