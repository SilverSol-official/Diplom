// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { tasks } from "../../TestData";
// import uuid4 from "uuid4";
// import KanbanItem from "../KanbanItem/KanbanItem";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// // const gridContainer = {
// //   display: 'grid',
// //   gridTemplateColumns: 'auto auto auto auto',
// //   padding: '10px',
// // }

// const FlexBox = {
//   display: "flex",
//   flexDirection: "column",
//   margin: "20px auto",
// };

// const ButtonStyle = {
//   width: "70%",
//   height: "30px",
//   // border:'1px solid',
//   borderRadius: "5px",
//   margin: "10px auto",
// };

// const TaskContainer = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   border: "2px dashed blue",
//   width: "96%",
//   margin: "10px 2%",
//   borderRadius: "20px",
//   maxHeight: "560px", // Set a fixed height for the container
//   overflowY: "auto",
// };

// const kanbanData = {
//   NotStarted: {
//     id: "notStarted",
//     title: "Not started",
//     items: tasks.filter((task) => task.status === "Not started"),
//   },
//   InProcess: {
//     id: "InProcess",
//     title: "In progress",
//     items: tasks.filter((task) => task.status === "In progress"),
//   },
//   Done: {
//     id: "Done",
//     title: "Done",
//     items: tasks.filter((task) => task.status === "Done"),
//   },
// };

// const KanbanWindow = () => {
//   const onDragEnd = (result) => {
//     // Обработка события завершения перетаскивания
//     // Обновите ваш стейт или выполните другие необходимые действия
//     // console.log(result.droppableId);
//     if (result.destination === null) {
//       tasks.splice(result.draggableId - 1, 1);
//     } else
//       tasks[result.draggableId - 1].status = result.destination.droppableId;

//     console.log(result);
//   };

//   return (
//     <Box>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Grid container spacing={0} height="10vh">
//           <Grid item xs={4} className="" sx={FlexBox}>
//             <Typography variant="h5">To do</Typography>
//             <Button variant="contained" sx={ButtonStyle}>
//               +
//             </Button>
//             <Droppable droppableId="Not started" type="TASK">
//               {(provided) => (
//                 <Box
//                   sx={TaskContainer}
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {tasks.map((item, index) => {
//                     // const key = uuid4();
//                     if (item.status === "Not started") {
//                       return (
//                         <Draggable
//                           key={item.taskId}
//                           draggableId={item.taskId}
//                           index={index}
//                         >
//                           {(provided) => (
//                             <div
//                               className="task"
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                             >
//                               <KanbanItem
//                                 key={item.taskId}
//                                 task={item}
//                                 index={index}
//                               />
//                             </div>
//                           )}
//                         </Draggable>
//                       );
//                     }
//                   })}

//                   {provided.placeholder}
//                 </Box>
//               )}
//             </Droppable>
//           </Grid>
//           <Grid item xs={4} className="" sx={FlexBox}>
//             <Typography variant="h5">In progress</Typography>
//             <Button variant="contained" sx={ButtonStyle}>
//               +
//             </Button>
//             {/* <Box sx={TaskContainer}>
//               {tasks.map((item) => {
//                 if (item.status === 'In process')
//                   return (
//                     <KanbanItem key={uuid4()} task={item} />
//                   )
//               })}
//             </Box> */}
//             <Droppable droppableId="In process" type="TASK">
//               {(provided) => (
//                 <Box
//                   sx={TaskContainer}
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {tasks.map((item, index) => {
//                     // const key = uuid4();
//                     if (item.status === "In process") {
//                       return (
//                         <Draggable
//                           key={item.taskId}
//                           draggableId={item.taskId}
//                           index={index}
//                         >
//                           {(provided) => (
//                             <div
//                               className="task"
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                             >
//                               <KanbanItem
//                                 key={item.taskId}
//                                 task={item}
//                                 index={index}
//                               />
//                             </div>
//                           )}
//                         </Draggable>
//                       );
//                     }
//                   })}

//                   {provided.placeholder}
//                 </Box>
//               )}
//             </Droppable>
//           </Grid>
//           <Grid item xs={4} className="" sx={FlexBox}>
//             <Typography variant="h5">Done</Typography>
//             <Button variant="contained" sx={ButtonStyle}>
//               +
//             </Button>

//             {/* <Box sx={TaskContainer}>
//               {tasks.map((item) => {
//                 if (item.status === 'Done')
//                   return (
//                     <KanbanItem key={uuid4()} task={item} />
//                   )
//               })}
//             </Box> */}
//             <Droppable droppableId="Done" type="TASK">
//               {(provided) => (
//                 <Box
//                   sx={TaskContainer}
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {tasks.map((item, index) => {
//                     // const key = uuid4();
//                     if (item.status === "Done") {
//                       return (
//                         <Draggable
//                           key={item.taskId}
//                           draggableId={item.taskId}
//                           index={index}
//                         >
//                           {(provided) => (
//                             <div
//                               className="task"
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                             >
//                               <KanbanItem
//                                 key={item.taskId}
//                                 task={item}
//                                 index={index}
//                               />
//                             </div>
//                           )}
//                         </Draggable>
//                       );
//                     }
//                   })}

//                   {provided.placeholder}
//                 </Box>
//               )}
//             </Droppable>
//           </Grid>
//         </Grid>
//       </DragDropContext>
//     </Box>
//   );
// };

// export default KanbanWindow;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import KanbanItem from "../KanbanItem/KanbanItem";
import { useDispatch } from "react-redux";
import { kanbanStatusUpdate } from "../../rdx/features/ProjectReducers";

const FlexBox = {
  display: "flex",
  flexDirection: "column",
  margin: "20px auto",
};

const ButtonStyle = {
  width: "70%",
  height: "30px",
  borderRadius: "5px",
  margin: "10px auto",
};

const TaskContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "2px dashed blue",
  width: "96%",
  margin: "10px 2%",
  borderRadius: "20px",
  maxHeight: "560px", // Set a fixed height for the container
  overflowY: "auto",
};

const KanbanWindow = () => {
  const { id: projectId } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) =>
    state.project.projects.find((project) => project.projectId === projectId)
  );
  const tasks = project ? project.tasks : [];

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    // Обновите стейт или выполните другие необходимые действия
    const updatedTasks = tasks.map((task) =>
      task.taskId === result.draggableId
        ? { ...task, status: result.destination.droppableId }
        : task
    );
    const { draggableId, destination } = result;
    dispatch(
      kanbanStatusUpdate({
        projectId,
        taskId: draggableId,
        newStatus: destination.droppableId,
      })
    );
    // Здесь вы можете обновить ваш Redux store или вызвать действие
    // Например: dispatch(updateTasks(updatedTasks));
  };

  const filterTasksByStatus = (status) =>
    tasks.filter((task) => task.status === status);

  return (
    <Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={0} height="10vh">
          {["Not started", "In process", "Done"].map((status) => (
            <Grid item xs={4} sx={FlexBox} key={status}>
              <Typography variant="h5">
                {status.replace(/^\w/, (c) => c.toUpperCase())}
              </Typography>
              <Button variant="contained" sx={ButtonStyle}>
                +
              </Button>
              <Droppable droppableId={status} type="TASK">
                {(provided) => (
                  <Box
                    sx={TaskContainer}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {filterTasksByStatus(status).map((item, index) => (
                      <Draggable
                        key={item.taskId}
                        draggableId={item.taskId}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="task"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <KanbanItem
                              key={item.taskId}
                              task={item}
                              index={index}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
};

export default KanbanWindow;
