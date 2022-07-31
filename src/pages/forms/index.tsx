import { graphql } from "gatsby";
import React, { useState } from "react";

import AddAPhoto from "@material-ui/icons/AddAPhoto";
import Assignment from "@material-ui/icons/Assignment";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import {
  Alert,
  Modal,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import ContentWrapper from "../../components/shared/content-wrapper";
import { RegistrationForm } from "../../forms/registration-form";
import { PhotoConsentForm } from "../../forms/photo-consent-form";

const FormsPage = ({ data }) => {
  const seo = { title: "Forms" };
  const [currentForm, setCurrentForm] = useState("");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Layout>
      <SEO seo={seo} />

      <Modal open={currentForm} onClose={() => setCurrentForm("")}>
        {currentForm === "registration" ? (
          <RegistrationForm setCurrentForm={setCurrentForm} />
        ) : (
          <PhotoConsentForm setCurrentForm={setCurrentForm} />
        )}
      </Modal>
      <SEO seo={seo} />
      <ContentWrapper>
        <Typography variant="body1" style={{ margin: "20px 0" }}>
          The forms below can be printed out and brought to the next practice.
        </Typography>
        <Typography variant="h5">To Sign Up:</Typography>
        <Stepper
          orientation={matches ? "horizontal" : "vertical"}
          style={{ margin: "20px 0" }}
        >
          <Step key={1} active={true}>
            <StepLabel>OVB Registration</StepLabel>
            <Card style={{ padding: "10px" }}>
              <CardActions style={{ display: "flex", flexDirection: "column" }}>
                <Assignment
                  style={{ fontSize: "65px", marginBottom: "10px" }}
                />
                <Button
                  onClick={() => {
                    setCurrentForm("registration");
                  }}
                  variant="contained"
                  size="small"
                >
                  Open Form
                </Button>
              </CardActions>
            </Card>
          </Step>

          <Step last={false} key={2} active={true}>
            <StepLabel>Photo Consent</StepLabel>
            <Card style={{ padding: "10px" }}>
              <CardActions style={{ display: "flex", flexDirection: "column" }}>
                <AddAPhoto style={{ fontSize: "65px", marginBottom: "10px" }} />
                <Button
                  onClick={() => {
                    setCurrentForm("photo-consent");
                  }}
                  variant="contained"
                  size="small"
                >
                  Open Form
                </Button>
              </CardActions>
            </Card>
          </Step>

          <Step last={false} key={3} active={true}>
            <StepLabel>Sign up fee</StepLabel>
            <Card style={{ padding: "10px" }}>
              <CardActions style={{ display: "flex", flexDirection: "column" }}>
                <SportsBasketballIcon
                  style={{ fontSize: "65px", marginBottom: "10px" }}
                />
                <Button
                  variant="contained"
                  size="small"
                  target="#"
                  href="https://buy.stripe.com/4gweVNfhU59o316dQQ"
                >
                  Pay Sign Up Fee
                </Button>
              </CardActions>
            </Card>
          </Step>
        </Stepper>
      </ContentWrapper>
    </Layout>
  );
};

export const notePageQuery = graphql`
  query FormsPageQuery {
    strapiFormsPage {
      id
      page_title
      forms {
        form_description
        form_name
        file {
          localFile {
            publicURL
          }
        }
      }
    }
    stripePrice(product: { name: { eq: "Registration Fee" } }) {
      id
    }
  }
`;

export default FormsPage;
