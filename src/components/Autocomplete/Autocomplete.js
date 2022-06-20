import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./autocomplete.module.scss";
import { useNavigate } from "react-router-dom";
import {getSearchParamsURlFromString} from '../../helpers/routingHelpers'
import { LoadingContext } from "contexts/LoadingContext";

const ITEMS_URL_FRAGMENT = "/items?";

const AutoComplete = ({ suggestions }) => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const { contentIsLoading } = useContext(LoadingContext);
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
     navigate(
       ITEMS_URL_FRAGMENT + getSearchParamsURlFromString(searchBoxValue)
     );
    contentIsLoading();
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
