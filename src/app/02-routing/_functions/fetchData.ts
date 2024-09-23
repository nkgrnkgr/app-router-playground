type Data = {
  message: string;
};

export const fetchData = () => {
  return new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({ message: "Data fetched!" });
    }, 2000);
  });
};
