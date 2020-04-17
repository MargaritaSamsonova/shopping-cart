import React from "react";
import {connect} from "react-redux";
import {fetchProductsRequest, getError, getIsLoading, getProductsImages} from "../modules/products";
import {ProductsList} from "../components/ProdactsList";
import {addProductsToCartRequest, getCart} from "../modules/cart";

const mapStateToProps = state => ({
    products: getProductsImages(state),
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
