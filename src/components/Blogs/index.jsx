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
  const [loading, setLoading] = React.useState(false);
  const [allBlogsSelected, setAllBlogsSelected] = React.useState(true);
  const [myBlogsSelected, setMyBlogsSelected] = React.useState(false);
  const navigate = useNavigate();
  const blogCategory = props.category;

  const createNewBlogHandler = () => {
    navigate("/blogs/" + userid + "/create-new-blog");
  };

  const navigateToBlogs = () => {
    setAllBlogsSelected(true);
    setMyBlogsSelected(false);
    navigate("/blogs/" + userid + "/all-blogs");
  };
  const navigateToMyBlogs = () => {
    setMyBlogsSelected(true);
    setAllBlogsSelected(false);
    navigate("/blogs/" + userid + "/my-blogs");
  };
  const navigateToFavouriteBlogs = () => {
    navigate("/blogs/" + userid + "/favourite");
  };

  React.useEffect(() => {
    getBlogs();
    console.log("Blogs page was accessed by user " + userid);
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:8080/blogs/" + userid + "/" + blogCategory)
      .then((response) => {
        const foundBlogs = response.data;
        getAllBlogs(foundBlogs);
        setLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  var getBlogsInArr = [];
  getBlogsInArr = blogs;
  var BlogsToGetRendered = [];

  if (getBlogsInArr.length === 0) {
    BlogsToGetRendered.length = 0;
    BlogsToGetRendered.push(
      <center>
        <h1>No Blogs created from the user</h1>
      </center>
    );
  } else {
    BlogsToGetRendered.length = 0;
    getBlogsInArr.forEach((data) => {
      BlogsToGetRendered.push(
        <BlogCard
          blogId={data._id}
          userId={userid}
          creatorName={data.creatorName}
          creationTime={data.timeOfCreation}
          image={data.image}
          content={data.blogContent}
          title={data.blogTitle}
        />
      );
    });
  }

  const selectedBlogCategory = {
    borderBottom: "1px solid rgba(202, 202, 202, 0.86)",
    color: "white",
  };

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
                Create a new Blog ➕
              </button>
            </div>

            <div>
              <div className={styles.blogBar}>
                <div
                  style={allBlogsSelected ? selectedBlogCategory : {}}
                  onClick={navigateToBlogs}
                  className={styles.blogSelectionMenu}
                >
                  All Blogs
                </div>
                <div
                  style={myBlogsSelected ? selectedBlogCategory : {}}
                  onClick={navigateToMyBlogs}
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
                  {BlogsToGetRendered}
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
