import { useSelector } from "react-redux";
import { tasks } from "../../TestData";
import ListItem from "../ListItem/ListItem";
import Box from "@mui/material/Box";
import uuid4 from "uuid4";
import { useParams } from "react-router-dom";

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "auto auto auto auto auto",
  padding: "10px",
};

const ListWindow = () => {
  const { id: projectId } = useParams();
  const project = useSelector((state) =>
    state.project.projects.find((project) => project.projectId === projectId)
  );
  const taskList = project ? project.tasks : [];

  return (
    <Box sx={gridContainer}>
      {taskList.map((item) => {
        return <ListItem key={item.taskId} task={item} />;
      })}
    </Box>
  );
};

export default ListWindow;
