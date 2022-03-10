import React from "react";
import styles from "./CartPage.module.css";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineDeleteForever } from "react-icons/md";
import Cart from "./../../components/Cart/Cart";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import pizza1 from "../../img/pizza1.png";
import emtyCart from "../../img/emtyCart.png";

const CartPage = () => {
  const pizzas = [
    {
      title: "Чизбургер-пицца",
      price: "499",
      img: pizza1,
    },
  ];
  return (
    <div className={styles.cartSection}>
      {pizzas <= 0 ? (
        <div className={styles.emtyCart}>
          <h2>Корзина пустая </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emtyCart} alt="" />
          <Link to="/">
            {" "}
            <div className={styles.cartBtnBack}>Вернуться назад</div>
          </Link>
        </div>
      ) : (
        <div style={{ width: "60%" }}>
          <div className={styles.cartHeader}>
            <div>
              <CgShoppingCart size={20} /> <h2>Корзина</h2>
            </div>
            <div>
              <MdOutlineDeleteForever />
              <span>Очистить корзину</span>
            </div>
          </div>
          {pizzas.map((item, i) => {
            return <Cart key={i} item={item} />;
          })}
          <div className={styles.cartFooter}>
            <div>
              <p>Всего пицц: 3 шт.</p>
              <p>Сумма заказа: 900 ₽</p>
            </div>
            <div>
              <Link to="/">
                <div className={styles.cartBtnBack}>
                  {" "}
                  <GoChevronLeft /> Вернуться назад
                </div>
              </Link>
              <div className={styles.cartBtn}>Оплатить сейчас</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
