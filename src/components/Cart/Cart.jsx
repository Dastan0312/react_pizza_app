import React from "react";
import styles from "../../page/cartPage/CartPage.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";

const Cart = ({ item }) => {
  return (
    <div className={styles.cartItems}>
      <img src={item.img} alt="" />
      <div className={styles.info}>
        <h4>{item.title}</h4>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className={styles.counter}>
        <AiOutlinePlusCircle className={styles.btn} size={19} />
        <span>2</span>
        <AiOutlineMinusCircle className={styles.btn} size={19} />
      </div>
      <div className={styles.price}>
        <strong>{item.price}</strong> сом
      </div>
      <div className={styles.times}>
        <FaRegTimesCircle size={17} />
      </div>
    </div>
  );
};

export default Cart;
