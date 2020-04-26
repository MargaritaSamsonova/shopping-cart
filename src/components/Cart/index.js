import React, {useEffect} from "react";
import {CartProduct} from "../CartProduct";
import {Total} from "../Total";
import styles from "./Cart.module.css";

export const Cart = ({cart,
                         isLoading,
                         error,
                         total,
                         fetchProductsCartRequest,
                         incrementQuantityProductInCartRequest,
                         decrementQuantityProductInCartRequest,
                         deleteProductsFromCartRequest}) => {
    useEffect(() => {
        fetchProductsCartRequest();
    }, []);

    if (isLoading) return <p>Данные загружаются...</p>;
    if (error) return <p>Произошла сетевая ошибка</p>;

    return (
        <div className={styles.cart}>
            <div className="title">Йа твоя корзинко!</div>
            {cart.length ? (
                <>
                    <ul className={styles.cartList}>
                        {cart.map((product) => (
                            <CartProduct key={product.id}
                                         product={product}
                                         incrementQuantity={incrementQuantityProductInCartRequest}
                                         decrementQuantity={decrementQuantityProductInCartRequest}
                                         deleteFromCart={deleteProductsFromCartRequest}/>
                        ))}
                    </ul>
                    <Total total={total} quantity={cart.reduce((acc, curr)=>(acc + +curr.quantity), 0)}/>
                </>
            ) : (
                <div>Наполни меня :)</div>
            )}
        </div>
    )
}
