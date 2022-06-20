import { capitalizeString, getCurrencyStringFromNumber, translateCondition } from 'helpers/stringHelpers';
import React, { useContext } from 'react'
import styles from "./listitem.module.scss";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from 'contexts/LoadingContext';

const ITEMS_URL_FRAGMENT = "/items/";

export const ListItem = ({itemData}) => {
const {id, title, price, picture, condition, free_shipping: freeShipping, location} = itemData;
const {amount, decimals} = price;
const { contentIsLoading } = useContext(LoadingContext);
const navigate = useNavigate();

const handleOnClick = () => {
       navigate(
         ITEMS_URL_FRAGMENT + id
       );
       contentIsLoading();
}
  return (
    <li className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img
          src={picture}
          alt="Item"
          className={styles.cardImage}
          onClick={handleOnClick}
        />
      </div>
      <div className={styles.cardDescription}>
        <div className={styles.priceContainer}>
          <span>{getCurrencyStringFromNumber(amount, decimals)}</span>
          {freeShipping && <div className={styles.shippingLogo}></div>}
        </div>

        <h3 className={styles.itemTitle} onClick={handleOnClick}>
          {title}
        </h3>
        <p className={styles.itemCondition}>
          {capitalizeString(translateCondition(condition))}
        </p>
      </div>
      <div className={styles.cardLocation}>{location}</div>
    </li>
  );
}
