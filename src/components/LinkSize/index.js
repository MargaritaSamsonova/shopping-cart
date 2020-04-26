import React from "react";
import styles from "./LinkSize.module.css"

export const LinkSize = ({children: size, active, addSizeFilter, deleteSizeFilter}) => (
    <li className={styles.filterSizesItem}>
        <button className={active ? styles.filterSizesBtnActive :styles.filterSizesBtn}
                onClick={active ? deleteSizeFilter.bind(null, size) : addSizeFilter.bind(null, size)}>
            {size}
        </button>
    </li>
)
