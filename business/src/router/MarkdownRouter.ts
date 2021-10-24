import { Router } from "express";
import { upload } from "../lib";
import { MarkdownService } from "../service";

export const MarkdownRouter = (markdownService: MarkdownService): Router => {
  const _markdownRouter = Router();

  _markdownRouter.get("/markdown", async (_, res): Promise<void> => {
    const markdowns = await markdownService.findAll();
    res.send(markdowns);
  });

  _markdownRouter.post(
    "/markdown",
    upload.single("markdown"),
    async (req, res): Promise<void> => {
      const { file, headers } = req;

      if (!headers["content-type"].startsWith("multipart/form-data;")) {
        return res.status(415).end();
      }

      if (file === undefined) {
        return res.status(400).end();
      }

      const markdown = await markdownService.saveMarkdown(
        markdownService.createMarkdown(file.buffer.toString())
      );

      res.send(markdown);
    }
  );

  return _markdownRouter;
};
