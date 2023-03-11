import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";

export const RegistrationForm = ({
  setCurrentForm,
}: {
  setCurrentForm: Function;
}) => {
  const componentRef = React.useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <Paper
        variant="outlined"
        style={{
          width: "75%",
          margin: "auto",
          overflowY: "auto",
          maxHeight: "90vh",
        }}
      >
        <div style={{ padding: "10px" }} ref={componentRef}>
          <div style={{ textAlign: "center" }}>
            <StaticImage src="../images/ovb-logo.png" alt="A dinosaur" />
            <Typography style={{ margin: "10px" }} color="primary" variant="h4">
              One Voice Basketball Association Inc.
            </Typography>
            <Typography variant="h5">
              A Non-Profit New Jersey Corporation
            </Typography>
            <Typography style={{ margin: "5px" }} variant="h5">
              Application for Youth Basketball
            </Typography>
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "grid",
              rowGap: "10px",
              columnGap: "10px",
              gridTemplateColumns: "auto auto auto",
            }}
          >
            <TextField
              style={{ gridColumnStart: 1, gridColumnEnd: 2 }}
              label="Date of Registration"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
            />
            <TextField
              style={{ gridRowStart: 2, gridColumnStart: 1, gridColumnEnd: 3 }}
              label="Applicant Name"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 2, gridColumnStart: 3, gridColumnEnd: 4 }}
              label="Birth Date"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
            />
            <TextField
              style={{ gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3 }}
              label="Parent / Guardian Name(s)"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 4 }}
              fullWidth
              type="address"
              label="Full Address"
              multiline
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 5, gridColumnStart: 1, gridColumnEnd: 2 }}
              type="tel"
              label="Phone Number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 5, gridColumnStart: 2, gridColumnEnd: 3 }}
              type="tel"
              label="Cell #1"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 5, gridColumnStart: 3, gridColumnEnd: 4 }}
              type="tel"
              label="Cell #2"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 6, gridColumnStart: 1, gridColumnEnd: 2 }}
              type="tel"
              label="Alt Phone #1"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 6, gridColumnStart: 2, gridColumnEnd: 3 }}
              type="tel"
              label="Alt Phone #2"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 7, gridColumnStart: 1, gridColumnEnd: 3 }}
              label="School"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 7, gridColumnStart: 3, gridColumnEnd: 4 }}
              label="Grade"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 8, gridColumnStart: 1, gridColumnEnd: 3 }}
              label="Emergency Contact Name"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 8, gridColumnStart: 3, gridColumnEnd: 4 }}
              label="Relationship to Applicant"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 9, gridColumnStart: 1, gridColumnEnd: 2 }}
              type="tel"
              label="Emergency Contact Phone Number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 9, gridColumnStart: 2, gridColumnEnd: 3 }}
              type="tel"
              label="Emergency Contact Alt Phone #1"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{
                gridRowStart: 9,
                gridColumnStart: 3,
                gridColumnEnd: 4,
              }}
              type="tel"
              label="Emergency Contact Alt Phone #2"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 10, gridColumnStart: 1, gridColumnEnd: 4 }}
              label="Name and Phone Number of Family Physician"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ gridRowStart: 11, gridColumnStart: 1, gridColumnEnd: 4 }}
              label="Email Address(es)"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div style={{ margin: "10px auto", pageBreakBefore: "always" }}>
            <Typography variant="h5" color="primary">
              RELEASE OF LIABILITY FOR A MINOR
            </Typography>
            <Typography variant="body1">
              I, the parent or guardian of the above named player, a minor,
              agree that I will abide by the rules and regulations of the
              basketball program in which we participate. In consideration of
              the applicant’s participation in the sport and its programs, I,
              intending to be legally bound, do hereby release and indemnify the
              One Voice Basketball Association Inc. (OVBA) its members, coaches,
              representatives, directors and officers from any and all claims,
              liabilities, causes of action and dangers arising out of, or in
              connection with the Applicant’s participation in the programs of
              the OVBA, Inc.
            </Typography>

            <Typography variant="body1">
              Is the Participant taking any medication that would limit safe
              participation in the activities and/or does the Participant have
              any physical or mental condition, physical disability, or any
              other condition that would limit safe participation in the
              activities?
            </Typography>

            <RadioGroup>
              <FormControlLabel control={<Radio />} value="No" label="No" />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </div>
          <div style={{ margin: "10px auto" }}>
            <Typography variant="body1">
              Does the Participant have any medical information which he or she
              believes One Voice Basketball should have and know about in the
              event of medical emergency (including any allergies, reactions to
              medication)?
            </Typography>

            <RadioGroup>
              <FormControlLabel control={<Radio />} value="No" label="No" />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            </RadioGroup>

            <TextField
              style={{ marginTop: "10px" }}
              fullWidth
              label="If YES, identify and explain as fully as you deem advisable."
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div style={{ margin: "10px auto" }}>
            <Typography variant="h5" color="primary">
              AUTHORIZATION FOR EMERGENCY MEDICAL TREATMENT
            </Typography>
            <Typography variant="body1">
              The signature below shall be evidence of the parent / guardian of
              the Applicant named above for emergency medical treatment of any
              injury or condition during participation in the One Voice
              Basketball Association Inc. activities. In the event that
              reasonable attempts to contact me or the emergency contact above
              are unsuccessful, this shall further serve as authorization for
              the provision of medical services to the Applicant that are deemed
              medically necessary for the transport, stabilization and treatment
              of any such injury or condition.
            </Typography>
          </div>
          <Box>
            <TextField
              disabled
              fullWidth
              sx={{ width: "50%", mb: 2 }}
              label="Signature - Parent / Guardian of Applicant"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>

          <Box>
            <TextField
              disabled
              fullWidth
              style={{ width: "50%" }}
              label="Signature - Witness"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </div>
      </Paper>
      <Button
        onClick={() => setCurrentForm(null)}
        variant="contained"
        size="large"
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        Close
      </Button>
      <div style={{ textAlign: "center" }}>
        <Button
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          variant="contained"
          size="large"
        >
          Print
        </Button>
      </div>
    </div>
  );
};
