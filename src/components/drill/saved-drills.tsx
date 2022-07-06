import { Drawer } from "@material-ui/core";
import LabelIcon from "@mui/icons-material/Label";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import slugify from "@sindresorhus/slugify";
import * as React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Inventory } from "@mui/icons-material";
import { Alert } from "@mui/material";
import DrillDetails from "./drill-details";

export default function SavedDrillsDrawer({
  changeSelectedDrills,
  drills,
  fullWidth,
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const drillList = Object.entries(drills);

  return (
    <>
      <Button
        startIcon={<InventoryIcon />}
        onClick={() => {
          setIsOpen(true);
        }}
        variant="contained"
        style={{ position: "fixed", right: 0 }}
      >
        Saved Drills {drillList.length > 0 && `(${drillList.length})`}
      </Button>
      <Drawer
        onClick={() => {
          setIsOpen(false);
        }}
        anchor="right"
        open={isOpen}
        style={{ zIndex: 999 }}
      >
        <Box
          sx={{
            padding: "10px",
            maxWidth: `${fullWidth ? "auto" : "400px"}`,
          }}
        >
          <Typography variant="h5">
            Saved Drills ({drillList.length})
          </Typography>{" "}
          <Alert style={{ padding: 0 }} severity="info">
            Drills can be saved and printed out for later use.
          </Alert>
          <Button
            disabled={!drillList.length}
            style={{ margin: "5px 0" }}
            variant="contained"
          >
            Print
          </Button>
          <Stepper
            style={{ marginTop: "10px" }}
            color="secondary"
            orientation="vertical"
          >
            {drillList.map((drill, index) => (
              <Step active key={index}>
                <StepLabel>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6">{drill[1].name}</Typography>
                  </Box>
                </StepLabel>

                <StepContent>
                  <DrillDetails node={drill[1]} />
                  <Typography>{drill[1].description}</Typography>
                  <Button
                    style={{ margin: "5px 3px 0 0" }}
                    href={`/drills/${slugify(
                      drill[1].category.name || drill[1].category
                    )}/${slugify(drill[1].name)}`}
                    color="secondary"
                    variant="outlined"
                    size="small"
                  >
                    Open
                  </Button>
                  <Button
                    size="small"
                    style={{ marginTop: "5px" }}
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                      const copy = { ...drills };
                      delete copy[drill[1].name];
                      changeSelectedDrills(copy);
                    }}
                  >
                    Remove
                  </Button>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Drawer>
    </>
  );
}
