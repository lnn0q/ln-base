import express, { Response } from "express";
import ViteExpress from "vite-express";

const PORT = parseInt(process.env.PORT || "3000");

const app = express();

app.get("/test", (_, res: Response) => {
  res.send("Testing route");
});

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 3000..."),
);
