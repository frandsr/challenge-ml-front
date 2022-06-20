import React from 'react'
import styles from "./skeletonlistitem.module.scss";


export const SkeletonListItem = () => {
  return (
    <li className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <div className={styles.cardImage}></div>
      </div>
      <div className={styles.cardDescription}>
        <div className={styles.priceContainer}></div>
        <p className={styles.itemText}></p>
        <p className={styles.itemText}></p>
        <p className={styles.itemText}></p>
        <p className={styles.itemCondition}></p>
      </div>
      <div className={styles.cardLocation}></div>
    </li>
  );
}
