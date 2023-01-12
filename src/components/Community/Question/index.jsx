import React from "react";
import "./question.css";
import Comment from "./Comment";
import { format } from "timeago.js";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
const Question = (props) => {
  const [creater, setCreater] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const questionData = JSON.parse(props.questionData);
  console.log(questionData);
  //   var questionData = props.questionData;
  //   questionData = JSON.parse(questionData);

  const userId = questionData.userId;

  React.useEffect(() => {
    createrDataFetcher();
  }, [userId]);

  const createrDataFetcher = async () => {
    try {
      setLoading(true);
      const createrData = await axios.get(
        "https://getmedesignbackend.up.railway.app/profile/" + userId
      );
      const temp = createrData.data;
      setCreater(temp[0]);
      // console.log(creater);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="question">
      <div className="questionHeader">
        <div className="questionTitleAndTime">
          <div className="questionTitle">{questionData.title}</div>
          <div className="questionTime">{format(questionData.createdAt)}</div>
          {loading ? (
            <CircularProgress size="15px" style={{ color: "white" }} />
          ) : (
            <div className="questionTime">Author-: {creater.name}</div>
          )}
        </div>
        {loading ? (
          <CircularProgress size="15px" style={{ color: "white" }} />
        ) : (
          <div>
            <img
              src={creater.profilePic}
              alt=""
              className="profilePicQuestion"
            />
          </div>
        )}
      </div>
      <div className="questionDesc">{questionData.question}</div>
      <div className="likesAndComments">
        <div className="like">Like</div>
        <div className="comment">Comment</div>
      </div>

      <div className="comments">
        <Comment />
      </div>
    </div>
  );
};

export default Question;
