import { Chip, styled } from "@mui/material";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import slugify from "@sindresorhus/slugify";

const StyledChip = styled(Chip)({
  textDecoration: "none",
  margin: "3px"
});

const DrillCategoryChip = (props) => {
  console.log(props)
  const text = props.category.name || props.category
  return (
    <GatsbyLink
      style={{
        textDecoration: "none"
      }}
      to={`/drills/${slugify(
        text.toLowerCase()
      )}`}
    >
      <StyledChip
        clickable
        size="small"
        color="primary"
        label={text.replace(/[_-]/g, " ")}
        icon={<SportsBasketballIcon />}
      />
    </GatsbyLink>
  );
};

export default DrillCategoryChip;
