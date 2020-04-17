import React, {useEffect} from "react";
import {CartProduct} from "../CartProduct";
import {Total} from "../Total";

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
        <div className="cart">
            <div className="title">Йа твоя корзинко!</div>
            {cart.length ? (
                <>
                    <ul className="cart__list">
                        {cart.map((product) => (
                            <CartProduct key={product.id}
                                         product={product}
                                         incrementQuantity={incrementQuantityProductInCartRequest}
                                         decrementQuantity={decrementQuantityProductInCartRequest}
                                         deleteFromCart={deleteProductsFromCartRequest}/>
                        ))}
                    </ul>
                    <Total total={total}/>
                </>
            ) : (
                <div>Наполни меня:)</div>
            )
            }

        </div>
    )
}
