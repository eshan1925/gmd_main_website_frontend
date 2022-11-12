import React, { useContext, useRef, useState } from "react";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CancelIcon from "@mui/icons-material/Cancel";
import FileBase64 from "react-file-base64";
import axios from "axios";

const Share = () => {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const desc = useRef();
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: file,
    };

    try {
      await axios.post("http://localhost:8080/api/posts/", newPost);
      window.location.reload();
    } catch (error) {}
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePic} alt="" />
          <textarea
            placeholder={"What's in your mind " + user["name"] + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={file} alt="" />
            <CancelIcon
              className="shareCancelImg"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <FileBase64
                className="fileBase"
                multiple={false}
                type="file"
                accept=".png,.jpeg,.jpg"
                onDone={({ base64 }) => setFile(base64)}
              />
            </label>
            {/* <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div> */}
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
