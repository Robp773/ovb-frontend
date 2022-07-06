import { Chip } from "@mui/material";
import React from "react";

const ContentChip = (props, data) => {
  return (
    <Chip
      clickable
      size="small"
      color={props.color}
      label={`${props.name}`}
      style={{ margin: "3px 3px 3px 0" }}
    />
  );
};

export default ContentChip;
