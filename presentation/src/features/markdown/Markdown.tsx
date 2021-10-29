import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { ChangeEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectMarkdown, selectStatus, sendData, clear } from "./markdownSlice";

const theme = createTheme();

export const Markdown: React.FC = () => {
  const markdown = useAppSelector(selectMarkdown);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    markdown !== null && dispatch(clear());
  }, []);

  const handleOnChange: ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(sendData(new FormData(event.currentTarget)));
  };

  const getIsLoadingStatus = () => status === "loading";

  const getMarkdownStatusAlert = () =>
    status === "loading" ? (
      <CircularProgress />
    ) : status === "failed" ? (
      <Alert severity="error">Failed upload</Alert>
    ) : markdown !== null ? (
      <Alert
        action={
          <Button
            component="a"
            href={`/markdown/${markdown.id}/content`}
            color="inherit"
          >
            See
          </Button>
        }
      >
        Uploaded {markdown.label}
      </Alert>
    ) : null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
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
            Search and discover markdown documentation in one place. Use built
            in editor to validate markdown content before sharing.
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
                <Button
                  variant="contained"
                  component="span"
                  disabled={getIsLoadingStatus()}
                >
                  Upload
                </Button>
              </label>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {getMarkdownStatusAlert()}
      </Container>
    </ThemeProvider>
  );
};
