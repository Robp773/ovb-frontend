import {
  Box,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grow,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import styled from "@mui/styled-engine";
import { Link } from "gatsby";
import { GatsbyImage, getImageData } from "gatsby-plugin-image";
import React from "react";
import ArticleCategoryChip from "../article/article-category-chip";
import slugify from '@sindresorhus/slugify';
import { node } from "prop-types";
import ContentChip from "./content-chip";
import { getArticleIcon } from "../../helpers/getArticleChip";
import DrillDetails from "../drill/drill-details";



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
        let hasTags = false
        let showDrillDetails = false

        switch (props.contentType) {
          case ("drillCategories"): {
            path = `/drills/${slugify(
              node.name
            )}`
            image = node.image.localFile.childImageSharp.gatsbyImageData
            break;
          }

          case ("drills"): {
            path = `/drills/${slugify(
              node.category.name
            )}/${slugify(node.title || node.name)}`
            image = node.main_media.localFile.childImageSharp.gatsbyImageData
            hasTags = true
            showDrillDetails = true
            break;
          }

          case ("articleTopics"): {
            path = `/articles/${slugify(
              node.name
            )}`
            image = node.main_media.localFile.childImageSharp.gatsbyImageData
            break;
          }

          case ("articles"): {
            path = `/articles/${slugify(
              node.category.name
            )}/${slugify(node.title || node.name)}`
            image = node.main_media.localFile.childImageSharp.gatsbyImageData
            hasTags = true

            break;
          }

          case ("references"): {
            hasTags = true
            if (node.category) {
              path = `/drills/${slugify(
                node.category
              )}/${slugify(node.name)}`
              showDrillDetails = true

            }
            else {
              path = `/activities/${slugify(node.title)}`
            }
            image = node.main_media.localFile.childImageSharp.gatsbyImageData
            break;
          }
        }
        return (
          <Grow key={index} in={item ? true : false} timeout={index * 500}>

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

                    <Typography variant="h6" style={{ display: "flex", alignItems: "center" }}>{node.title || node.name}{props.contentType === "articleTopics" ?
                      <Box style={{ display: "flex", alignItems: "center", marginLeft: "6px" }}>
                        <ArticleCategoryChip category={node.name} />
                      </Box> : null}
                    </Typography>
                    <Typography variant="body1">{node.date}</Typography>

                    {showDrillDetails ?
                      <DrillDetails node={node} />
                      : null}

                    {/* {hasTags ?
                    <Box>{
                      node.tags.map((tag, index) => {
                        return <ContentChip key={`category-${index}`} name={tag.name} />
                      })}
                    </Box>
                    : null} */}

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
          </Grow>
        );
      })}
    </GridParent >
  );
};
