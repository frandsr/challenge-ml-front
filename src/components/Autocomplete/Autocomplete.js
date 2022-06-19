import { useState } from "react";
import styles from "./autocomplete.module.scss";

const AutoComplete = ({ suggestions }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <form className={styles.autocompleteWrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          className={styles.navInputSearch}
        />
        <button type="submit" className={styles.searchButton}>
          <div
            role="img"
            aria-label="Buscar"
            className={styles.navIconSearch}
          ></div>
        </button>
      </form>
    </>
  );
};
export default AutoComplete;
