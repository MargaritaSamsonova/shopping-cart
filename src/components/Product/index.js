import React, {useState} from "react";
import styles from "./Product.module.css";

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
    <li className={styles.product}>
        <div className={styles.productContent}>
            <div className={styles.productImgWrap}>
                <img className={styles.productImg} src={require(`./../../static/products/${product.image}`)}/>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productDesc}>{product.desc}</div>

                <ul className={styles.productSizeRadioList}>
                {product.availableSizes.map((size)=>(
                    <li key={size} className={styles.productSizeRadioItem}>
                        <label className={styles.productSizeRadioLabel}>
                            <input type="radio"
                                   name={product.id}
                                   value={size}
                                   checked={size === checkedSize}
                                   onChange={(e) => setCheckedSize(e.target.value)}
                                   style={{display: "none"}}
                                   className={styles.productSizeRadio}
                            />
                            <div className={styles.productSizeRadioText}>{size}</div>
                        </label>
                    </li>
                ))}
                </ul>

                <div className={styles.productPrice}>Цена: {product.price}₽</div>
            </div>
        </div>
        <button className="btn btn--bottom btn--long" onClick={addToCart.bind(null, getAddingProduct())}>В корзину</button>
    </li>
)}
