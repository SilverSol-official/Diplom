import react from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import TableViewIcon from "@mui/icons-material/TableView";
import TuneIcon from "@mui/icons-material/Tune";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { amber, grey } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { GetDate } from "./date";
import { useState, useEffect } from "react";
import ListWindow from "../ListWindow/ListWindow";
import KanbanWindow from "../CanbanWindow/CanbanWindow";
import CalandarWindow from "../CalendarWindow/CalandarWindow";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  auth,
  createNewTask,
  deleteProject,
  register,
  setProjectName,
} from "../../rdx/features/ProjectReducers";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Header = {
  display: "flex",
  flexDirection: "row",
  margin: "20px 30px",
  borderBottom: "1px solid grey",
  paddingBottom: "30px",
};

const FilterButtonsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  borderBottom: "2px solid grey",
  paddingBottom: "30px",
  paddingTop: "20px",
  width: "96%",
  margin: "auto",
};

const FilterButton = {
  marginLeft: "60%",
};

const HeaderButton = {
  borderRadius: "50%",
  minWidth: "30px",
  minHeight: "30px",
  margin: "0 10px",
};

const MainWindow = () => {
  const [fav, setFav] = useState(true);
  const [view, setView] = useState("list");
  const [projectName, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  let ProjectInfo = useSelector((state) =>
    state.project.projects.find((item) => item.projectId == id)
  );

  // const authed = useSelector((state) => state.project.authed);
  // console.log("main authed", authed);
  // console.log(authed);
  // useEffect(() => {
  //   if (authed != true) {
  //     navigate("/", { replace: true });
  //   }
  // }, [authed, navigate]);

  useEffect(() => {
    setName(ProjectInfo.projectName);
  }, [ProjectInfo]);

  const ProjectNameHandle = (event) => {
    setName(event.target.value);
    dispatch(setProjectName({ name: event.target.value, id: id }));
  };

  return (
    <Grid item xs={9} className="MainWindow">
      <Item sx={{ height: "100%" }}>
        <Box>
          <Box sx={Header}>
            <input
              type="text"
              className="NameInput"
              value={projectName ? projectName : ""}
              onChange={(event) => ProjectNameHandle(event)}
            />

            <Box sx={{ marginLeft: "60%" }}>
              {/* <Button sx={HeaderButton} onClick={() => setFav(!fav)}>
                <StarIcon
                  sx={fav ? { color: amber[300] } : { color: grey[500] }}
                />{" "}
              </Button> */}
              <Button
                sx={HeaderButton}
                onClick={() => {
                  dispatch(deleteProject({ id: ProjectInfo.projectId }));
                  navigate("/authed/");
                }}
              >
                <DeleteIcon sx={{ color: "red" }} />
              </Button>
              {GetDate()}
            </Box>
          </Box>
          <Box sx={FilterButtonsContainer}>
            <Button variant="outlined" onClick={() => setView("kanban")}>
              <ViewKanbanIcon /> Kanban
            </Button>
            <Button variant="outlined" onClick={() => setView("list")}>
              <FormatListBulletedIcon /> List
            </Button>
            {/* <Button variant="outlined" onClick={() => setView("table")}>
              <TableViewIcon /> Table
            </Button> */}
            <Button
              variant="outlined"
              sx={FilterButton}
              onClick={() => {
                dispatch(createNewTask({ projectId: id }));
              }}
            >
              New task
            </Button>
          </Box>
          <Box>
            {view == "list" ? (
              <ListWindow />
            ) : view == "kanban" ? (
              <KanbanWindow props={{ id: ProjectInfo.projectId }} />
            ) : (
              <CalandarWindow />
            )}
          </Box>
        </Box>
      </Item>
    </Grid>
  );
};

export default MainWindow;
