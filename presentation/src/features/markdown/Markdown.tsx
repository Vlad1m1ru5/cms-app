import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from "@mui/material";
import React, { ChangeEventHandler } from "react";
import ReactMarkdown from "react-markdown";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectMarkdown, sendData } from "./markdownSlice";

export const Markdown: React.FC = () => {
  const data = useAppSelector(selectMarkdown);
  const dispatch = useAppDispatch();

  const handleOnChange: ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(sendData(new FormData(event.currentTarget)));
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Markdown
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Search and discover markdown documentation in one place. Use built in
          editor to validate markdown content before sharing.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Box component="form" onChange={handleOnChange} noValidate>
            <label>
              <input type="file" name="markdown" hidden />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          </Box>
        </Stack>
      </Container>
      <Container maxWidth="md">
        {data !== null && <ReactMarkdown>{data.content}</ReactMarkdown>}
      </Container>
    </>
  );
};
