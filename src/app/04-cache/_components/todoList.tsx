import { SubTittle } from "@/components/SubTitle";
import { TodoInitialLoad } from "./todoInitialLoad";
import { TodoOnClickLoad } from "./todoOnClickLoad";

export async function TodoList() {
  return (
    <>
      <SubTittle>Todo List</SubTittle>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <TodoOnClickLoad id={1} />
        </li>
        <li>
          <TodoInitialLoad id={1} />
        </li>
        <li>
          <span>2回目</span>
          <TodoInitialLoad id={1} />
        </li>
        <li>
          <span>3回目</span>
          <TodoInitialLoad id={1} />
        </li>
        <li>
          <span>4回目</span>
          <TodoInitialLoad id={1} />
        </li>
      </ul>
    </>
  );
}
