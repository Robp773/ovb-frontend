import {
  Box,
  CardActions,
  CardContent,
  Divider,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
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
  rowGap: "5px",
  marginTop: "30px",
})

export const RelatedContentWrapper = (props) => {

  let iterable = props.items.edges ? props.items.edges : props.items

  return (
    <GridParent style={{ gridTemplateColumns: props.isHomePage ? "repeat(4, 1fr)" : "repeat(3, 1fr)" }} >
      {iterable.map((item, index) => {

        const node = item.node ? item.node : item
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

          case ("references"): {
            if (node.category) {
              console.log(node)
              path = `/drills/${encodeStrForUrl(
                node.category
              )}/${encodeStrForUrl(node.name)}`
            }
            else {
              path = `/activities/${encodeStrForUrl(node.title)}`
            }

            image = node.main_media.localFile.childImageSharp.gatsbyImageData
            break;
          }
        }
        return (
          <Card variant="outlined" key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <GatsbyImage
                alt={node.title || node.name}
                image={image}
              />
              <CardContent>
                <Box style={{ padding: "0 0 5px 0" }}>
                  <Typography variant="h6">{node.title || node.name}</Typography>
                  <Typography variant="body1">{node.date}</Typography>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {props.withCategory ? (
                      <ArticleCategoryChip
                        category={node.category ? node.category.name : node.name}
                        iconWithText={true}
                      />
                    ) : null}
                  </Box>
                </Box>

                <Divider style={{ margin: "5px auto" }} />


                <Typography variant="body2" dangerouslySetInnerHTML={{
                  __html: node.one_sentence_description || node.description,
                }} />
              </CardContent>
            </div>

            <CardActions>
              <CardActionButton
                to={path}
              >
                <Button size="small" color="secondary"
                  variant="contained">Read more</Button>
              </CardActionButton>
            </CardActions>
          </Card>
        );
      })}
    </GridParent>
  );
};
