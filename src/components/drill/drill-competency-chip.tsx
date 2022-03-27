import { Chip, styled } from "@mui/material";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import slugify from "@sindresorhus/slugify";
import LevelThreeIcon from "@material-ui/icons/Looks3";
import LevelOneIcon from "@material-ui/icons/LooksOne";
import LevelTwoIcon from "@material-ui/icons/LooksTwo";

const DrillCompetencyChip = (props) => {
  let competencyIcon, color
  switch (props.name) {
    case "Foundational": {
      competencyIcon = <LevelOneIcon />
      color = "success"
      break;
    }
    case "Intermediate": {
      competencyIcon = <LevelTwoIcon />
      color = "warning"

      break;
    }
    case "Advanced": {
      competencyIcon = <LevelThreeIcon />
      color = "error"
      break;
    }
  }

  return (
    <Chip
      clickable size="small"
      icon={competencyIcon}
      label={props.name}
      color={color}
      // variant="outlined"
      style={{margin: "3px 3px 3px 0" }}

    />
  );
};

export default DrillCompetencyChip;
