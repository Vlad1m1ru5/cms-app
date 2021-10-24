import cors from "cors";
import express from "express";

export const server = ({
  port,
  corsOptions,
  router,
}: {
  port: number;
  corsOptions: cors.CorsOptions | undefined;
  router: express.Router;
}) =>
  express().use(cors(corsOptions)).use(express.json()).use(router).listen(port);
