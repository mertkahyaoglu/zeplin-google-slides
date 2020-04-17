import React from "react";
import { useHistory } from "react-router-dom";

import { Typography, Box, Button } from "@material-ui/core";

import Main from "../layouts/Main";
import HomeCard from "../components/HomeCard";
import Footer from "../components/Footer";

export default function Home() {
  const history = useHistory();

  const onClick = () => {
    history.push("/connect");
  };

  return (
    <Main maxWidth="md">
      <Box marginBottom={8}>
        <Typography
          component="h2"
          variant="h5"
          color="textSecondary"
          align="center"
          gutterBottom
        >
          <strong>Zeplin Slides</strong> allows you to create Google Slide
          presentations from screens of your Zeplin projects in 3 simple steps.
        </Typography>

        <HomeCard
          title="Connect your accounts"
          image={<img width="450" src="/connect.png" />}
        />

        <HomeCard
          title="Select a Zeplin project"
          image={<img width="450" src="/select.png" />}
          reverse
        />

        <HomeCard
          title="Go to Google Slides"
          image={<img width="450" src="/created.png" />}
        />

        <HomeCard
          title="Your presentation is ready 🎉"
          image={<img width="250" src="/google-slide.png" />}
          reverse
          disableImageBorder
        />

        <Box marginTop={4}>
          <Button
            onClick={onClick}
            size="large"
            variant="contained"
            color="primary"
            fullWidth
            disableElevation
          >
            Start Now
          </Button>
        </Box>
      </Box>
      <Footer />
    </Main>
  );
}
