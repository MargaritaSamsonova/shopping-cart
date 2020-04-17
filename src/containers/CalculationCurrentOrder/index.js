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

const getTotal = (cart) => cart.reduce((accumulator, currentValue) => (
    +accumulator + (+currentValue.price * currentValue.quantity)
), 0);

const mapStateToProps = state => ({
    cart: getCart(state),
    isLoading: getIsLoading(state),
    error: getError(state),
    total: getTotal(getCart(state))
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
