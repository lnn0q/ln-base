/* gql imports */
import { QueryResolvers } from "@generated/graphql";

/* Query */
import { BooksManyResolver } from "./resolvers/booksManyResolver";
import { BookOneResolver } from "./resolvers/bookOneResolver";

export const Query: QueryResolvers = {
  booksMany: BooksManyResolver,
  bookOne: BookOneResolver,
};

export const Mutation = {};

export const Subscription = {};
