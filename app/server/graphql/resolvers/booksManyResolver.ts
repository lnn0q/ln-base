import { Book } from "@generated/graphql";

export const books = [
  {
    id: "1",
    title: "some-title-1",
    author: "someone",
  },
  {
    id: "2",
    title: "some-title-1",
    author: "someone",
  },
];

export async function BooksManyResolver(_: any): Promise<Book[]> {
  console.log("Called 'BooksManyResolver' resolver...");

  return books;
}
