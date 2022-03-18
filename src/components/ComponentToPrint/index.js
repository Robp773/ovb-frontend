import { Container, TextField, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
const LineBox = styled(Box)(({ theme }) => ({
  marginBottom: "15px"
}))


export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  handleCheckboxOnChange = () =>
    this.setState({ checked: !this.state.checked });

  setRef = (ref) => (this.canvasEl = ref);

  render() {
    const { text } = this.props;

    return (
      <Paper style={{ overflowY: "auto", width: "75%", margin: "auto", maxHeight: "100vh", textAlign: "center" }} elevation={3}>
        {/* <StaticImage src="../../images/ovb-cropped.png" alt="A dinosaur" /> */}

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
    );
  }
}

const Test = React.forwardRef((props, ref) => {
  return (

    <Paper ref={ref} style={{ overflowY: "auto", width: "75%", margin: "auto", maxHeight: "100vh", textAlign: "center" }} elevation={3}>
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
  )
})


export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} text={props.text} />;
});
