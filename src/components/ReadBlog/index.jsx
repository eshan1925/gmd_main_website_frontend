import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import ReactMarkdown from 'react-markdown'
import ProfileView from "../ProfileView";
import MDEditor from "@uiw/react-md-editor";

const ReadBlog = (props) => {
  const navigate = useNavigate();

  var a = window.location.pathname;
  var b = a.split("/");
  var c = b[b.length - 1];
  const userData = JSON.parse(props.userData);
  const userid = userData._id;
  const [blogData, setBlogData] = React.useState("");
  var category = props.category;
  const getBlogData = async () => {
    await axios
      .get("http://localhost:8080/blogs/" + userid + "/"+category+"/" + c)
      .then((response) => {
        const foundContent = response.data[0];
        setBlogData(foundContent);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  React.useEffect(() => {
    getBlogData();
  });

  const navigateToLogin = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  var creationDate = new Date(blogData["timeOfCreation"]);
  creationDate = creationDate.toDateString();

  const readBlogStyle = {
    whiteSpace:"pre-wrap",
    fontFamily: "Product Sans",
    backgroundColor:"transparent"
  }
  return (
    <div className={styles.main_container}>
    <nav className={styles.navbar}>
        <div>
          <img
            className={styles.logo}
            onClick={navigateToHome}
            src={require("../../images/gmdLogo.png")}
            alt="logo"
          />
        </div>
        <div>
          <button onClick={navigateToLogin} className={styles.logOut}>
            LogOut
          </button>
        </div>
      </nav>
      <div className={styles.project_manager}>
      <ProfileView userData={userData} />
        <div className={styles.project_view}>
          <div>
            <div className={styles.pathAndButton}>
              <div className={styles.path_Details}>
                Home &#62; Blogs <b>&#62; Read Blog...</b>
              </div>
            </div>
            <div id={styles.scrollControl}>
              <div className={styles.blogTitle}>{blogData["blogTitle"]}</div>
              {/* <div className={styles.image}>
                <img src={blogData["image"]} alt={blogData["blogTitle"]} />
              </div> */}
              <div className={styles.blogContent}>
              <MDEditor.Markdown
              source={blogData["blogContent"]}
              style={readBlogStyle}
              />
                {/* <ReactMarkdown>
                {blogData["blogContent"]}
                </ReactMarkdown> */}
              </div>

              <div className={styles.creatorName}>
                Created By-: {blogData["creatorName"]}
              </div>
              <div className={styles.creationTime}>
              Created On -: {creationDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;