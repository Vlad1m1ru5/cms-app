import express from "express";

export const server = ({
  port,
  router,
}: {
  port: number;
  router: express.Router;
}) => express().use(express.json()).use(router).listen(port);
