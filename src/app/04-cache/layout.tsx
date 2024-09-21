import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "04-cache",
  description: "...",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
