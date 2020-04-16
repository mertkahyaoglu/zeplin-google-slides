import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ArrowBack from "@material-ui/icons/ArrowBack";
import { green } from "@material-ui/core/colors";
import { Alert, AlertTitle } from "@material-ui/lab";
import {
  Paper,
  Box,
  Link,
  Typography,
  Button,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";

import Main from "../layouts/Main";
import ProjectCombobox from "../components/ProjectCombobox";

import { createPresentationFromProject } from "../services/google";

const useStyles = makeStyles((theme) => ({
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
    color: "white",
  },
}));

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [selectedProject, setSelectedProject] = useState();
  const [creating, setCreating] = useState();
  const [error, setError] = useState();
  const [createdPresentation, setCreatedPresentation] = useState();

  const onBack = (e) => {
    e.preventDefault();

    history.replace("/connect");
  };

  const onCreate = async () => {
    setCreating(true);

    const response = await createPresentationFromProject(selectedProject);

    if (response.error) {
      setError(response.error);
      setCreating(false);
      return;
    }

    setCreatedPresentation({
      url: response,
      project: selectedProject,
    });
    setError(null);
    setCreating(false);
  };

  return (
    <Main>
      <Box marginBottom={4}>
        <Paper variant="outlined">
          <Box padding={4}>
            <Box marginBottom={2}>
              <Typography component="h1" variant="h6">
                Create a presentation from a Zeplin project
              </Typography>
            </Box>

            <ProjectCombobox onProjectSelect={setSelectedProject} />

            <Box marginTop={2}>
              <Button
                onClick={onCreate}
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                disableElevation
                disabled={!selectedProject || creating}
                startIcon={
                  creating && <CircularProgress color="inherit" size={24} />
                }
              >
                Create
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>

      {!creating && createdPresentation && (
        <Paper variant="outlined">
          <Box padding={4}>
            <Typography component="h3" variant="h6" gutterBottom>
              Your presentation is created successfully!
            </Typography>
            <Typography color="textSecondary">
              <strong>{createdPresentation.project.name}</strong> is created
              under your Google Slides account. Click below to check it out!
            </Typography>

            <Box marginTop={2}>
              <Button
                href={createdPresentation.url}
                fullWidth
                size="large"
                variant="contained"
                className={classes.buttonSuccess}
                target="_blank"
                disableElevation
                disableFocusRipple
              >
                See presentation
              </Button>
            </Box>
          </Box>
        </Paper>
      )}

      {error && (
        <Alert severity="error">
          <AlertTitle>Error occurred!</AlertTitle>
          {error.message}
        </Alert>
      )}

      <Box position="absolute" left={16} top={16}>
        <Link
          style={{ fontSize: 16, display: "flex", alignItems: "center" }}
          component="button"
          onClick={onBack}
        >
          <ArrowBack color="primary" />
          Change accounts
        </Link>
      </Box>
    </Main>
  );
}
