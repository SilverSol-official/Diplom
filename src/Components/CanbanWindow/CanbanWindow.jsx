/* eslint-disable array-callback-return */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { tasks } from '../../TestData';
import uuid4 from "uuid4";
import KanbanItem from "../KanbanItem/KanbanItem";

// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const gridContainer = {
//   display: 'grid',
//   gridTemplateColumns: 'auto auto auto auto',
//   padding: '10px',
// }

const FlexBox = {
  display: 'flex',
  flexDirection: 'column',
  margin: '20px auto',
}

const ButtonStyle = {
  width: '70%',
  height: '30px',
  // border:'1px solid',
  borderRadius: '5px',
  margin: "10px auto"
}

const TaskContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const KanbanWindow = () => {
  return (
    <Box>

      <Grid container spacing={0} height="10vh" >
        <Grid item xs={4} className='SideMenu' sx={FlexBox} >
          <Typography variant='h5'>To do</Typography>
          <Button variant='contained' sx={ButtonStyle}>+</Button>
          <Box sx={TaskContainer}>
            {tasks.map((item) => {
              const key = uuid4();
              if (item.status === 'Not started') {
                return (
                  <KanbanItem key={key} task={item} />
                );
              }
            })}

          </Box>
        </Grid>
        <Grid item xs={4} className='SideMenu' sx={FlexBox} >
          <Typography variant='h5'>In progress</Typography>
          <Button variant='contained' sx={ButtonStyle}>+</Button>
          <Box sx={TaskContainer}>
            {tasks.map((item) => {
              if (item.status === 'In process')
                return (
                  <KanbanItem key={uuid4()} task={item} />
                )
            })}
          </Box>
        </Grid>
        <Grid item xs={4} className='SideMenu' sx={FlexBox} >
          <Typography variant='h5'>Done</Typography>
          <Button variant='contained' sx={ButtonStyle}>+</Button>

          <Box sx={TaskContainer}>
            {tasks.map((item) => {
              if (item.status === 'Done')
                return (
                  <KanbanItem key={uuid4()} task={item} />
                )
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default KanbanWindow;