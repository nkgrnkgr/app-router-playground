type Props = {
  children: React.ReactNode;
};

export function PageContents({ children }: Props) {
  return <main className="m-6">{children}</main>;
}
