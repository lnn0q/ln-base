import "dotenv/config";
import express from "express";
import cors from "cors";
import ViteExpress from "vite-express";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import fs from "fs";
import path from "path";

import { Query, Mutation, Subscription } from "./graphql/graphql";

const __dirname = import.meta.dirname;
const HOST = process.env.HOST || "localhost";
const PORT = parseInt(process.env.PORT || "3000");
const MOTD = `\n\n\n\x1b[35m-server is listening-\x1b[0m\n\nhttp://${HOST}:${PORT}\nhttp://localhost:${PORT}\n\n\n`;

const app = express();
const server = http.createServer(app);

const typeDefs = fs.readFileSync(
  path.join(__dirname, "graphql", "schema.graphql"),
  "utf8",
);

const resolvers = {
  Query,
  // Mutation,
  // Subscription,
};

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer: server })],
});

await apollo.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(apollo),
);

await new Promise<void>((resolve) =>
  server.listen({ hostname: HOST, port: PORT }, resolve),
);

console.log(MOTD);

ViteExpress.bind(app, server);
