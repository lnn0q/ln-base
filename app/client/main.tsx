import "@client/assets/styles/index.css";
import "@client/assets/styles/nerd-fonts-icons.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "@client/components/ui/provider";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// TanStackRouter - Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Apollo
const HOST = import.meta.env.VITE_HOST || "localhost";
const PORT = import.meta.env.VITE_PORT || "3000";
const uri = `http://${HOST}:${PORT}/graphql`;
console.log(uri);

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ApolloProvider client={client}>
        <Provider>
          <RouterProvider router={router} />
        </Provider>
      </ApolloProvider>
    </StrictMode>,
  );
}
