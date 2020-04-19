import React from "react";

export const LinkSize = ({children: size, active, addSizeFilter, deleteSizeFilter}) => (
    <li className="filter-sizes__item">
        <button className={active ? "btn active": "btn"}
                onClick={active ? deleteSizeFilter.bind(null, size) : addSizeFilter.bind(null, size)}>
            {size}
        </button>
    </li>
)
