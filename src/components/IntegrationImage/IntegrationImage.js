import React from "react";

import { Box } from "@material-ui/core";

import LovePath from "./LovePath";

function IntegrationImage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <img
        width="48"
        src="zeplin.png"
        alt="Zeplin"
      />
      <LovePath />
      <img
        height="48"
        src="google-slides.png"
        alt="Google Slides"
      />
    </Box>
  );
}

export default IntegrationImage;
