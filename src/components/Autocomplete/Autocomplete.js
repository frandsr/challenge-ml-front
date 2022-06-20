import React, { useEffect, useRef, useState } from "react";
import styles from "./autocomplete.module.scss";
import { useNavigate } from "react-router-dom";
import {getSearchParamsURlFromString} from '../../helpers/routingHelpers'

const ITEMS_URL_FRAGMENT = "/items?";

const AutoComplete = ({ suggestions }) => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const searchBoxRef = useRef();
  const navigate = useNavigate();

  const handleInputOnChange = (e) => {
    setSearchBoxValue(e.target.value);
  }  

   const handleInputOnKeyDown = (e) => {
     if (e.keyCode === (27)) setSearchBoxValue("");
   };  

  const handleSubmit = (e) => {
    e.preventDefault();
    let URL = ITEMS_URL_FRAGMENT + getSearchParamsURlFromString(searchBoxValue);
    console.log("URL: ", URL);
     navigate(
       ITEMS_URL_FRAGMENT + getSearchParamsURlFromString(searchBoxValue)
     );
     setSearchBoxValue("");
  };

  useEffect(() => {
    setSearchBoxValue("");
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
