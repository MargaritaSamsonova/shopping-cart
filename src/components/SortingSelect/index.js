import React, {useState} from "react";
import {select} from "./SortingSelect.module.css";

export const SortingSelect = ({ORDER_BY, updateOrder}) => (
    <select
        className={select}
        onChange={(e)=>{
            updateOrder(e.target.value);
        }}>
        <option value={null}>Рекомендованное</option>
        <option value={ORDER_BY.PRICE_ASD}>По цене по возрастанию</option>
        <option value={ORDER_BY.PRICE_DESC}>По цене по убыванию</option>
    </select>
)
