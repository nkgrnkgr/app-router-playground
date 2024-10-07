import { SubTittle } from "@/components/SubTitle";
import { TodoInitialLoad } from "./todoInitialLoad";
import { TodoInitialLoadNoStore } from "./todoInitialLoadNoStore";
import { TodoOnClickLoad } from "./todoOnClickLoad";

export async function TodoList() {
  return (
    <>
      <SubTittle>Todo List</SubTittle>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <span>1回目</span>
          <TodoInitialLoad id={1} />
        </li>
        <li>
          <span>2回目(サーバー側にはログは１回しかでない)</span>
          <TodoInitialLoad id={1} />
        </li>
        <li>
          <span>3回目</span>
          <TodoInitialLoadNoStore id={1} />
        </li>
        <li>
          <span>CORS違反</span>
          <TodoOnClickLoad id={1} />
        </li>
      </ul>
    </>
  );
}
