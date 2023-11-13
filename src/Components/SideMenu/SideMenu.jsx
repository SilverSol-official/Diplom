import * as React from 'react';
import Button from '@mui/material/Button';
//import Button from '@mui/material-next/Button';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import {useState} from "react";

const LoginButtonStyles ={
  width: '70px',
  height: '70px',
  minWidth:'30px',
  minHeight:'30px',
  borderRadius:'50%',
  margin: '20px auto ',
}

const ThemeButtonStyles ={
  width: '55px',
  height: '55px',
  minWidth:'30px',
  minHeight:'30px',
  borderRadius:'50%',
  margin: '20px auto ',
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
          <Button variant="outlined" color="secondary" sx={LoginButtonStyles}><PersonIcon/> </Button>
          <Button variant="outlined" color="secondary" sx={ThemeButtonStyles} onClick={()=>ChangeTheme()}>{theme=='light'?<Brightness3Icon/>:<WbSunnyIcon/>} </Button>
        </Box>
      </>
  )
}

export default SideMenu;