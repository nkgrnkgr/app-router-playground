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

export const fetchTodo = async (id: number) => {
  console.log("called fetchTodo", id);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  const data = await response.json();
  return data as Todo;
};
