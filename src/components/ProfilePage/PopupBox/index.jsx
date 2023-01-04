import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.css";
import { DialogActions } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other} className={styles.mainNav}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
          id={styles.buttonProp}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className={styles.editProfile}
        variant="outlined"
        onClick={handleClickOpen}
      >
        <img
          className={styles.editProfile}
          src={require("../../../images/Icons/pencil.png")}
          alt="editProfile"
        />
      </div>

      <BootstrapDialog
        onClose={handleClose}
        open={open}
        fullWidth={true}
        maxWidth="lg"
      >
        <BootstrapDialogTitle onClose={handleClose}>
          Edit Profile Window
        </BootstrapDialogTitle>
        <DialogContent className={styles.color} dividers>
          {children}
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Create
          </Button> */}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
