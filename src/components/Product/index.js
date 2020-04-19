import React, {useState} from "react";

export const Product = ({product, addToCart, filterSizes}) => {
    const [checkedSize, setCheckedSize] = useState(product.availableSizes[0]);

    const getAddingProduct = () => ({
        productId: product.id,
        image: product.image,
        name: product.name,
        desc: product.desc,
        price: product.price,
        size: checkedSize
    })

    return (
    <li className="product card">
        <div className="product__img-wrap">
            <img className="product__img" src={require(`./../../static/products/${product.image}`)}/>
        </div>
        <div className="product__info">
            <div className="product__name">{product.name}</div>
            <div className="product__price">Цена: {product.price}₽</div>

            <ul className="product__size-radio-list">
            {product.availableSizes.map((size)=>(
                <li key={size} className="product__size-radio-item">
                    <label className="product__size-radio-label">
                        <input type="radio"
                               name={product.id}
                               value={size}
                               checked={size === checkedSize}
                               onChange={(e) => setCheckedSize(e.target.value)}
                               style={{display: "none"}}
                               className="product__size-radio"
                        />
                        <div className="product__size-radio-text">{size}</div>
                    </label>
                </li>
            ))}
            </ul>

            <button className="btn btn--bottom btn--long" onClick={addToCart.bind(null, getAddingProduct())}>В корзину</button>
        </div>
    </li>
)}
