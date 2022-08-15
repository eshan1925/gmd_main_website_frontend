import styles from "./styles.module.css";

import React from "react";

const Blog = (props) => {
  return (
    <div className={styles.main}>
      <img src={require("../../../../images/blogImage.png")} alt="blogImage" />
      <div className={styles.blogContent}>
        <div className={styles.blogTitle}>{props.Title}</div>
        <div className={styles.content}>{props.content}</div>
        <div className={styles.date}>{props.date}</div>
      </div>
    </div>
  );
};

export default Blog;
