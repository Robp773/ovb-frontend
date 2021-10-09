import { Chip, styled } from "@material-ui/core";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { encodeStrForUrl } from "../../helpers/modifiers";

const StyledChip = styled(Chip)({
  marginBottom: "3px",
});

const DrillCategoryChip = (props) => {
  return (
    <GatsbyLink
      to={`${process.env.GATSBY_BASE_URL}/drills/${encodeStrForUrl(
        props.category.toLowerCase()
      )}`}
    >
      <StyledChip
        clickable
        size="small"
        color="primary"
        label={props.category.replace(/[_-]/g, " ")}
        icon={<SportsBasketballIcon />}
      />
    </GatsbyLink>
  );
};

export default DrillCategoryChip;
