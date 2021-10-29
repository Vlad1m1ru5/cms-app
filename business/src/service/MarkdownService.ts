import { MongoRepository } from "typeorm";
import { MarkdownDTO } from "../dto";
import { Markdown } from "../entity";

export class MarkdownService {
  constructor(private readonly markdownRepository: MongoRepository<Markdown>) {}

  async findOne(markdownId: string): Promise<Markdown> {
    return await this.markdownRepository.findOne(markdownId);
  }

  async findAll(): Promise<Markdown[]> {
    return await this.markdownRepository.find();
  }

  createMarkdown(markdownDTO: MarkdownDTO): Markdown {
    return this.markdownRepository.create(markdownDTO);
  }

  async saveMarkdown(markdown: Markdown): Promise<Markdown> {
    return await this.markdownRepository.save(markdown);
  }

  async updateMarkdown({ id, content }: { id: string; content: string }) {
    const { result, upsertedId } = await this.markdownRepository.updateOne(
      { id },
      { content }
    );

    if (result.ok !== 1) {
      throw new Error("Could not update document");
    }

    return upsertedId._id;
  }
}
