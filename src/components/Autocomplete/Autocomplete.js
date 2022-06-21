import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./autocomplete.module.scss";
import { useNavigate } from "react-router-dom";
import { getSearchParamsURlFromString } from "../../helpers/routingHelpers";
import { LoadingContext } from "contexts/LoadingContext";

const ITEMS_URL_FRAGMENT = "/items?";

const AutoComplete = () => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const { contentIsLoading } = useContext(LoadingContext);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const searchBoxRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchBoxValue("");
    searchBoxRef.current.focus();
    let lSSuggestions = localStorage.getItem("suggestions");
    if (lSSuggestions) {
      setSuggestions(JSON.parse(lSSuggestions));
    }
  }, []);

  useEffect(() => {
    if (filteredSuggestions[activeSuggestion]){
      setSearchBoxValue(filteredSuggestions[activeSuggestion]);
    }
  }, [activeSuggestion,filteredSuggestions]);

  useEffect(() => {
    if (suggestions && suggestions.length > 0) {
      localStorage.setItem("suggestions", JSON.stringify(suggestions));
      setFilteredSuggestions(suggestions);
    }
  }, [suggestions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(ITEMS_URL_FRAGMENT + getSearchParamsURlFromString(searchBoxValue));
    if (searchBoxValue !== "" && suggestions.indexOf(searchBoxValue) === -1) {
      setSuggestions((oldArray) => [...oldArray, searchBoxValue].slice(-6));
    }
    contentIsLoading();
    setSearchBoxValue("");
    setShowSuggestions(false);
  };

  const handleOnFocus = () => {
    searchBoxRef.current.focus();
    setActiveSuggestion(-1);
    setShowSuggestions(true);
  };

  const handleOnBlur = () => {
    setShowSuggestions(false);
    setActiveSuggestion(-1);
  };

  const handleInputOnChange = (e) => {
    setSearchBoxValue(e.target.value);
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(searchBoxValue.toLowerCase()) > -1
    );
    setFilteredSuggestions(filteredSuggestions);
    if (e.target.value === "") setFilteredSuggestions(suggestions);
  };

  const handleInputOnKeyDown = (e) => {
    setShowSuggestions(true);
    if (e.keyCode === 27) setSearchBoxValue("");
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) return;
      setActiveSuggestion((oldState) => oldState - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion === filteredSuggestions.length - 1) return;
      setActiveSuggestion((oldState) => oldState + 1);
    }
  };

  const searchSuggestedItem = (e, index) => {
    setActiveSuggestion(index);
  };

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
          onFocus={handleOnFocus}
          onClick={handleOnFocus}
          onBlur={handleOnBlur}
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className={styles.suggestionList} onClick={searchSuggestedItem}>
            {filteredSuggestions.map((sug, i) => {
              return (
                <li
                  key={sug}
                  onClick={searchSuggestedItem}
                  onMouseOver={(e) => searchSuggestedItem(e, i)}
                  className={
                    i === activeSuggestion
                      ? styles.activeSuggestion
                      : styles.inactiveSuggestion
                  }
                >
                <span>{sug}</span>
                </li>
              );
            })}
          </ul>
        )}
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
