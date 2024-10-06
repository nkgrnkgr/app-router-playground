import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { type Todo, fetchTodo } from "../_functions/fetchTodo";

type Props = {
  id: number;
};

export async function TodoInitialLoad({ id }: Props) {
  const todo = await fetchTodo(id);

  return (
    <>
      <p>Todo Initial Load {id} </p>
      <div className="m-4">{JSON.stringify(todo, null, 2)}</div>
    </>
  );
}
