import React from 'react'
import styles from "./breadcrumb.module.scss";

export const Breadcrumb = ({categoryPath}) => {
    
  return (
    <ul className={styles.categoryPathContainer}>
        {categoryPath.map(cat => {
            return <li key={cat} className={styles.categoryPathItem}>{cat}</li>;
        })}
    </ul>
  )
}
