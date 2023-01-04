//https://www.npmjs.com/package/react-insta-stories?activeTab=readme

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FileBase64 from "react-file-base64";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import "./extra.css";

export default function MaxWidthDialogForCreatingStory(props) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const [file, setFile] = React.useState(null);
  const user = JSON.parse(sessionStorage.getItem("userData"));

  const submitHandler = async (e) => {
    e.preventDefault();
    const newStory = {
      userId: user._id,
      userName: user.name,
      userImg: user.profilePic,
      img: file,
    };

    try {
      await axios.post("http://localhost:8080/api/story/", newStory);
      console.log("New story by user-: " + user._id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div id="addToStory" onClick={handleClickOpen}>
        <div className="profile">
          <img
            src={require("../../../../images/Icons/greyPlusIcon.png")}
            alt=""
          />
        </div>
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Create Your Story</DialogTitle>
        <div className="addTheStoryMenu">
          {!file && (
            <div className="shareOption">
              <FileBase64
                className="fileBase"
                multiple={false}
                type="file"
                accept=".png,.jpeg,.jpg"
                onDone={({ base64 }) => setFile(base64)}
                status={null}
              />
            </div>
          )}

          {file && (
            <div className="shareImgContainer">
              <img className="shareImg" src={file} alt="" />
              <CancelIcon
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
            </div>
          )}
        </div>
        <div className="addToStoryMenuButtons">
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
          {file && (
            <DialogActions>
              <Button onClick={submitHandler}>Add To Story</Button>
            </DialogActions>
          )}
        </div>
      </Dialog>
    </React.Fragment>
  );
}
