import React from "react";
import axios from "axios";
import styles from "./styles.module.css";
import ProfileView from "../../ProfileView";
import MDEditor from "@uiw/react-md-editor";
import UserNavbar from "../../UserNavbar";
import CircularProgress from "@mui/material/CircularProgress";

const ReadBlog = (props) => {
  const [loading, setLoading] = React.useState(false);
  var a = window.location.pathname;
  var b = a.split("/");
  var c = b[b.length - 1];
  const userData = JSON.parse(props.userData);
  const userid = userData._id;
  const [blogData, setBlogData] = React.useState("");
  var category = props.category;
  const getBlogData = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:8080/blogs/" + userid + "/" + category + "/" + c)
      .then((response) => {
        const foundContent = response.data[0];
        setBlogData(foundContent);
        console.log("User-:" + userid + " read a blog!!!");
      })
      .catch((error) => console.error(`Error: ${error}`))
      .finally(setLoading(false));
  };
  React.useEffect(() => {
    getBlogData();
  }, []);

  var creationDate = new Date(blogData["timeOfCreation"]);
  creationDate = creationDate.toDateString();

  const readBlogStyle = {
    whiteSpace: "pre-wrap",
    fontFamily: "Product Sans",
    backgroundColor: "transparent",
  };
  return (
    <div className={styles.main_container}>
      <UserNavbar userInfo={userData} />
      <div className={styles.project_manager}>
        <ProfileView userData={userData} />
        <div className={styles.project_view}>
          <div>
            <div className={styles.pathAndButton}>
              <div className={styles.path_Details}>
                Home &#62; Blogs <b>&#62; Read Blog...</b>
              </div>
            </div>
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              <div>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
