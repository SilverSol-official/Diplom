import * as React from "react";
import Box from "@mui/material/Box";
import Typography from  '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import TableViewIcon from '@mui/icons-material/TableView';
import TuneIcon from '@mui/icons-material/Tune';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { amber, grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {GetDate} from "./date";
import {useState} from "react";
import ListWindow from "../ListWindow/ListWindow";
import KanbanWindow from "../CanbanWindow/CanbanWindow";
import CalandarWindow from "../CalendarWindow/CalandarWindow";

const Header = {
  display:'flex',
  flexDirection:'row',
  margin:'20px 30px',
  borderBottom:'1px solid grey',
  paddingBottom:'30px',
}

const FilterButtonsContainer = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-around',
  borderBottom:'2px solid grey',
  paddingBottom: '30px',
  paddingTop:'20px',
  width: '96%',
  margin: 'auto',
}

const FilterButton = {
  marginLeft:'40%',
}

const HeaderButton = {
  borderRadius:'50%',
  minWidth:'30px',
  minHeight:'30px',
  margin:'0 10px'
}

const MainWindow = ( ) => {

  const [fav,setFav] = useState(true);
  const [view,setView] = useState('list');

  return(
    <Box>
      <Box sx={Header}>
        <Typography variant='h4'>Project Name</Typography>
        <Box sx={{marginLeft:'65%'}}>
          <Button sx={HeaderButton} onClick={()=>setFav(!fav)}><StarIcon sx={fav?{color:amber[300]}:{color:grey[500]}}/> </Button>
          <Button sx={HeaderButton}><MoreVertIcon/></Button>
          {GetDate()}
        </Box>
      </Box>
      <Box sx={FilterButtonsContainer}>
        <Button variant='outlined' onClick={()=>setView('kanban')}><ViewKanbanIcon/> Kanban</Button>
        <Button variant='outlined' onClick={()=>setView('list')}><FormatListBulletedIcon/> List</Button>
        <Button variant='outlined' onClick={()=>setView('table')}><TableViewIcon/> Table</Button>
        <Button variant='outlined' sx={FilterButton}><TuneIcon/> Filtre</Button>
      </Box>
      <Box>
        {view=='list'?<ListWindow/>:view=='kanban'?<KanbanWindow/>:<CalandarWindow/>}
      </Box>
    </Box>
  )
}

export default MainWindow;