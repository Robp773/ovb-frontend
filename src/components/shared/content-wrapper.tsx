import { Container, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
const ContentBackground = styled(Container)({
  maxWidth: "100%"
});

const ContentContainer = styled(Paper)((props) => ({
  minHeight: "50vh",
  maxWidth: `${props.width}`,
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
}))

const ContentWrapper = ({ width = "100ch", children }) => {
  return (
    <ContentBackground>
      <ContentContainer width={width} square={true}> {children}</ContentContainer>
    </ContentBackground>
  );
};

export default ContentWrapper;
