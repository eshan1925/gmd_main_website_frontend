import styles from "./styles.module.css";

import React from 'react'

const ProfileButton = (props) => {
  return (
    <>
        <button className={styles.buttonn}>
            <div className={styles.buttonName}>
            {props.name}
            </div>
        </button>
    </>
  )
}

export default ProfileButton;