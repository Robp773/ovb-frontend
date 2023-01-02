import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  StepContent,
  Divider,
} from "@mui/material";

import DrillDetails from "./drill-details";
import React from "react";
import { Drill } from "../../../types/DrillsPages";
const SavedDrillsList = React.forwardRef(
  ({ drills }: { drills: Drill[] }, ref) => {
    return (
      <div ref={ref} style={{ padding: "0 20px", overflow: "auto" }}>
        {drills.map((drill, index) => (
          <div
            style={{ paddingTop: "20px", pageBreakAfter: "always" }}
            key={index}
          >
            <div>
              <Typography variant="h4">{drill[1].name}</Typography>
              <Box style={{ marginTop: "10px" }}>
                <DrillDetails node={drill[1]} />
              </Box>
              <Box style={{ marginTop: "10px" }}>
                <Typography variant="h5">Summary</Typography>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: drill[1].summary,
                  }}
                />
              </Box>
              {drill[1].steps.length ? (
                <Box style={{ marginTop: "20px" }}>
                  <Typography variant="h5">Steps</Typography>

                  <Stepper orientation="vertical">
                    {drill[1].steps.map((step, index) => {
                      return (
                        <Step key={index} active={true}>
                          <StepLabel>{step.title}</StepLabel>
                          <StepContent>
                            <Typography
                              style={{ marginTop: "10px" }}
                              variant="body1"
                              dangerouslySetInnerHTML={{
                                __html: step.description,
                              }}
                            />
                          </StepContent>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Box>
              ) : null}{" "}
            </div>
            <Divider />
          </div>
        ))}
      </div>
    );
  }
);

export default SavedDrillsList;
