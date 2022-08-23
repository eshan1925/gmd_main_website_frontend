import React from 'react'
import styles from "./styles.module.css";

const InputComponent = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>{props.title}</div>
            <input type={props.inputType} placeholder={props.placeholder} />
        </div>
    )
}

export default InputComponent