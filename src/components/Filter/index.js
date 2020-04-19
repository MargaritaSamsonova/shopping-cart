import React from "react";
import {LinkSize} from "../LinkSize";

export const Filter = ({allSizes, filterSizes, addSizeFilter, deleteSizeFilter}) => (
    <ul className="filter-sizes">
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
