import React from "react";
import "./question.css";
import Comment from "./Comment";
const Question = (props) => {
//   var questionData = props.questionData;
//   questionData = JSON.parse(questionData);
  return (
    <div className="question">
      <div className="questionHeader">
        <div className="questionTitleAndTime">
          <div className="questionTitle">What is Design Principle?</div>
          <div className="questionTime">34 Minutes Ago</div>
        </div>
        <div>
          <img
            src={require("../../../images/beardBoy.png")}
            alt=""
            className="profilePicQuestion"
          />
        </div>
      </div>
      <div className="questionDesc">
        Lorem kjcdsnf isdof noomosmdomsodmfon cjoifnv uninifjnv nf inijn
        dofhisninf vihvihi vhisin invini nrsivnifnijxn 9vnwidn ijsnvibni
        vijsnvonijsuv eriunv 9undsiv nsijn vij nsijvn izb inrdijvn
        ijsviuehiugfhreis ovnfihsginsjxnvieb ih iif nijfnijs viwfin
        iisbngipebfpivnkxn vi9uwhripjf nosv hojsngoj htewhjdfhijpshnviph9u
        pofnojsncgih iuipjvn idh iuzhi
      </div>
      <div className="likesAndComments">
        <div className="like">Like</div>
        <div className="comment">Comment</div>
      </div>

      <div className="comments">
      <Comment />
      <Comment />
      <Comment />
      </div>
    </div>
  );
};

export default Question;
