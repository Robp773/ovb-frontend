import { Container, Paper, styled, withTheme } from "@mui/material";
import React from "react";

const PageContainer = styled(withTheme(Container))((props) => ({
  background: props.theme.palette.grey["100"],
}));

const ContentContainer = styled(withTheme(Paper))((props) => ({
  minHeight: "50vh",
  maxWidth: "85ch",
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  margin: "auto",
  position: "relative",

  "& >* p": {
    margin: "0",
    width: "100%",
    padding: 0,
  },

  "& >* img": {
    margin: "0",
    width: "100%",
  },
}));

const StaticPageWrapper = ({ children }) => {
  return (
    <PageContainer>
      <ContentContainer elevation={1}>{children}</ContentContainer>
    </PageContainer>
  );
};

export default StaticPageWrapper;
