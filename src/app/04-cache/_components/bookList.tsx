import { SubTittle } from "@/components/SubTitle";
import { fetchBooks } from "../_functions/fetchBooks";
import { BookComponent } from "./book";

export async function BookList() {
  const books = await fetchBooks();

  return (
    <>
      <SubTittle>Books</SubTittle>
      <ul className="flex flex-column gap-4 mt-4">
        {books.map((book) => (
          <li key={book.id}>
            <BookComponent book={book} />
          </li>
        ))}
      </ul>
    </>
  );
}
