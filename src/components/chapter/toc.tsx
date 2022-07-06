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

export default function VerticalLinearStepper({
  chapters,
  isInDrawer,
  fullWidth,
  activeChapter,
}) {
  return (
    <Box
      sx={{
        maxWidth: `${fullWidth ? "auto" : "400px"}`,
        padding: `${isInDrawer ? "20px" : "0"}`,
      }}
    >
      <Typography variant="h5">Chapters</Typography>
      <Stepper
        style={{ marginTop: "10px" }}
        color="secondary"
        nonLinear
        orientation="vertical"
      >
        {chapters.map((step) => (
          <Step active key={step.node.name}>
            <StepLabel>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {activeChapter === step.node.name ? (
                  <LabelIcon sx={{ marginRight: "5px" }} />
                ) : null}
                <Box
                  sx={{
                    fontWeight: `${
                      activeChapter === step.node.name ? "bold" : "initial"
                    }`,
                  }}
                >
                  {step.node.name}
                </Box>
              </Box>
            </StepLabel>
            <StepContent>
              <Typography>{step.node.description}</Typography>
              {activeChapter === step.node.name ? null : (
                <Button
                  href={`/process/${slugify(
                    step.node.chapter_category.name
                  )}/${slugify(step.node.name)}`}
                  color="secondary"
                  variant="outlined"
                >
                  Read
                </Button>
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
