import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const KanbanItemStyle = {
  border: '1px solid blue',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',

  borderRadius: '10px',
  margin: '10px auto'

}

const KanbanItem = ({ task }) => {
  return (

    <Box sx={KanbanItemStyle}>
      <Typography variant='h6'>{task.title}</Typography>
      <Typography variant='h7'>{task.status}</Typography>
      {task.description.length > 13 ? `${task.description.slice(0, 20)}...` : task.description}
    </Box>


  )
}

export default KanbanItem;