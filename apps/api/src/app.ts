import { catchAll } from "@middlewares/catch-all";

import raiz from "@routes/raiz";

import express from "express";

const app = express();

app.use("/", raiz);

app.use(catchAll);

export default app;
