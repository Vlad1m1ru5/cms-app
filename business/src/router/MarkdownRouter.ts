import { Router } from "express";
import { upload } from "../lib";
import { MarkdownService } from "../service";

export const MarkdownRouter = (markdownService: MarkdownService): Router => {
  const _markdownRouter = Router();

  _markdownRouter.get("/markdown", async (_, res) => {
    const markdowns = await markdownService.findAll();
    res.send(markdowns);
  });

  _markdownRouter.post(
    "/markdown",
    upload.single("markdown"),
    async (req, res) => {
      const { file, headers } = req;

      if (!headers["content-type"].startsWith("multipart/form-data;")) {
        return res.status(415).end();
      }

      if (file === undefined) {
        return res.status(400).end();
      }

      const { originalname: label, buffer } = file;
      const content = buffer.toString();

      const markdown = await markdownService.saveMarkdown(
        markdownService.createMarkdown({ label, content })
      );

      res.send(markdown);
    }
  );

  _markdownRouter.get("/markdown/:id", async (req, res) => {
    const { id } = req.params;
    const markdown = await markdownService.findOne(id);
    res.send(markdown);
  });

  _markdownRouter.put("/markdown/:id/content", async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    if (content === undefined) {
      res.status(400).end();
    }

    try {
      const upsertedId = await markdownService.updateMarkdown({ id, content });
      res.send(upsertedId);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  return _markdownRouter;
};
