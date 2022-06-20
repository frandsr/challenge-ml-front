import { SkeletonBreadCrumb } from 'components/SkeletonBreadCrumb/SkeletonBreadCrumb';
import React from 'react'
import styles from "./skeletonitemdetail.module.scss";


export const SkeletonItemDetail = () => {
  return (
    <>
      <div className="container">
        <SkeletonBreadCrumb />
        <div className={styles.itemDetailmainSection}>
          <div className={styles.imageContainer}>
            <div className={styles.itemImage}> </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.itemConditionContainer}></div>
            <p className={styles.itemTitle}></p>
            <p className={styles.itemTitle}></p>
            <p className={styles.itemPrice}></p>
            <button className={styles.buyButton}></button>
          </div>
        </div>
        <div className={styles.itemDescriptionContainer}>
          <p className={styles.itemDescriptionTitle}></p>
          <p className={styles.itemDescriptionContent}></p>
          <p className={styles.itemDescriptionContent}></p>
          <p className={styles.itemDescriptionContent}></p>
          <p className={styles.itemDescriptionContent}></p>
        </div>
      </div>
    </>
  );
}
