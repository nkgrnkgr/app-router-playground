import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "03-server-actions",
  description: "...",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
