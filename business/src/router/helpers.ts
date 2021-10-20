import { Router } from "express";

export const aggregateRouter = (routers: { [x: string]: Router }): Router =>
  Object.keys(routers).reduce((r, key) => r.use(routers[key]), Router());
