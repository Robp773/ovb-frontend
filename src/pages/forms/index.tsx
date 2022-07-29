import { graphql } from "gatsby";
import React, { useState } from "react";

import AddAPhoto from "@material-ui/icons/AddAPhoto";
import Assignment from "@material-ui/icons/Assignment";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import {
  Alert,
  Container,
  Grid,
  Modal,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import Layout from "~/components/layout";
import SEO from "~/components/seo";
import { PaySignUpFeeBtn } from "../../components/products/pay-sign-up-fee-btn";
import ContentWrapper from "../../components/shared/content-wrapper";
import StaticPageNoImageHeading from "../../components/static-page/static-page-no-image-heading";
import { StaticImage } from "gatsby-plugin-image";
import { RegistrationForm } from "../../forms/registration-form";

const FormsPage = ({ data }) => {
  const seo = { title: "Forms" };
  const [currentForm, setCurrentForm] = useState(null);
  return (
    <Layout>
      <SEO seo={seo} />

      <Modal
        open={currentForm}
        onClose={() => setCurrentForm(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {currentForm === "registration" ? (
          <RegistrationForm setCurrentForm={setCurrentForm} />
        ) : null}
      </Modal>
      <SEO seo={seo} />
      <ContentWrapper>
        <Alert severity="warning">
          Form page is currently being worked on.
        </Alert>
        {/* <Typography variant="body1" style={{ margin: "20px 0" }}>
          The forms below can be printed out and brought to the next practice.
        </Typography>
        <Typography variant="h5">To Sign Up:</Typography>
        <Stepper orientation="horizontal" style={{ margin: "20px 0" }}>
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
                <Button variant="contained" size="small">
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
                <PaySignUpFeeBtn id={data.stripePrice.id} />
              </CardActions>
            </Card>
          </Step>
        </Stepper> */}
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
