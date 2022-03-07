import { Chip } from "@mui/material";
import React from "react";

const ContentChip = (props, data) => {
  return (
    <Chip
      clickable
      size="small"
      color="secondary"
      label={`${props.name}`}
      style={{ marginBottom: "3px", marginLeft: "3px"  }}
    />
  );
};

export default ContentChip;
