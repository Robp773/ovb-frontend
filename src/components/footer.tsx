import { Container, styled, Typography, withTheme } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import React from "react";
import { Link } from "gatsby";

const CopyrightEl = styled(withTheme(Container))((props) => ({
  paddingTop: "30px",
  textAlign: "center",
  color: props.theme.palette.grey.A700,
}));

const LinksContainer = styled(Container)({
  display: "flex",
});

const ContactUsContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const ContentContainer = styled(Container)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledFooter = styled(withTheme(Container))((props) => ({
  background: props.theme.palette.secondary.main,
  width: "100%",
  paddingTop: "50px",
  paddingBottom: "30px",
  color: props.theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
}));

const LinkTypeWrapper = styled(Container)({
  display: "flex",
  justifyContent: "center",
});

const LinkTitle = styled(Typography)({
  textAlign: "center",
});

const StyledLink = styled(withTheme(Link))((props) => ({
  textDecoration: "none",
  color: props.theme.palette.text.secondary,
  margin: "auto",
}));

const Footer = () => {
  return (
    <StyledFooter maxWidth={false}>
      <ContentContainer maxWidth={false}>
        <LinksContainer>
          <LinkTypeWrapper>
            <List
              component="nav"
              aria-label="main mailbox folders"
              subheader={
                <LinkTitle
                style={{ fontWeight: "bold", color: "#f6dc3a"}}
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
                  style={{ fontWeight: "bold", color: "#f6dc3a"}}
                  variant="subtitle1"
                >
                  Skills
                </LinkTitle>
              }
            >
              <ListItem>
                <StyledLink to="/skills/teamwork">
                  <LinkTitle variant="subtitle2">Teamwork</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/skills/technical">
                  <LinkTitle variant="subtitle2">Technical</LinkTitle>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/skills/leadership">
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
                style={{ fontWeight: "bold", color: "#f6dc3a"}}
                color="primary"
                  variant="subtitle1"
                >
                  General
                </LinkTitle>
              }
            >
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
          <Typography                   style={{ fontWeight: "bold", color: "#f6dc3a"}}
 variant="h5">Contact Us</Typography>
          <Typography variant="body1">You can reach us at</Typography>
          <Typography                   style={{ fontWeight: "bold", color: "#f6dc3a"}}
 variant="subtitle1">bpeterman@customalloy.us</Typography>
          <Typography variant="body1">Or call us at</Typography>
          <Typography                   style={{ fontWeight: "bold", color: "#f6dc3a"}}
variant="subtitle1">908-581-1536</Typography>
        </ContactUsContainer>
      </ContentContainer>
      <CopyrightEl>
        One Voice Basketball Association &copy; {new Date().getFullYear()}
      </CopyrightEl>
    </StyledFooter>
  );
};

export default Footer;
