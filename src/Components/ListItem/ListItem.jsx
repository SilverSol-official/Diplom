// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
// import DialogTitle from "@mui/material/DialogTitle";
// import PersonIcon from "@mui/icons-material/Person";
// import { useSelector } from "react-redux";

// import statusSelector from "./statusSelector";
// const ListItemStyle = {
//   display: "flex",
//   flexDirection: "column",

//   border: "2px solid #42a5f5",
//   padding: "15px",
//   borderRadius: "5%",
//   textAlign: "left",

//   margin: "10px auto",
//   alignItems: "stretch",
// };

// const ListItem = ({ task }) => {
//   const userInfo = useSelector((state) => state.project);
//   const [open, setOpen] = React.useState(false);
//   //console.log("props from task", task);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   // const ButtonStyles = {
//   //   width: "55px",
//   //   height: "55px",
//   //   minWidth: "30px",
//   //   minHeight: "30px",
//   //   borderRadius: "50%",
//   //   margin: "20px auto ",
//   // };
//   // const LoginButtonStyles = {
//   //   width: "55px",
//   //   height: "55px",
//   //   minWidth: "30px",
//   //   minHeight: "30px",
//   //   borderRadius: "50%",
//   //   margin: "20px auto ",
//   // };

//   return (
//     <React.Fragment>
//       <Button
//         variant="outlined"
//         // sx={LoginButtonStyles}
//         sx={{ border: "none" }}
//         onClick={handleClickOpen}
//       >
//         <Box variant="outlined" sx={ListItemStyle}>
//           <Box
//             sx={{
//               flexDirection: "row",
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "center",
//             }}
//           >
//             <Typography sx={{ marginRight: "20px" }} variant="h4">
//               {task.title}
//             </Typography>
//             {statusSelector(task.status)}
//           </Box>
//           <Typography sx={{}} variant="h6">
//             {" "}
//             {task.dateEnd}
//           </Typography>

//           <div>
//             {/*<button className="DeleteButton" >*/}
//             {/*  <DeleteIcon />*/}
//             {/*</button>*/}

//             {task.description.length > 13
//               ? `${task.description.slice(0, 20)}...`
//               : task.description}
//           </div>
//         </Box>
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Task edit"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Task name: <input type="text" placeholder="task title" />
//             <br />
//             Status :{" "}
//             <select name="pets" id="pet-select">
//               <option value="Not started">Not started</option>
//               <option value="In process">In process</option>
//               <option value="Finished">Done</option>
//             </select>
//             <br />
//             Description: <textarea rows="1" />
//             <br />
//             Start date: <input type="date" />
//             <br />
//             End date: <input type="date" />
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Save task</Button>
//           <Button onClick={handleClose}>Delete task</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// };

// export default ListItem;

// // export default function EditTask() {
// //   const userInfo = useSelector((state) => state.project);
// //   const [open, setOpen] = React.useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   const ButtonStyles = {
// //     width: "55px",
// //     height: "55px",
// //     minWidth: "30px",
// //     minHeight: "30px",
// //     borderRadius: "50%",
// //     margin: "20px auto ",
// //   };
// //   const LoginButtonStyles = {
// //     width: "55px",
// //     height: "55px",
// //     minWidth: "30px",
// //     minHeight: "30px",
// //     borderRadius: "50%",
// //     margin: "20px auto ",
// //   };

// //   return (
// //     <React.Fragment>
// //       <Button
// //         variant="outlined"
// //         sx={LoginButtonStyles}
// //         onClick={handleClickOpen}
// //       >
// //         <CloudDownloadIcon />{" "}
// //       </Button>
// //       <Dialog
// //         open={open}
// //         onClose={handleClose}
// //         aria-labelledby="alert-dialog-title"
// //         aria-describedby="alert-dialog-description"
// //       >
// //         <DialogTitle id="alert-dialog-title">{"Personal info"}</DialogTitle>
// //         <DialogContent>
// //           <DialogContentText id="alert-dialog-description">
// //             Enter project id.
// //             <br />
// //             <input type="text" placeholder="project id..." />
// //           </DialogContentText>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose}>Add project</Button>
// //         </DialogActions>
// //       </Dialog>
// //     </React.Fragment>
// //   );
// // }

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";

import statusSelector from "./statusSelector";
import { updateFullTask } from "../../rdx/features/sideFuncs";
import { deleteTask, updateTask } from "../../rdx/features/ProjectReducers";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ListItemStyle = {
  display: "flex",
  flexDirection: "column",
  border: "2px solid #42a5f5",
  padding: "15px",
  borderRadius: "5%",
  textAlign: "left",
  margin: "10px auto",
  alignItems: "stretch",
};

const ListItem = ({ task }) => {
  const { id: projectId } = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.project);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description);
  const [startDate, setStartDate] = useState(task.startDate);
  const [dateEnd, setDateEnd] = useState(task.dateEnd);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Сохраните изменения в задаче, например, обновите состояние приложения или сохраните данные в локальное хранилище.
    const newTask = {
      title: title,
      taskId: task.taskId,
      description: description,
      status: status,
      startDate: startDate,
      dateEnd: dateEnd,
    };
    dispatch(
      updateTask({
        projectId: projectId,
        taskId: task.taskId,
        newTask: newTask,
      })
    );
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(
      deleteTask({
        projectId: projectId,
        taskId: task.taskId,
      })
    );
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{ border: "none" }}
        onClick={handleClickOpen}
      >
        <Box variant="outlined" sx={ListItemStyle}>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography sx={{ marginRight: "20px" }} variant="h4">
              {task.title}
            </Typography>
            {statusSelector(task.status)}
          </Box>
          <Typography sx={{}} variant="h6">
            {task.dateEnd}
          </Typography>
          <div>
            {task.description.length > 13
              ? `${task.description.slice(0, 20)}...`
              : task.description}
          </div>
        </Box>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Task edit"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Task name:{" "}
            <input
              type="text"
              placeholder="task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            Status:{" "}
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Not started">Not started</option>
              <option value="In process">In process</option>
              <option value="Finished">Done</option>
            </select>
            <br />
            Description:{" "}
            <textarea
              rows="1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            Start date:{" "}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <br />
            End date:{" "}
            <input
              type="date"
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save task</Button>
          <Button onClick={handleDelete}>Delete task</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ListItem;
