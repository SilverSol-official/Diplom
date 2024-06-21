import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { amber } from "@mui/material/colors";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useSelector, useDispatch } from "react-redux";
import { createProject } from "../../rdx/features/ProjectReducers";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Container = {
  display: "flex",
  flexDirection: "column",
};

const FolderLabel = {
  textAlign: "left",
  margin: "20px 0 40px 10%",
};

const AddProjectButton = {
  width: "70%",
  height: "40px",
  margin: "10px auto",
};

const FawTree = {
  width: "70%",
  margin: "40px auto 10px",
};

const Folders = () => {
  const projects = useSelector((state) => state.project.projects);
  console.log("folders projects", projects);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const render = () => {
    if (projects.length === 0) {
      return <h3>No projects</h3>;
    } else {
      return projects.map((item) => {
        return (
          <TreeItem
            nodeId={item.projectId}
            key={item.projectId}
            label={item.projectName}
            onClick={() => navigate(`/authed/${item.projectId}`)}
          />
        );
      });
    }
  };

  return (
    <Grid item xs={2} className="FolderMenu">
      <Item sx={{ height: "100%" }}>
        <Box sx={Container}>
          <Typography variant="h4" sx={FolderLabel}>
            Projects
          </Typography>
          <Button
            variant="outlined"
            sx={AddProjectButton}
            onClick={() => dispatch(createProject())}
          >
            New project
          </Button>
          {/* <Button variant="outlined" sx={AddProjectButton}>
            New task
          </Button> */}

          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={FawTree}
          >
            <TreeItem nodeId="1" label="All projects">
              {render()}
            </TreeItem>
          </TreeView>
        </Box>
      </Item>
    </Grid>
  );
};

export default Folders;
