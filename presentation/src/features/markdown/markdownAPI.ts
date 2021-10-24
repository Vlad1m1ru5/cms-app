import { MarkdownDTO } from "./markdownDTO";

const url = "http://localhost:9000/markdown";
const method = "POST";

export const postMarkdown = async (
  data: FormData
): Promise<{ data: MarkdownDTO }> => {
  const response = await fetch(url, { method, body: data });
  const json = await response.json();
  return { data: json };
};
