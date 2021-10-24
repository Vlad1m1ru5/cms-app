import "reflect-metadata";
import { createConnection } from "typeorm";
import { Markdown } from "./entity";
import { aggregateRouter, HealthRouter, MarkdownRouter } from "./router";
import { server } from "./server";
import { MarkdownService } from "./service";

const port = 9000;
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

createConnection()
  .then(async (connection) => {
    const healthRouter = HealthRouter();

    const markdownRepository = connection.manager.getMongoRepository(Markdown);
    const markdownService = new MarkdownService(markdownRepository);
    const markdownRouter = MarkdownRouter(markdownService);
    const router = aggregateRouter({ healthRouter, markdownRouter });

    server({ port, corsOptions, router });
  })
  .catch((error) => console.log(error));
