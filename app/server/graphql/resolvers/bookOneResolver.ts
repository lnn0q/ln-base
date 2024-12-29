import { BookInput, Book } from "@generated/graphql";
import { books } from "./booksManyResolver";

export async function BookOneResolver(
  _: any,
  { ...input }: BookInput,
): Promise<Book> {
  console.log("Called 'BookOneResolver' resolver...");

  const book = books.filter((item) => item.id === input.id)[0];

  return book;
}
