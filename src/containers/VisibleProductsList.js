import React from "react";
import {connect} from "react-redux";
import {
    fetchProductsRequest,
    getError,
    getFilterSizes,
    getIsLoading,
    getOrderBy,
    getProductsList,
    ORDER_BY
} from "../modules/products";
import {ProductsList} from "../components/ProdactsList";
import {addProductsToCartRequest, getCart} from "../modules/cart";

const sortProducts = (sortingData, orderBy) => {
    const sort = (sortingData, field, isAsd = false) => (
        sortingData.sort((a, b) => (
            isAsd ?
                a[field] > b[field] ? '1' : '-1' :
                a[field] < b[field] ? '1' : '-1'
        ))
    )

    const sortingDataClone = [...sortingData];
    let sortedData = sortingDataClone;

    switch (orderBy) {
        case ORDER_BY.PRICE_DESC:
            sortedData = sort(sortingDataClone, "price");
            break;
        case ORDER_BY.PRICE_ASD:
            sortedData = sort(sortingDataClone, "price", true);
            break;
    }

    return sortedData;
}

const getVisibilityList = (productList, orderBy, filterSizes) => {
    if (filterSizes.length && !orderBy) return productList;

    const filteredProductList = filterSizes.length ?
        productList.filter((product)=>(
                filterSizes.some((filterSize)=>product.availableSizes.includes(filterSize))
            )
        ) : productList;

    const orderedProductList = orderBy ? sortProducts(filteredProductList, orderBy) : filteredProductList;

    return orderedProductList;
}

const mapStateToProps = state => ({
    products: getVisibilityList(getProductsList(state), getOrderBy(state), getFilterSizes(state)),
    filterSizes: getFilterSizes(state),
    orderBy: getOrderBy(state),
    isLoading: getIsLoading(state),
    error: getError(state),
    cart: getCart(state)
})

const mapDispatchToProps = {
    fetchProductsRequest,
    addProductsToCartRequest,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList)
