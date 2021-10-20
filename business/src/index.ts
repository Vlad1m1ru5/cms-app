import "reflect-metadata";
import { createConnection } from "typeorm";
import { Markdown } from "./entity";
import { aggregateRouter, HealthRouter, MarkdownRouter } from "./router";
import { server } from "./server";
import { MarkdownService } from "./service";

const port = 9000;

createConnection()
  .then(async (connection) => {
    const healthRouter = HealthRouter();

    const markdownRepository = connection.manager.getMongoRepository(Markdown);
    const markdownService = new MarkdownService(markdownRepository);
    const markdownRouter = MarkdownRouter(markdownService);
    const router = aggregateRouter({ healthRouter, markdownRouter });

    server({ port, router });
  })
  .catch((error) => console.log(error));
