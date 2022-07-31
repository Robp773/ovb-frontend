import {
  Paper,
  Typography,
  Container,
  TextField,
  Box,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { styled } from "@mui/styles";
import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";

export const PhotoConsentForm = ({ setCurrentForm }) => {
  const componentRef = React.useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <Paper
        variant="outlined"
        sx={{
          width: "75%",
          margin: "auto",
          overflowY: "auto",
          maxHeight: "90vh",
        }}
      >
        <Box sx={{ p: 3 }} ref={componentRef}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <StaticImage src="../images/ovb-logo.png" alt="A dinosaur" />
            <Typography sx={{ mt: 1, mb: 1 }} variant="h3">
              Photo Consent
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography variant="subtitle1">I</Typography>
            <TextField
              size="small"
              sx={{ mr: 1, ml: 1 }}
              label="Parent/Guardian Name"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Typography variant="subtitle1">parent / guardian of</Typography>
            <TextField
              sx={{ mr: 1, ml: 1 }}
              size="small"
              label="Child Name"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            grant OVBA my permission to use photographs taken at OVBA practices,
            games or events for any legal use, including but not limited to
            publicity, copyright purposes, illustration, advertising and web
            content.
          </Typography>
          <Typography variant="subtitle1">
            Furthermore I understand that no royalty, fee or other compensation
            shall become payable to me by reason of such use.
          </Typography>

          <Box sx={{ mt: 1 }}>
            <TextField
              sx={{ mr: 1, mt: 2 }}
              label="Parent Guardian Name (print)"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              disabled
              sx={{ mr: 1, mt: 2 }}
              label="Parent / Guardian Signature"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              sx={{ mt: 2 }}
              label="Date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box>
            <TextField
              sx={{ mr: 1, mt: 2 }}
              label="Player's Name"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              sx={{ mt: 2 }}
              label="Phone Number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </Box>
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
