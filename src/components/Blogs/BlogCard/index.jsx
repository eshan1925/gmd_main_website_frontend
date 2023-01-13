import styles from "./styles.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const BlogCard = (props) => {
  const userId = props.userId;
  const navigate = useNavigate();
  const blogId = props.blogId;
  const [loading, setLoading] = React.useState(false);
  const navigateToSelectedBlog = () => {
    navigate("/blogs/" + userId + "/" + blogId);
  };

  const [writer, setWriterData] = React.useState("");

  const getDataOfWriter = async () => {
    try {
      setLoading(true);
      await axios
        .get("https://getmedesignbackend.up.railway.app/profile/" + props.userId)
        .then((response) => {
          const foundDetails = response.data;
          setWriterData(foundDetails[0]);
        });
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getDataOfWriter();
  }, [props.userId]);

  var dateOfCreation = new Date(props.creationTime);
  dateOfCreation = dateOfCreation.toISOString();
  dateOfCreation = dateOfCreation.substr(0, 10);

  return (
    <div onClick={navigateToSelectedBlog} className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <img
            src={props.image}
            alt="card__image"
            className={styles.card__image}
            width="260px"
            height="200px"
          />
        </div>
        <div className={styles.card__body}>
          <h4>{props.title}</h4>
          {/* <p>
            <MDEditor.Markdown source={blogContentsSmall} />
          </p> */}
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            {loading ? (
              <CircularProgress size="15px" style={{ color: "#3a3a3a" }} />
            ) : (
              <img
                src={writer.profilePic}
                alt="user__image"
                className={styles.user__image}
              />
            )}
            <div className={styles.user__info}>
              <div>{props.creatorName}</div>
              <div className={styles.position}>{dateOfCreation}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
