type Props = {
  message: string;
};

export function DataViewer({ message }: Props) {
  return (
    <div>
      <h3>Data:</h3>
      <div>{message}</div>
    </div>
  );
}
