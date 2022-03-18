import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import SEO from "~/components/seo";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, Grid, Modal, Step, StepContent, StepLabel, TextField, Typography } from "@mui/material";
import ContentWrapper from "../../components/shared/content-wrapper";
import { styled } from "@mui/styles";
import { Stepper } from "@mui/material";
import Assignment from "@material-ui/icons/Assignment";
import AddAPhoto from "@material-ui/icons/AddAPhoto";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import ReactToPrint from 'react-to-print';

import { StaticImage } from "gatsby-plugin-image";
import { Box } from "@mui/system";

const dateTest = function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <DatePicker
      label="Basic example"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

const HeadingTitle = styled(Typography)(({ theme }) => ({
  margin: "auto !important",
}));

const TitleText = styled("span")(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.primary.main}`,
}))


const LineBox = styled(Box)(({ theme }) => ({
  marginBottom: "15px"
}))


const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
}));

const FormsPage = ({ data }) => {

  const seo = { title: "Forms" };
  const [currentForm, setCurrentForm] = useState(null);
  const [open, setOpen] = useState(false);

  // console.log(data)

  return (
    <Layout>

      <ContentWrapper width="85ch">

        <Typography style={{marginBottom: "10px"}} variant="body1">Forms can be printed out and brought to next practice.</Typography>

        <Grid container spacing={2}>
          {data.strapiFormsPage.forms.map((form) => {
            console.log(form)

            return (<Grid item xs={6}>
              <Item>
                <Typography variant="h5">{form.form_name}</Typography>
                {form.form_name === "Photo Consent" ? <AddAPhoto style={{ fontSize: "65px" }} /> : <Assignment style={{ fontSize: "65px" }} />}

                <Button href={form.file.localFile.publicURL} type="link" variant="contained">
                  Download
                </Button>
              </Item>
            </Grid>

            )
          })}



        </Grid>


      </ContentWrapper>


      {/* <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Paper style={{ overflowY: "auto", width: "75%", margin: "auto", maxHeight: "100vh", textAlign: "center" }} elevation={3}>
          <StaticImage src="../../images/ovb-cropped.png" alt="A dinosaur" />

          <Typography style={{ margin: "10px" }} color="primary" variant="h4">One Voice Basketball Association Inc.</Typography>
          <Typography variant="h5">A Non-Profit New Jersey Corporation</Typography>
          <Typography style={{ margin: "5px" }} variant="h5">Application for Youth Basketball</Typography>

          <Container style={{ textAlign: "left", marginTop: "40px" }} >

            <LineBox>
              <TextField
                label="Date of Registration"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
              />
            </LineBox>

            <LineBox>
              <TextField
                label="Applicant Name"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                style={{ marginLeft: "15px" }}
                label="Birth Date"
                InputLabelProps={{
                  shrink: true,
                }}
                type="date"
              />
            </LineBox>


            <LineBox>
              <TextField
                multiline

                label="Parent / Guardian Name(s)"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LineBox>

            <LineBox>
              <TextField
                fullWidth
                type="address"
                label="Address"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LineBox>

            <LineBox>
              <TextField
                type="tel"
                label="Phone Number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                style={{ marginLeft: "15px" }}
                type="tel"
                label="Cell #1"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                style={{ marginLeft: "15px" }}
                type="tel"
                label="Cell #2"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </LineBox>

          </Container>

        </Paper>

      </Modal>
      <SEO seo={seo} />
      <ContentWrapper>

        <HeadingTitle variant="h3">
          <TitleText>
            OVB Forms
          </TitleText>
        </HeadingTitle>

        <Typography variant="body1" style={{ margin: "20px 0" }} >
          The forms below can be printed out and brought to the next practice. Any payments can be made through check.
        </Typography>
        <Typography variant="h5"  >
          To Sign Up:
        </Typography>
        <Stepper orientation="horizontal" style={{ margin: "20px 0" }}>

          <Step key={1} active={true}>
            <StepLabel>OVB Registration</StepLabel>
            <StepContent >
              <Card style={{ padding: "10px" }}>
                <CardActions style={{ display: "flex", flexDirection: "column" }}>
                  <Assignment style={{ fontSize: "65px", marginBottom: "20px" }} />
                  <Button onClick={() => { setOpen(true); setCurrentForm("registration") }} variant="contained" size="small">Open Form</Button>
                </CardActions>
              </Card>
            </StepContent>
          </Step>

          <Step last={false} key={2} active={true}>
            <StepLabel>Photo Consent</StepLabel>
            <StepContent>
              <Card style={{ padding: "10px" }}>
                <CardActions style={{ display: "flex", flexDirection: "column" }}>
                  <AddAPhoto style={{ fontSize: "65px", marginBottom: "20px" }} />
                  <Button variant="contained" size="small">Open Form</Button>
                </CardActions>
              </Card>
            </StepContent>
          </Step>

          <Step last={true} key={2} active={true}>
            <StepLabel>Payment can be brought to next practice</StepLabel>
            <StepContent>
              <Card style={{ padding: "10px" }}>
                <CardActions style={{ display: "flex", flexDirection: "column" }}>
                  <SportsBasketballIcon style={{ fontSize: "65px" }} />
                </CardActions>
              </Card>
            </StepContent>
          </Step>

        </Stepper>
      
      </ContentWrapper> */}
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
  }
`;

export default FormsPage;
