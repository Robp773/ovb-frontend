import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grow,
  Paper,
  Slide,
  Typography
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { graphql } from "gatsby";
import React, { useState } from "react";
import Layout from "../../components/layout";
import ContentWrapper from "../../components/shared/content-wrapper";
import { RelatedContentWrapper } from "../../components/shared/related-content-list";
import { useFlexSearch } from 'react-use-flexsearch'
import { Formik, Form, Field } from 'formik'
import { TextField } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';

import Collapse from '@mui/material/Collapse';
import AssignmentIcon from '@mui/icons-material/Assignment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from "react";
import DrillCategoryChip from "../../components/drill/drill-category-chip";
import ContentChip from "../../components/shared/content-chip";
import DrillCompetencyChip from "../../components/drill/drill-competency-chip";
import DrillTypeChip from "../../components/drill/drill-type-chip";
import DrillDetails from "../../components/drill/drill-details";
import slugify from "@sindresorhus/slugify";
import { Link as GatsbyLink } from "gatsby";
const HeadingTitle = styled(Typography)(({ theme }) => ({
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  textAlign: "center",
  width: "fit-content",
  margin: "auto",
  "& > h6": {
    border: "3px solid red",
  },
}));

const competencies = [
  "Foundational", "Intermediate", "Advanced"
];

const drillTypes = [
  "Team", "Partner", "Individual"
];
const fontColor = {
  style: { color: 'red !important' }
}
const DrillsPage = (data) => {

  const {
    strapiDrillsPage,
    allStrapiDrillCategory,
    localSearchDrills
  } = data.data;

  const [query, setQuery] = useState("")
  const [competency, setCompetency] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [drillType, setDrillType] = React.useState([]);
  const [queryObj, setQueryObj] = React.useState({});
  const [isInitialSearch, setIsInitialSearch] = React.useState(true);
  const [textQuery, setTextQuery] = React.useState("");


  const results = useFlexSearch(query, localSearchDrills.index, localSearchDrills.store)

  const handleChange = (event, key) => {
    if (isInitialSearch) setIsInitialSearch(false)

    const {
      target: { value },
    } = event;

    let updatedQueryObj = { ...queryObj, [key]: value }
    let query = ""
    for (let key in updatedQueryObj) {
      query = query + " " + updatedQueryObj[key]
    }

    setQuery(query)
    setQueryObj(updatedQueryObj)
  }

  const handleClear = () => {
    setCompetency([])
    setCategory([])
    setDrillType([])
    setQuery("")
    setQueryObj({})
    setTextQuery("")
  }

  return (
    <Layout>
      <ContentWrapper width="85ch">
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <HeadingTitle variant="h3">
              {strapiDrillsPage.page_title}
            </HeadingTitle>
            <Typography
              style={{
                maxWidth: "85ch",
                marginTop: "10px",
              }}
              variant="body1"
              dangerouslySetInnerHTML={{
                __html: strapiDrillsPage.drills_page_description,
              }}
            />
          </Box>
        </Container>
        <Divider style={{ margin: "20px 0" }} />

        <Container style={{ padding: 0 }}>
          <Typography
            style={{ textAlign: "center", marginBottom: "30px" }}
            variant="h4"
          >
            Search all drills
          </Typography>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <FormControl color="secondary" style={{ width: '200px' }}>
              <InputLabel focused id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category-chip"
                // multiple
                value={category}
                onChange={(e) => {
                  setCategory(
                    [e.target.value],
                  ); handleChange(e, "category")
                }}
                input={<OutlinedInput id="select-multiple-category-chip" label="category" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <DrillCategoryChip category={value} key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {allStrapiDrillCategory.edges.map((category) => {
                  return (
                    <MenuItem
                      key={category.node.name}
                      value={category.node.name}
                    >
                      {category.node.name}
                    </MenuItem>
                  )
                }
                )}
              </Select>
            </FormControl>

            <FormControl color="secondary" style={{ width: '200px' }}>
              <InputLabel focused id="drill-type-label">Drill Type</InputLabel>
              <Select
                labelId="drill-type-label"
                id="drill-type-chip"
                // multiple
                value={drillType}
                onChange={(e) => {
                  setDrillType(
                    [e.target.value],
                  ); handleChange(e, "drillType")
                }}
                input={<OutlinedInput id="select-multiple-drill-type-chip" label="Drill Type" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value, index) => (
                      <DrillTypeChip key={index} name={value} />
                    ))}
                  </Box>
                )}
              >
                {drillTypes.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl color="secondary" style={{ width: '200px' }}>
              <InputLabel focused id="competency-label">Competency</InputLabel>
              <Select
                labelId="competency-label"
                id="competency-chip"
                // multiple
                value={competency}
                onChange={(e) => {
                  setCompetency(
                    [e.target.value],
                  ); handleChange(e, "competency")
                }}
                input={<OutlinedInput id="select-multiple-competency-chip" label="Competency" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <DrillCompetencyChip name={value} key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {competencies.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>



            <Button onClick={handleClear}>Clear</Button>
          </Box>

          <Box>
            <TextField autoComplete="off" value={textQuery} type="search" color="secondary" fullWidth style={{ margin: "10px auto" }} label="Text search" onChange={(e) => { setTextQuery(e.target.value); handleChange(e, "text") }} />
            {!isInitialSearch && !results.length && <Alert severity="warning">No results found</Alert>}
            {results.length > 0 && <Alert severity="success">{results.length} matching drills found.</Alert>}

          </Box>


          <List>
            {results.map((result, index) => {
              const { isIndividual, isGroup, isTeam, timeEstimate, competency } = result
              const details = { isIndividual, isGroup, isTeam, time_estimate: timeEstimate, competency }
              console.log(result)
              return (
                <Grow in={result ? true : false} timeout={index * 300}>

                  <ListItem dense style={{ margin: "5px 0", width: "max-width" }} disablePadding>
                    <Paper variant="outlined" style={{ width: "100%" }}>
                      <ListItemButton>
                        <ListItemIcon>
                          <AssignmentIcon fontSize="large" color="info" />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="h6">{result.name}</Typography>
                          <DrillDetails node={result} />

                          {result.tags.map((tag, index)=>{
                            return <ContentChip index={index} name={tag}/>
                          })}
                          <Box style={{ display: "flex" }}>
                            <Typography style={{ margin: "7px 0 10px 0" }} variant="body2">{result.description}</Typography>
                          </Box>
                          <Button href={`/drills/${slugify(result.category)}/${slugify(result.name)}`} color="secondary" variant="outlined">Open</Button>
                        </ListItemText>
                      </ListItemButton>

                    </Paper>
                  </ListItem>
                </Grow>
              )
            })}
          </List>
        </Container>

        <Divider style={{ margin: "20px 0" }} />

        <Typography
          style={{ textAlign: "center" }}
          variant="h4"
        >
          Drill categories
        </Typography>

        <RelatedContentWrapper isHomePage={false} contentType="drillCategories" xs={3} items={allStrapiDrillCategory} />

      </ContentWrapper>
    </Layout >
  );
};

export const query = graphql`
  query {
    allStrapiDrillCategory {
      edges {
        node {
          description
          name
          one_sentence_description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 200,
                  width: 300,
                  transformOptions: {fit: FILL,  cropFocus: CENTER}
                )
              }
            }
          }
        }
      }
    }
    strapiDrillsPage {
      drills_page_description
      page_title
    }
    localSearchDrills {
      id
      name
      store
      index
    }
  }
`;

export default DrillsPage;
