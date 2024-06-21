import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
export default function AlertDialog() {
  const userInfo = useSelector((state) => state.project);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
    width: "70px",
    height: "70px",
    minWidth: "30px",
    minHeight: "30px",
    borderRadius: "50%",
    margin: "20px auto ",
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={LoginButtonStyles}
        onClick={handleClickOpen}
      >
        <PersonIcon />{" "}
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
            Login: {userInfo.userName}
            <br />
            Project IDs: {userInfo.projectIds}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
