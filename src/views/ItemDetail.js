import { capitalizeString, getCurrencyStringFromNumber, replaceBreakingSpaces, translateCondition } from "helpers/stringHelpers";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/itemdetail.module.scss";

const BASE_SERVER_ITEMS_URL = "http://localhost:8080/api/items/";

export const ItemDetail = () => {
   let {id} = useParams();
    const [item, setItem] = useState({});
    const itemDescription = useRef()

     useEffect(() => {
       fetch(BASE_SERVER_ITEMS_URL + id)
         .then((response) => response.json())
         .then((data) => {
          setItem(data.item)
          itemDescription.current.innerHTML =
            replaceBreakingSpaces(data.item.description);
        });
     }, [id]);

  return (
    <>
      <div className="container">
        <div className={styles.itemDetailmainSection}>
          <div className={styles.imageContainer}>
            <img src={item.picture} alt="item" className={styles.itemImage} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.itemConditionContainer}>
              <span>
                {item.condition &&
                  capitalizeString(translateCondition(item.condition))}
              </span>
              <span> - {item.sold_quantity} vendidos</span>
            </div>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemPrice}>
              {item.price && getCurrencyStringFromNumber(
                item.price.amount,
                item.price.decimals
              )}
            </p>
            <button className={styles.buyButton}> Comprar </button>
          </div>
        </div>
        <div className={styles.itemDescriptionContainer}>
          <h3 className={styles.itemDescriptionTitle}>
            Descripción del producto
          </h3>
         <p ref={itemDescription} className={styles.itemDescriptionContent}></p>
        </div>
      </div>
    </>
  );
};
