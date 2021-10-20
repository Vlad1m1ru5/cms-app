import { Router } from "express";

export const HealthRouter = (): Router => {
  const _healthRouter = Router();

  _healthRouter.get("/health/liveness", (_, res) => res.send("ok"));

  return _healthRouter;
};
