import { Text, Stack } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

import { gql, useQuery } from "@apollo/client";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data } = useQuery(getBooksQuery);

  return (
    <Stack>
      <Text>Hello world!</Text>
      <Text>This is my template!</Text>
      <Stack>
        {data && (
          <>
            {data.booksMany.map((book: any) => (
              <Stack key={book.id}>
                <Text>{book.title}</Text>
                <Text>{book.author}</Text>
              </Stack>
            ))}
          </>
        )}
      </Stack>
    </Stack>
  );
}

const getBooksQuery = gql`
  query BooksMany {
    booksMany {
      id
      author
      title
    }
  }
`;
