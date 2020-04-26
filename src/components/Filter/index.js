import React from "react";
import {LinkSize} from "../LinkSize";
import styles from "./Filter.module.css";

export const Filter = ({allSizes, filterSizes, addSizeFilter, deleteSizeFilter}) => (
    <ul className={styles.filterSizes}>
        {allSizes.map(size => (
            <LinkSize key={size}
                      active={filterSizes.includes(size)}
                      addSizeFilter={addSizeFilter}
                      deleteSizeFilter={deleteSizeFilter}
            >
                {size}
            </LinkSize>))}
    </ul>
)
