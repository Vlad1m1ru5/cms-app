import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import remarkGfm from "remark-gfm";
import { useAppSelector } from "../../app/hooks";
import { selectMarkdown, sendId } from "./markdownSlice";

export interface MarkdownContentProps {
  markdownId: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({
  markdownId,
}) => {
  const remarkPlugins = React.useMemo(() => [remarkGfm], [remarkGfm]);
  const markdown = useAppSelector(selectMarkdown);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendId(markdownId));
  }, [markdownId]);

  const getMarkdownLabel = () =>
    markdown !== null ? (
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {markdown.label}
      </Typography>
    ) : null;

  const getMarkdownContent = () => (markdown !== null ? markdown.content : "");

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        {getMarkdownLabel()}
        <ReactMarkdown remarkPlugins={remarkPlugins}>
          {getMarkdownContent()}
        </ReactMarkdown>
      </Container>
    </Box>
  );
};
