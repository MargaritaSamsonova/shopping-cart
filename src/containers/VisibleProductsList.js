import React from "react";
import {connect} from "react-redux";
import {fetchProductsRequest, getError, getFilterSizes, getIsLoading, getProductsList} from "../modules/products";
import {ProductsList} from "../components/ProdactsList";
import {addProductsToCartRequest, getCart} from "../modules/cart";

const getFilteredList = (productList, filterSizes) => (
    filterSizes.length ?
        productList.filter((product)=>(
            filterSizes.some((filterSize)=>product.availableSizes.includes(filterSize))
        )
    ) : productList
)

const mapStateToProps = state => ({
    products: getFilteredList(getProductsList(state), getFilterSizes(state)),
    filterSizes: getFilterSizes(state),
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
