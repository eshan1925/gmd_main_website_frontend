import React from "react";
import styles from "./styles.module.css";

const Groups = () => {
  return (
    <div className={styles.groupsMenu}>
      <div className={styles.headingOfGroups}>Groups</div>
      <div className={styles.subMenus}>
        <div className={styles.sideLine}>Trending</div>
        <div className={styles.sideLine}>Newest</div>
        <div>Popular</div>
      </div>

      <div className={styles.groups}>
        <div className={styles.groupInfo}>
          <img
            className={styles.imagePic}
            src={require("../../../images/beardBoy.png")}
            alt=""
          />
          <div className={styles.title}>
            <div>UI/UX</div>
            <div className={styles.numberOfMembers}>1.3k Members</div>
          </div>
        </div>
        <div className={styles.groupInfo}>
          <img
            className={styles.imagePic}
            src={require("../../../images/beardBoy.png")}
            alt=""
          />
          <div className={styles.title}>
            <div>UI/UX</div>
            <div className={styles.numberOfMembers}>1.3k Members</div>
          </div>
        </div>
        <div className={styles.groupInfo}>
          <img
            className={styles.imagePic}
            src={require("../../../images/beardBoy.png")}
            alt=""
          />
          <div className={styles.title}>
            <div>UI/UX</div>
            <div className={styles.numberOfMembers}>1.3k Members</div>
          </div>
        </div>
        <div className={styles.groupInfo}>
          <img
            className={styles.imagePic}
            src={require("../../../images/beardBoy.png")}
            alt=""
          />
          <div className={styles.title}>
            <div>UI/UX</div>
            <div className={styles.numberOfMembers}>1.3k Members</div>
          </div>
        </div>
        <div className={styles.groupInfo}>
          <img
            className={styles.imagePic}
            src={require("../../../images/beardBoy.png")}
            alt=""
          />
          <div className={styles.title}>
            <div>UI/UX</div>
            <div className={styles.numberOfMembers}>1.3k Members</div>
          </div>
        </div>
        <div className={styles.groupInfo}>
          <img
            className={styles.imagePic}
            src={require("../../../images/beardBoy.png")}
            alt=""
          />
          <div className={styles.title}>
            <div>UI/UX</div>
            <div className={styles.numberOfMembers}>1.3k Members</div>
          </div>
        </div>
        <div className={styles.groupInfo}>
          <img
            className={styles.imagePic}
            src={require("../../../images/beardBoy.png")}
            alt=""
          />
          <div className={styles.title}>
            <div>UI/UX</div>
            <div className={styles.numberOfMembers}>1.3k Members</div>
          </div>
        </div>
        <div className={styles.groupInfo}>
          <img
            className={styles.imagePic}
            src={require("../../../images/beardBoy.png")}
            alt=""
          />
          <div className={styles.title}>
            <div>UI/UX</div>
            <div className={styles.numberOfMembers}>1.3k Members</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
