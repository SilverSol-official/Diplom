import * as React from "react";
import Box from "@mui/material/Box";
import Typography from  '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { amber, grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {GetDate} from "./date";
import {useState} from "react";

const Header = {
  display:'flex',
  flexDirection:'row',
  margin:'20px 30px',
  borderBottom:'1px solid grey',
  paddingBottom:'30px',
}

const HeaderButton = {
  borderRadius:'50%',
  minWidth:'30px',
  minHeight:'30px',
  margin:'0 10px'
}

const MainWindow = ( ) => {

  const [fav,setFav] = useState(true);


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
    </Box>
  )
}

export default MainWindow;