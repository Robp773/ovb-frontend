import { Container, Paper, styled, withTheme } from "@material-ui/core";
import React from "react";

const PageContainer = styled(withTheme(Container))((props) => ({
  background: props.theme.palette.grey["100"],
}));

const ContentContainer = styled(withTheme(Paper))((props) => ({
  minHeight: "50vh",

  maxWidth: "85ch",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  padding: "30px",
  margin: "auto",
  "& >* p": {
    margin: "0",
  },
}));

const PageWrapper = ({ children }) => {
  return (
    <PageContainer >
      <ContentContainer elevation={1}>{children}</ContentContainer>
    </PageContainer>
  );
};

export default PageWrapper;
