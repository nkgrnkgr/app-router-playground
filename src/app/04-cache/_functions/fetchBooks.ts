export type Book = {
  id: string;
  title: string;
  imageUrl: string;
  author: string;
  price: number;
};

const createSeed = () => Math.floor(Math.random() * 9) + 1;

// https://nextjs.org/docs/app/building-your-application/caching
// Request Memoization
// Next.jsが拡張している fetchAPI は、リクエストをキャッシュする

//

const createBooks = (): Book[] => {
  const seed = createSeed();
  return [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
      price: 12.49 * seed,
    },
    {
      id: "2",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Catcher-in-the-rye-red-cover.jpg/400px-Catcher-in-the-rye-red-cover.jpg",
      price: 10.99 * seed,
    },
    {
      id: "3",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg/500px-To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg",
      price: 9.99 * seed,
    },
  ];
};

export const fetchBooks = () => {
  return new Promise<Book[]>((resolve) => {
    setTimeout(() => {
      resolve(createBooks());
    }, 2000);
  });
};
