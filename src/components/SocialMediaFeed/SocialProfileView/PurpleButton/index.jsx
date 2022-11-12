import React from 'react'
import styles from "./styles.module.css";

const PurpleButton = (props) => {
    return (
        <div >
            <button onClick={props.onClick} className={styles.PurpleButton}>
                {props.title}
            </button>
        </div>
    )
}

export default PurpleButton;