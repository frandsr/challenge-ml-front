import React from "react";
import { Link } from "react-router-dom";
import AutoComplete from "../Autocomplete/Autocomplete";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <header role={"heading"}>
        <div className={styles.headerWrapper}>
          <Link to="/" className={styles.navLogo}>
            Mercado Libre
          </Link>
          <AutoComplete />
        </div>
      </header>
    </>
  );
};
