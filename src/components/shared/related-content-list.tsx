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
import { GatsbyImage, getImageData } from "gatsby-plugin-image";
import React from "react";
import { encodeStrForUrl } from "../../helpers/modifiers";
import ArticleCategoryChip from "../article/article-category-chip";

const CardActionButton = styled(Link)({
  textDecoration: "none",
});

const GridParent = styled("div")({
  display: "grid",
  gridAutoColumns: "1fr 1fr 1fr 1fr",
  columnGap: "5px",
  marginTop: "30px",
})


export const RelatedContentWrapper = (props) => {
  return (
    <GridParent style={{ gridTemplateColumns: props.isHomePage ? "repeat(4, 1fr)" : "repeat(3, 1fr)" }} >
      {props.items.edges.map((item, index) => {

        const node = item.node;

        console.log(node)
        let path, image
        switch (props.contentType) {
          case ("drillCategories"): {
            path = `/drills/${encodeStrForUrl(
              node.name
            )}`
            image = node.image.localFile.childImageSharp.gatsbyImageData
            break;
          }

          case ("drills"): {
            path = `/drills/${encodeStrForUrl(
              node.category.name
            )}/${encodeStrForUrl(node.title || node.name)}`
            image = node.main_media.localFile.childImageSharp.gatsbyImageData

            break;
          }

          case ("articleTopics"): {
            path = `/articles/${encodeStrForUrl(
              node.name
            )}`
            image = node.main_media.localFile.childImageSharp.gatsbyImageData

            break;
          }
          case ("articles"): {
            path = `/articles/${encodeStrForUrl(
              node.category.name
            )}/${encodeStrForUrl(node.title || node.name)}`
            image = node.main_media.localFile.childImageSharp.gatsbyImageData

            break;
          }
        }

        return (
          <Card key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <GatsbyImage
                alt={node.title || node.name}
                style={{ objectFit: "contain" }}
                image={image}
              />
              <CardContent>
                <Box style={{ padding: "0 0 5px 0" }}>
                  <Typography variant="h5">{node.title || node.name}</Typography>
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
                to={path}
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
