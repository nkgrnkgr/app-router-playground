export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data as Todo[];
};

// https://nextjs.org/docs/app/building-your-application/caching
// https://zenn.dev/wac/articles/7cc49325c66c71
// Request Memoization
// Next.jsが拡張している fetchAPI は、リクエストをキャッシュする
//
export const fetchTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  const data = await response.json();
  return data as Todo;
};

export const fetchTodoNoStore = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      cache: "no-store",
    },
  );
  const data = await response.json();
  return data as Todo;
};
