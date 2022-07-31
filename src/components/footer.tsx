import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { Link } from "gatsby";
import React from "react";

const CopyrightEl = styled(Container)(({ theme }) => ({
  paddingTop: "30px",
  textAlign: "center",
  color: `${theme.palette.grey.A700}`,
}));

const LinksContainer = styled(Container)(({ theme }) => ({
  display: "flex !important",
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

const ContactUsContainer = styled(Container)({
  display: "flex !important",
  flexDirection: "column",
  alignItems: "center",
});

const ContentContainer = styled(Container)(({ theme }) => ({
  display: "flex !important",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledFooter = styled(Container)(({ theme }) => ({
  background: `${theme.palette.secondary.main}`,
  width: "100%",
  paddingTop: "50px",
  paddingBottom: "30px",
  color: `${theme.palette.common.white}`,
  display: "flex !important",
  flexDirection: "column",
}));

const LinkTypeWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "0 !important",
  },
}));

const LinkTitle = styled(Typography)({
  textAlign: "center",
});

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: `${theme.palette.common.white}`,
  margin: "auto",
}));

const ContactText = styled(Typography)({
  fontWeight: "bold",
  color: "#f6dc3a",
});

const Footer = () => {
  return (
    <StyledFooter maxWidth={false}>
      <ContentContainer maxWidth={false}>
        <LinksContainer maxWidth={false}>
          <LinkTypeWrapper>
            <List
              component="nav"
              aria-label="main mailbox folders"
              subheader={
                <LinkTitle
                  style={{ fontWeight: "bold", color: "#f6dc3a" }}
                  color="primary"
                  variant="subtitle1"
                >
                  Info
                </LinkTitle>
              }
            >
              <ListItem>
                <StyledLink to="/info/about">
                  <LinkTitle variant="subtitle2">About</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/info/history">
                  <LinkTitle variant="subtitle2">History</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/info/coaches">
                  <LinkTitle variant="subtitle2">Coaches</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/info/calendar">
                  <LinkTitle variant="subtitle2">Calendar</LinkTitle>
                </StyledLink>
              </ListItem>
            </List>
          </LinkTypeWrapper>

          <LinkTypeWrapper>
            <List
              component="nav"
              aria-label="main mailbox folders"
              subheader={
                <LinkTitle
                  style={{ fontWeight: "bold", color: "#f6dc3a" }}
                  variant="subtitle1"
                >
                  Skills
                </LinkTitle>
              }
            >
              <ListItem>
                <StyledLink to="/process/teamwork">
                  <LinkTitle variant="subtitle2">Teamwork</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/process/technical">
                  <LinkTitle variant="subtitle2">Technical</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/process/leadership">
                  <LinkTitle variant="subtitle2">Leadership</LinkTitle>
                </StyledLink>
              </ListItem>
            </List>
          </LinkTypeWrapper>

          <LinkTypeWrapper>
            <List
              component="nav"
              aria-label="main mailbox folders"
              subheader={
                <LinkTitle
                  style={{ fontWeight: "bold", color: "#f6dc3a" }}
                  color="primary"
                  variant="subtitle1"
                >
                  General
                </LinkTitle>
              }
            >
              <ListItem>
                <StyledLink to="/articles">
                  <LinkTitle variant="subtitle2">Articles</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/drills">
                  <LinkTitle variant="subtitle2">Drills</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/forms">
                  <LinkTitle variant="subtitle2">Forms</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/gallery">
                  <LinkTitle variant="subtitle2">Gallery</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/scholarships">
                  <LinkTitle variant="subtitle2">Scholarships</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/store">
                  <LinkTitle variant="subtitle2">Store</LinkTitle>
                </StyledLink>
              </ListItem>
            </List>
          </LinkTypeWrapper>
        </LinksContainer>
        <ContactUsContainer>
          <Typography
            style={{ fontWeight: "bold", color: "#f6dc3a" }}
            variant="h5"
          >
            Contact Us
          </Typography>
          <Typography variant="body1">You can reach us at</Typography>
          <ContactText variant="subtitle1">bpeterman24@gmail.com</ContactText>
          <Typography variant="body1">Or call us at</Typography>
          <ContactText variant="subtitle1">908-581-1536</ContactText>
        </ContactUsContainer>
      </ContentContainer>
      <CopyrightEl>
        One Voice Basketball Association &copy; {new Date().getFullYear()}
      </CopyrightEl>
    </StyledFooter>
  );
};

export default Footer;
