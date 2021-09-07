import { Chip, styled } from "@material-ui/core";
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import GroupIcon from "@material-ui/icons/Group";
import TimelineIcon from '@material-ui/icons/Timeline';
import React from "react";


const StyledChip = styled(Chip)({
marginBottom: "3px",

})

const ArticleCategoryChip = (props) => {
    let activeIcon;
    switch (props.category) {
      case "Mindset": {
        activeIcon = <EmojiObjectsRoundedIcon />
        break;
      }
      case "Team": {
        activeIcon = <GroupIcon />;
        break;
      }
      case "Leadership": {
        activeIcon = <EmojiPeopleIcon />;
        break;
      }
      case "Real_Life_Applications": {
        activeIcon = <BuildRoundedIcon />;
        break;
      }
      case "Process": {
        activeIcon = <TimelineIcon />;
        break;
      }
    }
  return (
    <StyledChip clickable size="small" color="primary" label={props.category.replace(/[_-]/g, " ")} icon={activeIcon} />
    );
};

export default ArticleCategoryChip;
