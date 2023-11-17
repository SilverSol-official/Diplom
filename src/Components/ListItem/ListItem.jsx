import * as react from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';



import statusSelector from "./statusSelector";
const ListItemStyle ={
  display:'flex',
  flexDirection:'column',

  border:'2px solid #42a5f5',
  padding:'15px',
  borderRadius:'5%',
  textAlign:'left',

  margin:'10px auto',
  alignItems:'stretch',
};

const ListItem = ({task}) => {
  console.log(task,'from item')
  return(
      <Box variant="outlined" sx={ListItemStyle}>
        <Box sx={{flexDirection: 'row', display:'flex',justifyContent:'space-around',alignItems:'center',}}>
          <Typography sx={{marginRight:'20px'}} variant='h4'>{task.title}</Typography>
          {statusSelector(task.status)}
        </Box>
        <Typography sx={{}} variant='h6'> {task.dateEnd}</Typography>

        <div>
          {/*<button className="DeleteButton" >*/}
          {/*  <DeleteIcon />*/}
          {/*</button>*/}

          {task.description.length>13?`${task.description.slice(0,20)}...`:task.description}
        </div>
      </Box>
  )
}

export default ListItem;