import React from "react";
import styles from "./styles.module.css";
import MDEditor from "@uiw/react-md-editor";
import FileBase64 from "react-file-base64";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileView from "../ProfileView";

const CreateBlog = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  const userData = JSON.parse(props.userData);
  const userid = userData._id;
  const creatorName = userData.name;
  const [data, setData] = React.useState({
    creatorid: userid,
    creatorName: creatorName,
    blogTitle: "",
    image: "",
  });
  const [value, setValue] = React.useState("**Hello world!!!**");
  const handleSubmit = async (e) => {
    var today = new Date();
    data["timeOfCreation"] = today;
    data["blogContent"] = value;
    try {
      const url = "http://localhost:8080/new-blog-post";
      const { data: res } = await axios.post(url, data);
      navigate("/blogs/" + userid + "/my-blogs");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const navigateToHome = () => {
    navigate("/");
  };

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
          <div id={styles.scrollControl}>
            <div className={styles.pathAndButton}>
              <div className={styles.path_Details}>
                Home &#62; Blogs<b> &#62; Create New Blog</b>
              </div>
              <button
                onClick={handleSubmit}
                className={styles.createBlogButton}
              >
                Publish Blog ✅
              </button>
            </div>
            Blog Title-:&nbsp;&nbsp;
            <input
            className={styles.blogTitleInput}
              type="text"
              placeholder="Enter Blog title"
              value={data.blogTitle}
              onChange={(e) => setData({ ...data, blogTitle: e.target.value })}
            />
            <div className="container">
              <MDEditor value={value} onChange={setValue} />
              <MDEditor.Markdown
                source={value}
                style={{ whiteSpace: "pre-wrap" }}
              />
            </div>
            Blog Image-: &nbsp;&nbsp;
            <FileBase64
              multiple={false}
              id="upload"
              onDone={({ base64 }) => setData({ ...data, image: base64 })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;