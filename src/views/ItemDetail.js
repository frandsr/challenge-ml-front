import { Breadcrumb } from "components/Breadcrumb/Breadcrumb";
import { SkeletonItemDetail } from "components/SkeletonItemDetail/SkeletonItemDetail";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/itemdetail.module.scss";
import {
  capitalizeString,
  getCurrencyStringFromNumber,
  translateCondition
} from "helpers/stringHelpers";
import useFetchItemInfo from "hooks/useFetchItemInfo";

export const ItemDetail = () => {
let { id } = useParams();
const itemDescriptionRef = useRef();
const {item, categoriesPath} = useFetchItemInfo(id, itemDescriptionRef);

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
