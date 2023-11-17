import {tasks} from '../../TestData';
import ListItem from '../ListItem/ListItem';
import Box from '@mui/material/Box';
import uuid4 from "uuid4";

const gridContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto',
padding: '10px',
}

const ListWindow = () => {
  return (
      <Box sx={gridContainer}>
        {tasks.map((item)=>{
          console.log(item);
          return(
            <ListItem key={ uuid4()} task={item}/>
          )
        })}
      </Box>
  )
}

export default ListWindow;