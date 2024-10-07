export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// https://nextjs.org/docs/app/building-your-application/caching
// https://zenn.dev/wac/articles/7cc49325c66c71
// Request Memoization
// Next.jsが拡張している fetchAPI は、リクエストをキャッシュする
//
export const fetchTodo = async (id: number) => {
  const response = await fetch(`http://localhost:3001/todos/${id}`);
  const data = await response.json();
  return data as Todo;
};

// https://zenn.dev/wac/articles/7cc49325c66c71#data-cache%E3%81%AE%E5%8B%95%E4%BD%9C
// > データがキャッシュされるかどうかにかかわらず、リクエストは常にmemoized(メモ化)され、Reactのレンダーパスの間に同じデータに重複したリクエストを行うことを防ぎます。
export const fetchTodoNoStore = async (id: number) => {
  const response = await fetch(`http://localhost:3001/todos/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data as Todo;
};
