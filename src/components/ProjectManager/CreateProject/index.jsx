import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "@mui/material";
import axios from "axios";

const CreateProject = (props) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    dueDate: "",
    tasks: "",
    tags: "",
    location: "",
    langauge: "",
    attachments: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      data.creatorOfProject = props.userId;
      const url = "https://getmedesignbackend.up.railway.app/createproject";
      const { data: res } = await axios.post(url, data);
      console.log(
        "User-:" +
          props.userid +
          " accessed the create new project page and created a new project."
      );
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div id={styles.scrollControl} className={styles.main}>
      <form onSubmit={onSubmit}>
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Name of the Project</div>
            <input
              className={styles.inputt}
              name="title"
              value={data.title}
              type="text"
              placeholder="Name of the group"
              onChange={handleChange}
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Categories of the Project</div>
            <input
              className={styles.inputt}
              name="tags"
              value={data.tags}
              type="text"
              placeholder="Tags of the project"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Location</div>
            <input
              className={styles.inputt}
              name="location"
              value={data.location}
              type="text"
              placeholder="Location"
              onChange={handleChange}
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Language</div>
            <input
              className={styles.inputt}
              name="language"
              value={data.language}
              type="text"
              placeholder="Language"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Attachments</div>
            <input
              className={styles.inputt}
              name="attachments"
              value={data.attachments}
              type="file"
              placeholder="Upload Attachments"
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Due Date</div>
            <input
              className={styles.inputt}
              name="dueDate"
              value={data.dueDate}
              type="date"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.NT}>Project Description</div>
        <br />{" "}
        <textarea
          name="description"
          value={data.description}
          placeholder="Describe your Project"
          onChange={handleChange}
        />
        <input
          className={styles.inputt}
          type="hidden"
          name="creatorOfProject"
          value={props.userId}
        />
        <button className={styles.submitButton} type="submit">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
