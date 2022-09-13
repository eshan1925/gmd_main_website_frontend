import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import FileBase64 from "react-file-base64";

const EditProfile = () => {
  var userData = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);
//   name: `${userData.name}`,
//     gender: `${userData.gender}`,
//     bio: `${userData.Bio}`,
//     city: `${userData.city}`,
//     country: `${userData.country}`,
//     dateOfBirth: `${userData.dateOfBirth}`,
//     profilePic: `${userData.profilePic}`,
  const [data, setData] = useState({
    name:userData["name"],
    gender:userData["gender"],
    Bio:userData["Bio"],
    city:userData["city"],
    country:userData["country"],
    dateOfBirth:userData["dateOfBirth"],
    profilePic:userData["profilePic"],
  });


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        "http://localhost:8080/profile/" + userData._id + "/edit-profile";
      const { data: res } = await axios.post(url, data);

      // const url2 = "http:/localhost:8080/profile/"+userData._id;
      // const data2 = await axios.get(url2).then((response)=>{
        
      //   const foundContent = response.data[0];
      //   console.log(foundContent);
      //   sessionStorage.setItem("userData",foundContent);
      // })

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
            <div className={styles.title}>Name</div>
            <input
              name="name"
              value={data.name}
              type="text"
              placeholder="Enter your Name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Gender</div>
            <input
              name="gender"
              value={data.gender}
              type="text"
              placeholder="Gender"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>City</div>
            <input
              name="city"
              value={data.city}
              type="text"
              placeholder="Enter the City"
              onChange={handleChange}
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Country</div>
            <input
              name="country"
              value={data.country}
              type="text"
              placeholder="Enter the Country"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.rowflex}>
          <div className={styles.mainInput}>
            <div className={styles.title}>Profile Pic</div>
            <FileBase64
              multiple={false}
              id="upload"
              onDone={({ base64 }) => setData({ ...data, profilePic: base64 })}
            />
          </div>
          <div className={styles.mainInput}>
            <div className={styles.title}>Date of Birth</div>
            <input
              name="dateOfBirth"
              value={data.dateOfBirth}
              type="date"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.NT}>Short Note About You!!!</div>
        <br />{" "}
        <textarea
          name="Bio"
          value={data.Bio}
          placeholder="Bio"
          onChange={handleChange}
        />
        <button className={styles.submitButton} type="submit">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
