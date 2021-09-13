import { Container, Paper, styled, withTheme } from "@material-ui/core";
import React from "react";

const ContentBackground = styled(withTheme(Container))((props) => ({
  background: props.theme.palette.grey["100"],
  maxWidth: "100%"
}));

const ContentContainer = styled(withTheme(Paper))((props) => ({
  minHeight: "50vh",
  maxWidth: "85ch",
  display: "flex",
  flexDirection: "column",
  background: "white",
  padding: "20px",
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

const ArticleWrapper = ({ children }) => {
  return (
    <ContentBackground>
      <ContentContainer square={true}> {children}</ContentContainer>
    </ContentBackground>
  );
};

export default ArticleWrapper;
