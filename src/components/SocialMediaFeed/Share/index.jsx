import React, { useRef, useState } from "react";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
// import LabelIcon from "@mui/icons-material/Label";
// import RoomIcon from "@mui/icons-material/Room";
// import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CancelIcon from "@mui/icons-material/Cancel";
import FileBase64 from "react-file-base64";
import axios from "axios";

const Share = () => {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [dataUrl, setDataUrl] = useState(null);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [location, setLocation] = useState("");
  const ref = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: file,
      location:location,
    };

    try {
      await axios.post(
        "https://getmedesignbackend.up.railway.app/api/posts/",
        newPost
      );
      console.log("New post by user-: " + user._id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const openFileBase64 = () => {
    console.log("Clicked");
    ref.current.click();
  };

  const handleChangeOfFile = (event) => {
    console.log(event.target.files);
    setFile(event.target.files[0]);
    console.log(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setDataUrl(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      try {
        const url =
          "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
          latitude +
          "&longitude=" +
          longitude +
          "&localityLanguage=en";
        const data = await axios.get(url);
        setLocation(
          data.data.locality +
            "," +
            data.data.principalSubdivision +
            "," +
            data.data.countryName
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  function showPosition(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="createPostText">
          <img
            className="createPostIcon"
            src={require("../../../images/Icons/createPost.png")}
            alt=""
          />
          Create Post
        </div>
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePic} alt="" />
          <textarea
            placeholder={"What's in your mind " + user["name"] + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        {dataUrl && (
          <div className="shareImgContainer">
            <img className="shareImg" src={dataUrl} alt="" />
            <CancelIcon
              className="shareCancelImg"
              onClick={() => {
                setDataUrl(null);
                setFile(null);
              }}
            />
          </div>
        )}
        {location && <div className="locationInfo">-at {location}</div>}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <div className="postButtons">
              <div>
                <label htmlFor="file" className="shareOption">
                  <FileBase64
                    id="fileBase64"
                    className="fileBase"
                    multiple={false}
                    type="file"
                    accept=".png,.jpeg,.jpg"
                    onDone={({ base64 }) => setFile(base64)}
                    status={null}
                  />
                </label>
              </div>
              {/* <input
                
                type="file"
                name=""
                onChange={handleChangeOfFile}
                hidden
              /> */}
              {/* <div className="Feelings" onClick={openFileBase64}>
                <img
                  className="smileyIcon"
                  src={require("../../../images/Icons/photoIcon.png")}
                  alt="locationIcon"
                />
                <div>Photos</div>
              </div> */}
              <div className="Feelings">
                <img
                  className="smileyIcon"
                  src={require("../../../images/Icons/smiley.png")}
                  alt="locationIcon"
                />
                <div>Feelings</div>
              </div>
              <div onClick={getLocation} className="Location">
                <img
                  className="locationIcon"
                  src={require("../../../images/Icons/location.png")}
                  alt="locationIcon"
                />
                <div>Location</div>
              </div>
            </div>
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
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
