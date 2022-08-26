import styles from "./styles.module.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
  const userId = props.userId;
  const navigate = useNavigate();
  const blogId = props.blogId;
  const navigateToSelectedBlog = () => {
    navigate("/blogs/" + userId + "/all-blogs/" + blogId);
  };

  return (
    <div onClick={navigateToSelectedBlog} className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <img
            src={props.image}
            alt="card__image"
            className={styles.card__image}
            width="600"
          />
        </div>
        <div className={styles.card__body}>
          <h4>{props.title}</h4>
          <p>
            <ReactMarkdown>{props.content}</ReactMarkdown>
          </p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className={styles.user__image}
            />
            <div className={styles.user__info}>
              <div>{props.creatorName}</div>
              <div className={styles.position}>{props.creationTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
