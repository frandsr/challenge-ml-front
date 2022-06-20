import { Breadcrumb } from "components/Breadcrumb/Breadcrumb";
import { SkeletonItemDetail } from "components/SkeletonItemDetail/SkeletonItemDetail";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/itemdetail.module.scss";
import {
  capitalizeString,
  getCurrencyStringFromNumber,
  replaceBreakingSpaces,
  translateCondition
} from "helpers/stringHelpers";
import { SkeletonBreadCrumb } from "components/SkeletonBreadCrumb/SkeletonBreadCrumb";

const BASE_SERVER_ITEMS_URL = "http://localhost:8080/api/items/";

export const ItemDetail = () => {
let { id } = useParams();
const [item, setItem] = useState();
const [categoriesPath, setCategoriesPath] = useState();
const itemDescriptionRef = useRef();

  useEffect(() => {
    fetch(BASE_SERVER_ITEMS_URL + id)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.item);
        setCategoriesPath(data.category_path);          
          if(itemDescriptionRef.current){
            itemDescriptionRef.current.innerHTML = replaceBreakingSpaces(
              data.item.description
            );  
          }    
      });
  }, [id]);

  return (
    <>
      {!item ? (
          <SkeletonItemDetail />
      ) : (
        <div className="container">
          {categoriesPath && <Breadcrumb categoryPath={categoriesPath} />}
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
                {item.price &&
                  getCurrencyStringFromNumber(
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
            <p
              ref={itemDescriptionRef}
              className={styles.itemDescriptionContent}
            ></p>
          </div>
        </div>
      )}
    </>
  );
};
