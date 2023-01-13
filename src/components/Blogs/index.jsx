import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import BlogCard from "./BlogCard";
import axios from "axios";
import SocialProfileView from "../SocialMediaFeed/SocialProfileView";
import UserNavbar from "../UserNavbar";
import CircularProgress from "@mui/material/CircularProgress";

const BlogsComponent = (props) => {
  const userData = JSON.parse(props.userData);
  const userid = userData._id;
  const [blogs, getAllBlogs] = React.useState("");
  const [myblogs, setAllmyBlogs] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState("1");
  const navigate = useNavigate();

  const createNewBlogHandler = () => {
    navigate("/blogs/" + userid + "/create-new-blog");
  };

  const allBlogMenuClick = () => {
    setSelectedMenu("1");
  };

  const myBlogMenuClick = () => {
    setSelectedMenu("2");
  };

  React.useEffect(() => {
    getAlltheBlogs();
    getMyBlogs();
    console.log("Blogs page was accessed by user " + userid);
  }, [userid]);

  const getAlltheBlogs = async () => {
    setLoading(true);
    await axios
      .get(
        "https://getmedesignbackend.up.railway.app/blogs/" +
          userid +
          "/all-blogs"
      )
      .then((response) => {
        const foundBlogs = response.data;
        getAllBlogs(
          foundBlogs.sort((b1, b2) => {
            return new Date(b2.timeOfCreation) - new Date(b1.timeOfCreation);
          })
        );
        setLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getMyBlogs = async () => {
    try {
      setLoading(true);
      await axios
        .get(
          "https://getmedesignbackend.up.railway.app/blogs/" +
            userid +
            "/my-blogs"
        )
        .then((response) => {
          const foundBlogs = response.data;
          setAllmyBlogs(
            foundBlogs.sort((b1, b2) => {
              return new Date(b2.timeOfCreation) - new Date(b1.timeOfCreation);
            })
          );
        })
        .catch((error) => console.error(`Error: ${error}`));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  var getBlogsInArr = [];
  getBlogsInArr = blogs;
  var BlogsToGetRendered = [];

  if (getBlogsInArr.length !== 0) {
    BlogsToGetRendered.length = 0;
    getBlogsInArr.forEach((data) => {
      BlogsToGetRendered.push(
        <BlogCard
          blogId={data._id}
          userId={data.creatorid}
          creatorName={data.creatorName}
          creationTime={data.timeOfCreation}
          image={data.image}
          content={data.blogContent}
          title={data.blogTitle}
        />
      );
    });
  } else {
    BlogsToGetRendered.length = 0;
    BlogsToGetRendered.push(
      <center>
        <h1>No Blogs found!!!</h1>
      </center>
    );
  }

  var getMyBlogsInArr = [];
  getMyBlogsInArr = myblogs;
  var myBlogsToGetRendered = [];
  if (getMyBlogsInArr.length === 0) {
    myBlogsToGetRendered.length = 0;
    myBlogsToGetRendered.push(
      <center>
        <h1>No Blogs created from the user!!!</h1>
      </center>
    );
  } else {
    myBlogsToGetRendered.length = 0;
    getMyBlogsInArr.forEach((data) => {
      myBlogsToGetRendered.push(
        <BlogCard
          blogId={data._id}
          userId={data.creatorid}
          creatorName={data.creatorName}
          creationTime={data.timeOfCreation}
          image={data.image}
          content={data.blogContent}
          title={data.blogTitle}
        />
      );
    });
  }

  return (
    <div className={styles.main_container_1}>
      <UserNavbar userInfo={userData} />
      <div className={styles.project_manager}>
        <SocialProfileView selectedMenu="6" userData={userData} />
        <div className={styles.project_view}>
          <div>
            <div className={styles.pathAndButton}>
              <div className={styles.path_Details}>
                Home <b>&#62; Blogs</b>
              </div>
              <button
                onClick={createNewBlogHandler}
                className={styles.createBlogButton}
              >
                + Create a new Blog
              </button>
            </div>

            <div>
              <div className={styles.blogBar}>
                <div
                  style={{
                    borderBottom:
                      selectedMenu === "1"
                        ? "1px solid rgba(202, 202, 202, 0.86)"
                        : "",
                    color: selectedMenu === "1" ? "white" : "",
                  }}
                  onClick={allBlogMenuClick}
                  className={styles.blogSelectionMenu}
                >
                  All Blogs
                </div>
                <div
                  style={{
                    borderBottom:
                      selectedMenu === "2"
                        ? "1px solid rgba(202, 202, 202, 0.86)"
                        : "",
                    color: selectedMenu === "1" ? "white" : "",
                  }}
                  onClick={myBlogMenuClick}
                  className={styles.blogSelectionMenu}
                >
                  My Blogs
                </div>
                {/* <div
                  style={false ? selectedBlogCategory : {}}
                  onClick={navigateToFavouriteBlogs}
                  className={styles.blogSelectionMenu}
                >
                  Marked Favourite
                </div> */}
              </div>
              {loading ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                <div className={styles.blogCardsSection}>
                  {selectedMenu === "1" && <>{BlogsToGetRendered}</>}
                  {selectedMenu === "2" && <>{myBlogsToGetRendered}</>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
