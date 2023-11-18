import * as React from "react";
import Box from "@mui/material/Box";
import Typography from  '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { amber } from '@mui/material/colors';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const Container = {
  display:'flex',
  flexDirection:'column',
}

const FolderLabel = {
  textAlign:'left',
  margin:'20px 0 40px 10%'
}

const AddProjectButton = {
  width:'70%',
  height:'40px',
  margin:'10px auto',
}

const FawTree = {
  width:'70%',
  margin:'40px auto 10px',

}


const Folders = () => {

  return(
      <Box sx={Container}>
        <Typography variant="h4" sx={FolderLabel}>Projects</Typography>
        <Button variant="outlined" sx={AddProjectButton}>New project</Button>
        <Button variant="outlined" sx={AddProjectButton}>New task</Button>
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<StarIcon sx={{color:amber[300]}}/>}
            defaultExpandIcon={<StarIcon sx={{color:amber[300]}}/>}
            sx={FawTree}
        >
          <TreeItem nodeId="1" label="Favourite projects">
            {/*//Make for cycle to generate list of projects*/}
            <TreeItem nodeId="2" label="Calendar" defaultIcon/>
          </TreeItem>
        </TreeView>

        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={FawTree}
        >
          <TreeItem nodeId="1" label="All projects">
            {/*//Make for cycle to generate list of projects*/}
            <TreeItem nodeId="2" label="Calendar" defaultIcon/>
          </TreeItem>
        </TreeView>
      </Box>
  )
}

export default Folders;