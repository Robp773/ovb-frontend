import GroupIcon from "@material-ui/icons/Group";
import TeamIcon from "@material-ui/icons/GroupAdd";
import PersonIcon from "@material-ui/icons/Person";
import { Chip } from "@mui/material";
import React from "react";

const DrillTypeChip = (props) => {
  let competencyIcon;
  switch (props.name) {
    case "Individual": {
      competencyIcon = <PersonIcon />;
      break;
    }
    case "Team": {
      competencyIcon = <TeamIcon />;
      break;
    }
    case "Partner": {
      competencyIcon = <GroupIcon />;
      break;
    }
  }

  return (
    <Chip
      clickable
      size="small"
      color="secondary"
      icon={competencyIcon}
      label={props.name}
      // variant="outlined"
      style={{ margin: "3px 3px 3px 0" }}
    />
  );
};

export default DrillTypeChip;
