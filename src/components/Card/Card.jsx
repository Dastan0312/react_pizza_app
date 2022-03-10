import React from "react";
import styles from "./Card.module.css";
import { BsPlus } from "react-icons/bs";

const Card = ({ item }) => {
  const [pastry, setPastry] = React.useState("тонкое");
  const [size, setSize] = React.useState(26);
  const [price, setPrice] = React.useState(item.price);

  const selectPastry = (kind) => {
    setPastry(kind);
  };
  const selectSize = (size) => {
    setSize(size);
    switch (size) {
      case 26:
        setPrice(+item.price);
        break;
      case 32:
        setPrice(+item.price + 100);
        break;
      case 40:
        setPrice(+item.price + 200);
        break;
    }
  };

  return (
    <div className={styles.cardBody}>
      <img className={styles.cardImg} src={item.img} alt="" />
      <h4>{item.title}</h4>
      <div className={styles.infoBox}>
        <div>
          {item.kind.map((el, i) => {
            return (
              <span
                key={i}
                className={pastry == el ? styles.selected : null}
                onClick={() => selectPastry(el)}
              >
                {el}
              </span>
            );
          })}
        </div>
        <div>
          {item.sizes.map((el, i) => {
            return (
              <span
                key={i}
                className={size == el ? styles.selected : null}
                onClick={() => selectSize(el)}
              >
                {el} cm
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div>
          <strong>от {price} сом</strong>
        </div>
        <div className={styles.btn}>
          <BsPlus />
          Добавить
        </div>
      </div>
    </div>
  );
};

export default Card;
