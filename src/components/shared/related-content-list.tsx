import {
  Box,
  CardActions,
  CardContent,
  Divider,
  Grid,
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

const ActivityListWrapper = styled(Grid)({
  marginTop: "30px",
});

const CardActionButton = styled(Link)({
  textDecoration: "none",
});

const CardMainContent = styled("div")({
  height: "100%",
  justifyContent: "flex-start",
  display: "flex",
  flexDirection: "column",

  "& >* img": {
    objectFit: "fill !important",
  },
});

export const RelatedContentWrapper = (props) => {
  return (
    <ActivityListWrapper direction="row" container spacing={2}>
      {props.items.edges.map((item, index) => {
        const node = item.node;
        return (
          <Grid key={index} item xs={props.xs}>
            <Card
              style={{
                maxHeight: "700px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMainContent>
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
              </CardMainContent>

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
          </Grid>
        );
      })}
    </ActivityListWrapper>
  );
};
