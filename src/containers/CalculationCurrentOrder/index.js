import React from "react";
import {Cart} from "../../components/Cart";
import {connect} from "react-redux";
import {
    incrementQuantityProductInCartRequest,
    decrementQuantityProductInCartRequest,
    deleteProductsFromCartRequest,
    fetchProductsCartRequest,
    getCart,
    getError,
    getIsLoading,
} from "../../modules/cart";

const mapStateToProps = state => ({
    cart: getCart(state),
    isLoading: getIsLoading(state),
    error: getError(state),
})

const mapDispatchToProps = {
    fetchProductsCartRequest,
    incrementQuantityProductInCartRequest,
    decrementQuantityProductInCartRequest,
    deleteProductsFromCartRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);
