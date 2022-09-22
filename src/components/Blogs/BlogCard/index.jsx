import styles from "./styles.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogCard = (props) => {
  const userId = props.userId;
  const navigate = useNavigate();
  const blogId = props.blogId;
  const navigateToSelectedBlog = () => {
    navigate("/blogs/" + userId + "/all-blogs/" + blogId);
  };

  const [writer, setWriterData] = React.useState("");

  const getDataOfWriter = async () => {
    await axios
      .get("http://54.165.16.58:8080/profile/" + props.userId)
      .then((response) => {
        const foundDetails = response.data;
        setWriterData(foundDetails[0]);
      });
  };

  React.useEffect(() => {
    getDataOfWriter();
  });

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
            <img
              src={writer.profilePic}
              alt="user__image"
              className={styles.user__image}
            />
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
