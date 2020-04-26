import React from "react";
import styles from "./Total.module.css"

export const Total = ({total, quantity}) => (
    <div className={styles.totalWrap}>
        <div className={styles.quantity}>Всего товаров: {quantity}</div>
        <div className={styles.total}>Итого: {total}₽</div>
    </div>
)
