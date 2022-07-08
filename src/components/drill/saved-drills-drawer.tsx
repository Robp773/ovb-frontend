import { Drawer } from "@material-ui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import slugify from "@sindresorhus/slugify";
import * as React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Alert } from "@mui/material";
import DrillDetails from "./drill-details";
import { useReactToPrint } from "react-to-print";
import SavedDrillsList from "./saved-drills-list";
import PrintIcon from "@mui/icons-material/Print";
export default function SavedDrillsDrawer({
  changeSelectedDrills,
  drills,
  fullWidth,
}) {
  const componentRef = React.useRef(null);

  const [isOpen, setIsOpen] = React.useState(false);

  const drillList = drills ? Object.entries(drills) : [];

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Button
        startIcon={<InventoryIcon />}
        onClick={() => {
          setIsOpen(true);
        }}
        variant="contained"
        style={{ position: "fixed", right: 0, zIndex: 1 }}
      >
        Saved Drills {drillList.length > 0 && `(${drillList.length})`}
      </Button>
      <Drawer anchor="right" open={isOpen} style={{ zIndex: 999 }}>
        <Button
          onClick={() => {
            setIsOpen(false);
          }}
          style={{ position: "absolute", right: 0 }}
        >
          Close
        </Button>
        <Box
          sx={{
            padding: "10px",
            maxWidth: "400px",
          }}
        >
          <div style={{ display: "none" }}>
            <SavedDrillsList drills={drillList} ref={componentRef} />
          </div>
          <Typography variant="h5">
            Saved Drills ({drillList.length})
          </Typography>{" "}
          <Alert style={{ padding: 0 }} severity="info">
            Drills can be saved and printed out for later use.
          </Alert>
          <Button
            startIcon={<PrintIcon />}
            onClick={handlePrint}
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
