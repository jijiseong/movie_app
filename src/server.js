require("dotenv").config();
import express from "express";
import path from "path";
import { localsMiddleware } from "./middlewares";
import morgan from "morgan";
import {
  githubLoginFinish,
  githubLoginStart,
} from "./controllers/userController";

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(localsMiddleware);

app.get("/login/github", githubLoginStart);
app.get("/login/github/callback", githubLoginFinish);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

export default app;
