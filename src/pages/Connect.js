import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Slideshow";

import { useAuth } from "../providers/AuthProvider";

import Main from "../layouts/Main";

import ZeplinConnectCard from "../components/ZeplinConnectCard";
import GoogleConnectCard from "../components/GoogleConnectCard";

function Connect() {
  const history = useHistory();
  const { isAllConnected } = useAuth();

  const onCreate = () => {
    history.push("/create");
  };

  return (
    <Main>
      <ZeplinConnectCard />
      <GoogleConnectCard />

      {isAllConnected && (
        <Button
          onClick={onCreate}
          size="large"
          variant="contained"
          color="primary"
          endIcon={<CreateIcon />}
          fullWidth
          disableElevation
        >
          Create a presentation
        </Button>
      )}
    </Main>
  );
}

export default Connect;
