type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return (
    <h1 className="mx-6 text-3xl font-semibold text-gray-700">{children}</h1>
  );
}
