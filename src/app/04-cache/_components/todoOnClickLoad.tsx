"use client";

import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { type Todo, fetchTodo } from "../_functions/fetchTodo";

type Props = {
  id: number;
};

export function TodoOnClickLoad({ id }: Props) {
  const [todo, setTodo] = useState<Todo | null>();

  const handleClick = useCallback(() => {
    fetchTodo(id).then((data) => {
      setTodo(data);
    });
  }, [id]);

  return (
    <>
      <p>Todo onClick Load {id} </p>
      <Button onClick={handleClick}>Fetch</Button>
      <div className="m-4">{JSON.stringify(todo, null, 2)}</div>
    </>
  );
}
