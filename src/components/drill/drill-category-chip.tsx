import { Chip, styled } from "@mui/material";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import slugify from "@sindresorhus/slugify";

const StyledChip = styled(Chip)({
  marginBottom: "3px",
  textDecoration: "none"
});

const DrillCategoryChip = (props) => {
  return (
    <GatsbyLink
      style={{
        textDecoration: "none"
      }}
      to={`/drills/${slugify(
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
