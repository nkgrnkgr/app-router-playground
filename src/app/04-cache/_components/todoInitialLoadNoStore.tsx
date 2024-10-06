import { fetchTodo, fetchTodoNoStore } from "../_functions/fetchTodo";

type Props = {
  id: number;
};

export async function TodoInitialLoadNoStore({ id }: Props) {
  const todo = await fetchTodoNoStore(id);

  return (
    <>
      <p>Todo Initial Load NoStore {id} </p>
      <div className="m-4">{JSON.stringify(todo, null, 2)}</div>
    </>
  );
}
