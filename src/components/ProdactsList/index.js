import React, {useEffect} from "react";
import {Product} from "../Product";

export const ProductsList = ({products, filterSizes, orderBy, isLoading, error, fetchProductsRequest, addProductsToCartRequest}) => {
    useEffect(() => {
        fetchProductsRequest();
    }, []);

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
    <ul className="products-list">
        {products.map((product) => (
            <Product key={product.id}
                     product={product}
                     addToCart={addProductsToCartRequest}
                     filterSizes={filterSizes}/>
        ))}
    </ul>
)}
