import { Chip, styled } from "@mui/material";
import slugify from "@sindresorhus/slugify";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { getArticleIcon } from "../../helpers/getArticleChip";

const StyledChip = styled(Chip)({
  margin: "5px auto",
  display: "flex",
  justifyContent: "center",
  width: "fit-content",
  padding: "10px 5px",
});

const ArticleCategoryChip = (props) => {

  return (
    < >
      {props.iconWithText ? (
        <GatsbyLink
          style={{
            textDecoration: "none"
          }}
          to={`/articles/${slugify(
            props.category.toLowerCase()
          )}`}
        >
          <StyledChip
            clickable
            size="small"
            color="primary"
            label={props.category.replace(/[_-]/g, " ")}
            icon={getArticleIcon(props.category)}
          />
        </GatsbyLink>
      ) : getArticleIcon(props.category)}
    </>
  );
};

export default ArticleCategoryChip;
