import React from "react";

export const CartProduct = ({product, incrementQuantity, decrementQuantity, deleteFromCart}) => (
    <li className="product product--cart">
        <div className="product__img-wrap product__img-wrap--small">
            <img className="product__img" src={require(`./../../static/products/${product.image}`)}/>
        </div>
        <div>
            <div>{product.name}</div>
            <div>{product.desc}</div>
            <div>{product.size}</div>
            <div>Цена: {product.price}₽</div>

            <button className="btn-white btn-white--red" onClick={decrementQuantity.bind(null, product.id)}>-</button>
            <span>{product.quantity}</span>
            <button className="btn-white" onClick={incrementQuantity.bind(null, product.id)}>+</button>

            <div>
                <button className="btn btn--red" onClick={deleteFromCart.bind(null, product.id)}>Удалить</button>
            </div>
        </div>
    </li>
)
