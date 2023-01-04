import React from "react";
import "./connection.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Connection = (props) => {
  const connectionId = props.cid;
  const [loading, setLoading] = React.useState(false);
  const [connectionData, setConnectionData] = React.useState({});
  const navigate = useNavigate();

  const fetchUserProfileInfo = async (e) => {
    setLoading(true);
    await axios
      .get("http://localhost:8080/profile/" + connectionId)
      .then((response) => {
        const fetchedDataFromRoute = response.data;
        setConnectionData(fetchedDataFromRoute[0]);
        setLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  React.useEffect(() => {
    fetchUserProfileInfo();
  }, []);

  const navigateToUserProfile = () => {
    navigate("/social-feed/profile/" + connectionId);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress style={{ color: "white" }} />
      ) : (
        <div className="postTopLeft">
          <img
            onClick={navigateToUserProfile}
            className="postProfileImg"
            src={connectionData.profilePic}
            alt=""
          ></img>
          <div className="nameAnddate">
            <span className="postUsername" onClick={navigateToUserProfile}>
              {connectionData.name}
            </span>
            <span className="postDate">{connectionData.conutry}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Connection;
