import { Chip, styled } from "@material-ui/core";
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import GroupIcon from "@material-ui/icons/Group";
import TimelineIcon from "@material-ui/icons/Timeline";
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { encodeStrForUrl } from "../../helpers/modifiers";
import { getArticleIcon } from "../../helpers/getArticleChip";

const StyledChip = styled(Chip)({
  margin: "5px auto",
  display: "flex",
  justifyContent: "center",
  width: "fit-content",
  padding: "10px 5px",
});

const ArticleCategoryChip = (props) => {
  let activeIcon;
  switch (props.category) {
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
  }
  return (
    < >
      {props.iconWithText ? (
        <GatsbyLink
          style={{
            textDecoration: "none"
          }}
          to={`/articles/${encodeStrForUrl(
            props.category.toLowerCase()
          )}`}
        >
          <StyledChip
            clickable
            size="small"
            color="primary"
            label={props.category.replace(/[_-]/g, " ")}
            // icon={getArticleIcon(props.category)}
          />
        </GatsbyLink>
      ) : getArticleIcon(props.category)}
    </>
  );
};

export default ArticleCategoryChip;
