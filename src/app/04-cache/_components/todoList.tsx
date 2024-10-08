import { SubTittle } from "@/components/SubTitle";
import { RevalidateButton } from "./revalidateButton";
import { TodoInitialLoad } from "./todoInitialLoad";
import { TodoInitialLoadNoStore } from "./todoInitialLoadNoStore";
import { TodoOnClickLoad } from "./todoOnClickLoad";

/**
 * メモ化の挙動
 *
 * Request Memoization
 * - fetch APIのリクエストをメモリ上にキャッシュする
 * - ユーザー１がリクエストを飛ばして、ページ内で２回りクエストを飛ばすと２回目はキャッシュされたデータを返す
 *
 * Data Cache
 * - Next.jsのサーバーのローカルに同一のリクエストがキャッシュされる
 * - ユーザー１がリクエストと飛ばすとキャッシュされ、ユーザー2がリクエストを飛ばすとキャッシュからデータを返す
 * - サーバー側のログがでないことをみればわかる
 * - キャッシュは破棄しない限り永続化する
 *
 */

export async function TodoList() {
  return (
    <>
      <SubTittle>Todo List</SubTittle>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <span>一回目</span>
          <TodoInitialLoad id={1} />
        </li>
        <li>
          <span>二回目</span>
          <TodoInitialLoad id={1} />
        </li>
        <li>
          <span>no-cache</span>
          <TodoInitialLoadNoStore id={1} />
        </li>
      </ul>
      <div>
        <RevalidateButton />
      </div>
    </>
  );
}
