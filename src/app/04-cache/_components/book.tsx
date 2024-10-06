import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Book } from "../_functions/fetchBooks";

type Props = {
  book: Book;
};

export function BookComponent({ book }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          width="200"
          src={book.imageUrl}
          alt={book.title}
          className="rounded-md object-cover"
        />
      </CardContent>
      <CardFooter>
        <p>${book.price}</p>
      </CardFooter>
    </Card>
  );
}
