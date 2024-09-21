import { PageContents } from "@/components/PageContents";
import { Title } from "@/components/Title";
import type { Metadata } from "next";

const TITLE = "04-cache";

export const metadata: Metadata = {
  title: TITLE,
  description: "...",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Title>{TITLE}</Title>
      <PageContents>{children}</PageContents>
    </>
  );
}
