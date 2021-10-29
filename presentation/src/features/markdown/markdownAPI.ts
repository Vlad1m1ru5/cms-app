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

export const getMarkdown = async (
  markdownId: string
): Promise<{ data: MarkdownDTO }> => {
  const response = await fetch(`${url}/${markdownId}`);
  const json = await response.json();
  return { data: json };
};

export const getMarkdownList = async (): Promise<{ data: MarkdownDTO[] }> => {
  const response = await fetch(url);
  const json = await response.json();
  return { data: json };
};
