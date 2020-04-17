import React from "react";

export const Product = ({product, addToCart}) => (
    <li className="product card">
        <div className="product__img-wrap">
            <img className="product__img" src={require(`./../../static/products/${product.image}`)}/>
        </div>
        <div className="product__info">
            <div className="product__name">{product.name}</div>
            <div className="product__price">Цена: {product.price}₽</div>
            <button className="btn btn--bottom btn--long" onClick={addToCart.bind(null, product)}>В корзину</button>
        </div>
    </li>
)
