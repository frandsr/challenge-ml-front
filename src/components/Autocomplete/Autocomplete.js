import React, { useEffect, useRef, useState } from "react";
import styles from "./autocomplete.module.scss";

const AutoComplete = ({ suggestions }) => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const searchBoxRef = useRef();

  const handleInputOnChange = (e) => {
    setSearchBoxValue(e.target.value);
    console.log(searchBoxValue);
  }  

   const handleInputOnKeyDown = (e) => {
     console.log(e.keyCode);
     if (e.keyCode === (27)  || e.keyCode === (13)) setSearchBoxValue("");
   };  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  useEffect(() => {
    searchBoxRef.current.focus();
  }, [])
  
  return (
    <>
      <form className={styles.autocompleteWrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          className={styles.navInputSearch}
          value={searchBoxValue}
          ref={searchBoxRef}
          onChange={handleInputOnChange}
          onKeyDown={handleInputOnKeyDown}
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
