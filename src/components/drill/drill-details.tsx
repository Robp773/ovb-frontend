import TimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";
import TeamIcon from "@material-ui/icons/GroupAdd";
import LevelThreeIcon from "@material-ui/icons/Looks3";
import LevelOneIcon from "@material-ui/icons/LooksOne";
import LevelTwoIcon from "@material-ui/icons/LooksTwo";
import PersonIcon from "@material-ui/icons/Person";
import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const DrillDetails = (props) => {
    let competencyIcon;
    switch (props.node.competency) {
        case "Foundational": {
            competencyIcon = <LevelOneIcon />
            break;
        }
        case "Intermediate": {
            competencyIcon = <LevelTwoIcon />
            break;
        }
        case "Advanced": {
            competencyIcon = <LevelThreeIcon />
            break;
        }
    }

    return (
        <Box style={{ paddingBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

            <Box style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ marginRight: "3px" }} variant="subtitle2">Competency:</Typography>
                <Chip clickable size="small"
                    icon={competencyIcon}
                    label={props.node.competency}
                    variant="outlined"
                />
            </Box>

            <Box style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ marginRight: "3px" }} variant="subtitle2">Drill Type:</Typography>

                {props.node.isIndividual ? <Chip clickable size="small"
                    icon={<PersonIcon />}
                    label="Individual"
                    variant="outlined"
                    style={{ margin: "3px 0" }}
                /> : null}

                {props.node.isTeam ? <Chip clickable size="small"
                    icon={<TeamIcon />}
                    label="Team"
                    variant="outlined"
                    style={{ margin: "3px 0" }}
                /> : null}

                {props.node.isGroup ? <Chip clickable size="small"
                    icon={<GroupIcon />}
                    label="Partner"
                    variant="outlined"
                    style={{ margin: "3px 0" }}
                /> : null}
            </Box>

            <Box style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ marginRight: "3px" }} variant="subtitle2">Time Estimate:</Typography>
                <Chip clickable size="small"
                    icon={<TimeIcon />}
                    label={`${props.node.time_estimate} mins`}
                    variant="outlined"
                />
            </Box>

        </Box>
    );
};

export default DrillDetails;

