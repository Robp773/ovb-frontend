import BuildRoundedIcon from "@material-ui/icons/BuildRounded";
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import GroupIcon from "@material-ui/icons/Group";
import TimelineIcon from "@material-ui/icons/Timeline";
import FlagIcon from "@material-ui/icons/Flag";
import TheatersIcon from "@mui/icons-material/Theaters";
import VideocamIcon from "@mui/icons-material/Videocam";

import React from "react";

export const getArticleIcon = (category: string) => {
  let activeIcon;
  switch (category) {
    case "Mindset": {
      activeIcon = <EmojiObjectsRoundedIcon />;
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
    case "Real Life Applications": {
      activeIcon = <BuildRoundedIcon />;
      break;
    }
    case "Process": {
      activeIcon = <TimelineIcon />;
      break;
    }
    case "Culture": {
      activeIcon = <FlagIcon />;
      break;
    }
    case "Videos": {
      activeIcon = <VideocamIcon />;
      break;
    }
  }
  return activeIcon;
};
