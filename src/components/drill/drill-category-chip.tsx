import { Chip, styled } from "@material-ui/core";
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import GroupIcon from "@material-ui/icons/Group";
import TimelineIcon from "@material-ui/icons/Timeline";
import React from "react";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";

const StyledChip = styled(Chip)({
  marginBottom: "3px",
});

const DrillCategoryChip = (props) => {
  return (
    <StyledChip
      clickable
      size="small"
      color="primary"
      label={props.category.replace(/[_-]/g, " ")}
      icon={<SportsBasketballIcon />}
    />
  );
};

export default DrillCategoryChip;
