import React from "react";
import styles from "./CartProduct.module.css";

export const CartProduct = ({product, incrementQuantity, decrementQuantity, deleteFromCart}) => (
    <li className={styles.productCart}>
        <div className={styles.productRow}>
            <div className={styles.productImgWrap}>
                <img className={styles.productImg} src={require(`./../../static/products/${product.image}`)}/>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.productName}>{product.name}</div>
                {product.desc.length ?
                    <div className={styles.productDesc}>{product.desc}</div> : ""
                }

                <div className={styles.productSizeWrap}>
                    <div className={styles.productCartField}>Размер</div>
                    <div className={styles.productCartValue}>
                        <div className={styles.productSize}>{product.size}</div>
                    </div>
                </div>

                <div className={styles.productCounter}>
                    <div className={styles.productCartField}>Количество</div>
                    <div className={styles.productCartValue}>
                        <button className="btn-white btn-white--red" onClick={decrementQuantity.bind(null, product.id)}>-</button>
                        <span className={styles.productQuantity}>{product.quantity}</span>
                        <button className="btn-white" onClick={incrementQuantity.bind(null, product.id)}>+</button>
                    </div>
                </div>
                <div className={styles.productPrice}>{product.price * product.quantity} ₽</div>
            </div>
        </div>

        <button className={styles.deleteProduct} onClick={deleteFromCart.bind(null, product.id)}>×</button>
    </li>
)
