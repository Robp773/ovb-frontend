import { Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
const ContentBackground = styled(Container)(({ theme, width }) => ({
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "0",
  },
}));

const ContentContainer = styled(Paper)(({ theme, width }) => ({
  minHeight: "50vh",
  maxWidth: `${width}`,
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

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const ContentWrapper = ({ width = "100ch", children }) => {
  return (
    <ContentBackground>
      <ContentContainer width={width} square={true}>
        {children}
      </ContentContainer>
    </ContentBackground>
  );
};

export default ContentWrapper;
