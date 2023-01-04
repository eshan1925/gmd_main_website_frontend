import React from "react";
import styles from "./styles.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputSearchBar}
        type="text"
        id={styles.searchInput}
        placeholder="What are you looking for today?"
      />
      {/* <div id={styles.submitsearch}>
        <span>Search</span>
      </div> */}
    </div>
  );
};

export default SearchBar;
