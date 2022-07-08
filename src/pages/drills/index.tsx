import AssignmentIcon from "@mui/icons-material/Assignment";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grow,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import slugify from "@sindresorhus/slugify";
import { graphql } from "gatsby";
import React, { useContext, useState } from "react";
import { useFlexSearch } from "react-use-flexsearch";
import DrillCategoryChip from "../../components/drill/drill-category-chip";
import DrillCompetencyChip from "../../components/drill/drill-competency-chip";
import DrillDetails from "../../components/drill/drill-details";
import DrillTypeChip from "../../components/drill/drill-type-chip";
import Layout from "../../components/layout";
import ContentChip from "../../components/shared/content-chip";
import ContentWrapper from "../../components/shared/content-wrapper";
import { RelatedContentWrapper } from "../../components/shared/related-content-list";
import StaticPageNoImageHeading from "../../components/static-page/static-page-no-image-heading";
import DrillsContext from "../../components/DrillsContext";
import SavedDrillsDrawer from "../../components/drill/saved-drills-drawer";

const competencies = ["Foundational", "Intermediate", "Advanced"];

const drillTypes = ["Team", "Partner", "Individual"];

const DrillsPage = (data) => {
  const { strapiDrillsPage, allStrapiDrillCategory, localSearchDrills } =
    data.data;

  const [query, setQuery] = useState("");
  const [competency, setCompetency] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [drillType, setDrillType] = React.useState([]);
  const [queryObj, setQueryObj] = React.useState({});
  const [isInitialSearch, setIsInitialSearch] = React.useState(true);
  const [textQuery, setTextQuery] = React.useState("");

  const results = useFlexSearch(
    query,
    localSearchDrills.index,
    localSearchDrills.store
  );

  const handleChange = (event, key) => {
    if (isInitialSearch) setIsInitialSearch(false);

    const {
      target: { value },
    } = event;

    let updatedQueryObj = { ...queryObj, [key]: value };
    let query = "";
    for (let key in updatedQueryObj) {
      query = query + " " + updatedQueryObj[key];
    }

    setQuery(query);
    setQueryObj(updatedQueryObj);
  };

  const handleClear = () => {
    setCompetency([]);
    setCategory([]);
    setDrillType([]);
    setQuery("");
    setQueryObj({});
    setTextQuery("");
  };

  const savedDrills = useContext(DrillsContext);

  return (
    <Layout>
      <SavedDrillsDrawer
        changeSelectedDrills={savedDrills.changeSelectedDrills}
        drills={savedDrills.selectedDrills}
      />
      <ContentWrapper width="85ch">
        <StaticPageNoImageHeading title={strapiDrillsPage.page_title} />
        <Typography
          style={{
            marginTop: "10px",
          }}
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: strapiDrillsPage.drills_page_description,
          }}
        />
        <Divider style={{ margin: "20px 0" }} />

        <Container style={{ padding: 0 }}>
          <Typography
            style={{ textAlign: "center", marginBottom: "30px" }}
            variant="h4"
          >
            Search all drills
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControl color="secondary" style={{ width: "200px" }}>
              <InputLabel focused id="category-label">
                Category
              </InputLabel>
              <Select
                labelId="category-label"
                id="category-chip"
                // multiple
                value={category}
                onChange={(e) => {
                  setCategory([e.target.value]);
                  handleChange(e, "category");
                }}
                input={
                  <OutlinedInput
                    id="select-multiple-category-chip"
                    label="category"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <DrillCategoryChip
                        category={value}
                        key={value}
                        label={value}
                      />
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
                  );
                })}
              </Select>
            </FormControl>

            <FormControl color="secondary" style={{ width: "200px" }}>
              <InputLabel focused id="drill-type-label">
                Drill Type
              </InputLabel>
              <Select
                labelId="drill-type-label"
                id="drill-type-chip"
                // multiple
                value={drillType}
                onChange={(e) => {
                  setDrillType([e.target.value]);
                  handleChange(e, "drillType");
                }}
                input={
                  <OutlinedInput
                    id="select-multiple-drill-type-chip"
                    label="Drill Type"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value, index) => (
                      <DrillTypeChip key={index} name={value} />
                    ))}
                  </Box>
                )}
              >
                {drillTypes.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl color="secondary" style={{ width: "200px" }}>
              <InputLabel focused id="competency-label">
                Competency
              </InputLabel>
              <Select
                labelId="competency-label"
                id="competency-chip"
                // multiple
                value={competency}
                onChange={(e) => {
                  setCompetency([e.target.value]);
                  handleChange(e, "competency");
                }}
                input={
                  <OutlinedInput
                    id="select-multiple-competency-chip"
                    label="Competency"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <DrillCompetencyChip
                        name={value}
                        key={value}
                        label={value}
                      />
                    ))}
                  </Box>
                )}
              >
                {competencies.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button onClick={handleClear}>Clear</Button>
          </Box>

          <Box>
            <TextField
              autoComplete="off"
              value={textQuery}
              type="search"
              color="secondary"
              fullWidth
              style={{ margin: "10px auto" }}
              label="Text search"
              onChange={(e) => {
                setTextQuery(e.target.value);
                handleChange(e, "text");
              }}
            />
            {!isInitialSearch && !results.length && (
              <Alert severity="warning">No results found</Alert>
            )}
            {results.length > 0 && (
              <Alert severity="success">
                {results.length} matching drills found.
              </Alert>
            )}
          </Box>

          <List style={{ maxHeight: "750px", overflowY: "auto" }}>
            {results.map((result, index) => (
              <Grow in={result} timeout={(index + 1) * 300}>
                <ListItem
                  dense
                  style={{ margin: "5px 0", width: "max-width" }}
                  disablePadding
                >
                  <Paper variant="outlined" style={{ width: "100%" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <AssignmentIcon fontSize="large" color="info" />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="h6">{result.name}</Typography>
                        <DrillDetails node={result} />

                        {result.tags.map((tag, index) => {
                          return (
                            <ContentChip
                              index={index}
                              // color="primary"
                              name={tag}
                            />
                          );
                        })}
                        <Box style={{ display: "flex" }}>
                          <Typography
                            style={{ margin: "7px 0 10px 0" }}
                            variant="body2"
                          >
                            {result.description}
                          </Typography>
                        </Box>
                        <Button
                          style={{ marginRight: "3px" }}
                          href={`/drills/${slugify(result.category)}/${slugify(
                            result.name
                          )}`}
                          color="secondary"
                          variant="outlined"
                        >
                          Open
                        </Button>
                        <Button
                          disabled={savedDrills.selectedDrills[result.name]}
                          onClick={() => {
                            const copy = { ...savedDrills.selectedDrills };
                            console.log({ result });
                            copy[result.name] = result;
                            savedDrills.changeSelectedDrills(copy);
                          }}
                          color="secondary"
                          variant="contained"
                        >
                          Save
                        </Button>
                      </ListItemText>
                    </ListItemButton>
                  </Paper>
                </ListItem>
              </Grow>
            ))}
          </List>
        </Container>

        <Divider style={{ margin: "20px 0" }} />

        <Typography style={{ textAlign: "center" }} variant="h4">
          Drill categories
        </Typography>

        <RelatedContentWrapper
          isHomePage={false}
          contentType="drillCategories"
          xs={3}
          items={allStrapiDrillCategory}
        />
      </ContentWrapper>
    </Layout>
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
                  height: 750
                  width: 1000
                  transformOptions: { fit: FILL, cropFocus: CENTER }
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
