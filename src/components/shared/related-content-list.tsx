import {
  Box,
  CardActions,
  CardContent,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import styled from "@mui/styled-engine";
import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { encodeStrForUrl } from "../../helpers/modifiers";
import ArticleCategoryChip from "../article/article-category-chip";

const CardActionButton = styled(Link)({
  textDecoration: "none",
});

const GridParent = styled("div")({
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoRows: "1fr",
  gridAutoFlow: "column",
  columnGap: "5px",
  marginTop: "30px",
})

export const RelatedContentWrapper = (props) => {
  return (
    <GridParent >
      {props.items.edges.map((item, index) => {
        const node = item.node;
        return (

          <Card key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Img
                style={{
                  height: "200px",
                }}
                fluid={node.main_media.localFile.childImageSharp.fluid}
              />
              <CardContent>
                <Box style={{ padding: "0 0 5px 0" }}>
                  <Typography variant="h5">{node.title}</Typography>
                  <Typography variant="subtitle1">{node.date}</Typography>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {props.withCategory ? (
                      <ArticleCategoryChip
                        category={node.category.name}
                        iconWithText={true}
                      />
                    ) : null}
                  </Box>
                </Box>


                <Typography variant="body2">{node.description}</Typography>
              </CardContent>
            </div>

            <CardActions>
              <CardActionButton
                to={`/${props.contentType}s/${encodeStrForUrl(
                  node.category.name
                )}/${encodeStrForUrl(node.title || node.name)}`}
              >
                <Button variant="outlined">Read more</Button>
              </CardActionButton>
            </CardActions>
          </Card>
        );
      })}
    </GridParent>
  );
};
