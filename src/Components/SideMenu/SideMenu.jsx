import * as React from 'react';
import Button from '@mui/material/Button';
//import Button from '@mui/material-next/Button';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {useState} from "react";

const LoginButtonStyles ={
  width: '70px',
  height: '70px',
  minWidth:'30px',
  minHeight:'30px',
  borderRadius:'50%',
  margin: '20px auto ',
}

const ButtonStyles ={
  width: '55px',
  height: '55px',
  minWidth:'30px',
  minHeight:'30px',
  borderRadius:'50%',
  margin: '20px auto ',
}

const ExitButtonStyles ={
  width: '55px',
  height: '55px',
  minWidth:'30px',
  minHeight:'30px',
  borderRadius:'50%',
  margin: '180% auto 0px',
}

const ContainerStyle={
  display:'flex',
  flexDirection:'column'
}

const SideMenu = () => {

  const [theme,setTheme] = useState('light');

  const ChangeTheme = () => {
    console.log(theme);
    if (theme == 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
    console.log(theme);
  }

  return(
      <>
        <Box sx={ContainerStyle}>
          {/*<h3>SILVER MANAGER</h3>*/}
          <Button variant="outlined"  sx={LoginButtonStyles}><PersonIcon/> </Button>
          <Button variant="outlined"  sx={ButtonStyles} onClick={()=>ChangeTheme()}>{theme=='light'?<Brightness3Icon/>:<WbSunnyIcon/>} </Button>
          <Button variant="outlined"  sx={ButtonStyles}><CalendarTodayIcon/> </Button>
          <Button variant="outlined"  sx={ButtonStyles}><ListIcon/> </Button>
          <Button variant="outlined"  sx={ButtonStyles}><SettingsIcon/> </Button>
          <Button variant="outlined"  sx={ButtonStyles}><CloudDownloadIcon/> </Button>
          <Button variant="outlined"  sx={ExitButtonStyles}><LogoutIcon/> </Button>
        </Box>
      </>
  )
}

export default SideMenu;