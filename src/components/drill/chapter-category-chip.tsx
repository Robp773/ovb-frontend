import { Chip, styled } from "@mui/material";
import BookIcon from '@mui/icons-material/Book'; import React from "react";
import { Link as GatsbyLink } from "gatsby";
import slugify from "@sindresorhus/slugify";

const StyledChip = styled(Chip)({
  textDecoration: "none",
  margin: "3px 3px 3px 0"
});

const ChapterCategoryChip = (props) => {

  return (
    <GatsbyLink
      style={{
        textDecoration: "none"
      }}
      to={`/process/${slugify(
        props.category.toLowerCase()
      )}`}
    >
      <StyledChip
        clickable
        size="small"
        color="primary"
        label={props.category.replace(/[_-]/g, " ")}
        icon={<BookIcon />}
      />
    </GatsbyLink>
  );
};

export default ChapterCategoryChip;
