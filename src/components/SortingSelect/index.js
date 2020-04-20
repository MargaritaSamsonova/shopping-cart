import React, {useState} from "react";

export const SortingSelect = ({ORDER_BY, updateOrder}) => {


    return (
        <select
            className="select"
            onChange={(e)=>{
                updateOrder(e.target.value);
            }}>
            <option value={null}>Рекомендованное</option>
            <option value={ORDER_BY.PRICE_ASD}>По цене по возрастанию</option>
            <option value={ORDER_BY.PRICE_DESC}>По цене по убыванию</option>
        </select>
    )
}
