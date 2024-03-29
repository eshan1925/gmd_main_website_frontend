import React from "react";
import styles from "./styles.module.css";
import MDEditor from "@uiw/react-md-editor";
import FileBase64 from "react-file-base64";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SocialProfileView from "../../SocialMediaFeed/SocialProfileView";
import UserNavbar from "../../UserNavbar";
import CircularProgress from "@mui/material/CircularProgress";

const CreateBlog = (props) => {
  const userData = JSON.parse(props.userData);
  const userid = userData._id;
  const creatorName = userData.name;
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    creatorid: userid,
    creatorName: creatorName,
    blogTitle: "",
    image:
      "https://res.cloudinary.com/open-box-it-services/image/upload/v1672339224/GMD/noCover_nqkacb.png",
  });
  const [value, setValue] = React.useState("**Hello world!!!**");
  const handleSubmit = async (e) => {
    setLoading(true);
    var today = new Date();
    data["timeOfCreation"] = today;
    data["blogContent"] = value;
    try {
      const url = "https://getmedesignbackend.up.railway.app/new-blog-post";
      const { data: res } = await axios.post(url, data);
      console.log(
        "Create Blogs page was accessed by user and a new blog was created, userId " +
          userid
      );
      navigate("/blogs/" + userid);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  return (
    <div className={styles.main_container}>
      <UserNavbar userInfo={userData} />
      <div className={styles.project_manager}>
        <SocialProfileView selectedMenu="6" userData={userData} />
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
                {loading ? (
                  <CircularProgress style={{ color: "white" }} />
                ) : (
                  "Publish Blog ✅"
                )}
              </button>
            </div>
            <div className={styles.titleHeading}>
              Title
              <br />
              <input
                className={styles.blogTitleInput}
                type="text"
                placeholder="< Blog Title Goes Here >"
                value={data.blogTitle}
                onChange={(e) =>
                  setData({ ...data, blogTitle: e.target.value })
                }
              />
              <div className={styles.wrapper}>
              <MDEditor
                id={styles.container}
                value={value}
                onChange={setValue}
              />
              </div>
              {/* <MDEditor.Markdown
                id={styles.container}
                source={value}
                style={{ whiteSpace: "pre-wrap" }}
              /> */}
            </div>
            <div className={styles.blogImageInput}>
              Blog Representation Image-: &nbsp;&nbsp;
              <label htmlFor="file" className={styles.blogImageUploadButton}>
                <FileBase64
                  multiple={false}
                  id="upload"
                  onDone={({ base64 }) => setData({ ...data, image: base64 })}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
