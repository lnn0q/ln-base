import { createLazyFileRoute } from "@tanstack/react-router";
import { gql, useQuery } from "@apollo/client";

export const Route = createLazyFileRoute("/book")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>"/book"</div>;
}

const getBookQuery = gql`
  query BookOne {
    booksMany {
      id
      author
      title
    }
  }
`;
