import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SideMenu from "../SideMenu/SideMenu";
import Folders from "../Folders/Folders";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MainPage = () => {

  return(
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}  height="100vh" >
          <Grid item xs={1} className='SideMenu'  >
            <Item  sx={{height:'100%'}}>
              <SideMenu/>
            </Item>
          </Grid>
          <Grid item xs={2} className='FolderMenu'>
          <Item sx={{height:'100%'}}>
            <Folders/>
          </Item>
        </Grid>
          <Grid item xs={9} className='MainWindow'>
            <Item sx={{height:'100%'}}>Main window</Item>
          </Grid>

        </Grid>
      </Box>
  )
}

export default MainPage;