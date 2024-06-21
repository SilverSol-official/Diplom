import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DialogTitle from "@mui/material/DialogTitle";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProject } from "../../rdx/features/ProjectReducers";
export default function AddProject() {
  const userInfo = useSelector((state) => state.project);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(addProject({ id: id }));
    setOpen(false);
  };

  const ButtonStyles = {
    width: "55px",
    height: "55px",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: "50%",
    margin: "20px auto ",
  };
  const LoginButtonStyles = {
    width: "55px",
    height: "55px",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: "50%",
    margin: "20px auto ",
  };

  const handleIdCahnge = (event) => {
    setId(event.target.value);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={LoginButtonStyles}
        onClick={handleClickOpen}
      >
        <CloudDownloadIcon />{" "}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Personal info"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Enter project id.
            <br />
            <input
              type="text"
              placeholder="project id..."
              value={id}
              onChange={(event) => handleIdCahnge(event)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Add project</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
