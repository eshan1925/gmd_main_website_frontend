import React, { useState } from "react";
import "./communitynavbarAndFeed.css";
import Question from "../Question";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const CommunityNavBarAndFeed = () => {
  const userData = sessionStorage.getItem("userData");
  const userId = JSON.parse(userData)._id;
  const [selectedMenu, setSelectedMenu] = useState("1");
  const [questions, setQuestions] = useState([]);
  const [myQuestions, setMyQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    getAllQuestions();
    getAllMyQuestions();
  }, []);

  const HomeMenuClick = () => {
    setSelectedMenu("1");
  };

  const ExploreMenuClick = () => {
    toast("Coming Soon!!!");
    // setSelectedMenu("2");
  };

  const MyTopicsMenuClick = () => {
    setSelectedMenu("3");
  };

  const MyAnswersMenuClick = () => {
    toast("Coming Soon!!!");
    // setSelectedMenu("4");
  };

  const getAllQuestions = async () => {
    try {
      setLoading(true);
      const dataFromDB = await axios.get(
        "https://getmedesignbackend.up.railway.app/community-forum/get-all-activities"
      );

      const questionsFromDB = dataFromDB.data;
      setQuestions(
        questionsFromDB.sort((q1, q2) => {
          return new Date(q2.createdAt) - new Date(q1.createdAt);
        })
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllMyQuestions = async () => {
    try {
      setLoading(true);
      const dataFromDB = await axios.get(
        "https://getmedesignbackend.up.railway.app/community-forum/get-user-activities/" +
          userId
      );

      const questionsFromDB = dataFromDB.data;
      setMyQuestions(
        questionsFromDB.sort((q1, q2) => {
          return new Date(q2.createdAt) - new Date(q1.createdAt);
        })
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  var getQuestionInArr = [];
  getQuestionInArr = questions;
  var questionsToGetRendered = [];

  if (getQuestionInArr.length === 0) {
    questionsToGetRendered.length = 0;
    questionsToGetRendered.push(
      <center>
        <h3>No questions available!!!</h3>
      </center>
    );
  } else {
    questionsToGetRendered.length = 0;
    getQuestionInArr.forEach((data) => {
      questionsToGetRendered.push(
        <Question questionData={JSON.stringify(data)} />
      );
    });
  }

  var getMyQuestionInArr = [];
  getMyQuestionInArr = myQuestions;
  var myQuestionsToGetRendered = [];

  if (getMyQuestionInArr.length === 0) {
    myQuestionsToGetRendered.length = 0;
    myQuestionsToGetRendered.push(
      <center>
        <h3>No questions created by you!!!</h3>
      </center>
    );
  } else {
    myQuestionsToGetRendered.length = 0;
    getMyQuestionInArr.forEach((data) => {
      myQuestionsToGetRendered.push(
        <Question questionData={JSON.stringify(data)} />
      );
    });
  }

  return (
    <div className="community">
      <div className="cnavbar">
        <div className="forumHeading">Forum</div>
        <div className="menuForSelection">
          <div
            style={{
              backgroundColor: selectedMenu === "1" ? "#3a3a3a" : "transparent",
              border:
                selectedMenu === "1" ? "1px solid rgb(113, 116, 116)" : "none",
            }}
            onClick={HomeMenuClick}
            className="menu-heading"
          >
            <img
              className="menu-icon"
              src={require("../../../images/Icons/home.png")}
              alt="icon"
            />
            Home
          </div>
          <div
            style={{
              backgroundColor: selectedMenu === "2" ? "#3a3a3a" : "transparent",
              border:
                selectedMenu === "2" ? "1px solid rgb(113, 116, 116)" : "none",
            }}
            onClick={ExploreMenuClick}
            className="menu-heading"
          >
            <img
              className="menu-icon"
              src={require("../../../images/Icons/bulb.png")}
              alt="icon"
            />
            Explore Topics
          </div>
          <div
            style={{
              backgroundColor: selectedMenu === "3" ? "#3a3a3a" : "transparent",
              border:
                selectedMenu === "3" ? "1px solid rgb(113, 116, 116)" : "none",
            }}
            onClick={MyTopicsMenuClick}
            className="menu-heading"
          >
            <img
              className="menu-icon"
              src={require("../../../images/Icons/project.png")}
              alt="icon"
            />
            My Topics
          </div>
          <div
            style={{
              backgroundColor: selectedMenu === "4" ? "#3a3a3a" : "transparent",
              border:
                selectedMenu === "4" ? "1px solid rgb(113, 116, 116)" : "none",
            }}
            onClick={MyAnswersMenuClick}
            className="menu-heading"
          >
            <img
              className="menu-icon"
              src={require("../../../images/Icons/openBook.png")}
              alt="icon"
            />
            My Answers
          </div>
        </div>
      </div>
      {loading ? (
        <CircularProgress style={{ color: "white" }} />
      ) : (
        <div className="cfeed">
          {selectedMenu === "1" && <div>{questionsToGetRendered}</div>}
          {/* {selectedMenu === "2" && <div>Explore</div>} */}
          {selectedMenu === "3" && <div>{myQuestionsToGetRendered}</div>}
          {/* {selectedMenu === "4" && <div>My Answers</div>} */}
        </div>
      )}
      <ToastContainer
        // position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        type="error"
      />
    </div>
  );
};

export default CommunityNavBarAndFeed;
