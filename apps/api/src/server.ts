import { json, urlencoded } from "body-parser";
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer: () => Express = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan(process.env.NODE_ENV === "production" ? "" : "dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/health-check", (req, res) => {
      return res.json({ ok: true });
    });

  return app;
};