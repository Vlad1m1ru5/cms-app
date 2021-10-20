import { MongoRepository } from "typeorm";
import { Markdown } from "../entity";

export class MarkdownService {
  constructor(private readonly markdownRepository: MongoRepository<Markdown>) {}

  async findAll(): Promise<Markdown[]> {
    return this.markdownRepository.find();
  }

  createMarkdown(content: string): Markdown {
    return this.markdownRepository.create({ content });
  }

  async saveMarkdown(markdown: Markdown): Promise<Markdown> {
    return await this.markdownRepository.save(markdown);
  }
}
