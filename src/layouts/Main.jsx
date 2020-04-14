import React from "react";

import { Container } from "@material-ui/core";

import Header from "../components/Header";

function Main({ children }) {
  return (
    <Container maxWidth="sm">
      <Header />

      {children}
    </Container>
  );
}

export default Main;
