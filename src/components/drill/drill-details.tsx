import TimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";
import TeamIcon from "@material-ui/icons/GroupAdd";

import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import DrillCategoryChip from "./drill-category-chip";
import DrillCompetencyChip from "./drill-competency-chip";
import DrillTypeChip from "./drill-type-chip";

const DrillDetails = (props) => {

    console.log(props)

    let types = []

    return (
        <Box flexWrap="wrap" style={{ display: "flex", flexDirection: `${props.withCategory ? "row" : "row"}`, alignItems: "flex-start" }}>
            {props.withCategory ? null : <DrillCategoryChip category={props.node.category} />}
            <Box style={{ display: "flex", alignItems: "center" }}>
                {/* {props.withCategory ? <Typography style={{ marginRight: "3px" }} variant="subtitle1">Competency:</Typography> : null} */}
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
                {/* {props.withCategory ? <Typography style={{ marginRight: "3px" }} variant="subtitle1">Drill Type:</Typography> : null} */}
                {props.node.isIndividual ? <DrillTypeChip name="Individual" /> : null}
                {props.node.isTeam ? <DrillTypeChip name="Team" /> : null}
                {props.node.isGroup ? <DrillTypeChip name="Partner" /> : null}
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
                {/* {props.withCategory ? <Typography style={{ marginRight: "3px" }} variant="subtitle1">Time Estimate:</Typography> : null} */}
                <DrillCompetencyChip name={props.node.competency} />

                <Chip clickable size="small"
                    icon={<TimeIcon />}
                    label={`${props.node.time_estimate} mins`}
                    variant="outlined"
                    style={{margin: "3px 3px 3px 0" }}

                />
            </Box>


        </Box>
    );
};

export default DrillDetails;

