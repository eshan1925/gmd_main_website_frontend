import React from "react";
import "./connections.css";
import Connection from "./Connection";

const Connections = (props) => {
  const connectionIds = props.connectionIds;


  var getPCInArr = [];
  getPCInArr = connectionIds;
  var connectionsInfoToGetRendered = [];

  if (getPCInArr.length === 0) {
    connectionsInfoToGetRendered.length = 0;
    connectionsInfoToGetRendered.push(
      <center>
        <h1>No Connections!!</h1>
      </center>
    );
  } else {
    connectionsInfoToGetRendered.length = 0;
    getPCInArr.forEach((data) => {
        if(connectionsInfoToGetRendered.length<8){
            connectionsInfoToGetRendered.push(<Connection cid={data} />);
        }
    });
  }

  return (
    <div className="mainConnectionsColumn">
      <div className="columnHeading">Connections</div>
      <div className="category">Newest</div>
      <div className="connectionsToBeRendered">
        {connectionsInfoToGetRendered}
      </div>
    </div>  
  );
};

export default Connections;
