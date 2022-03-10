import React from "react";
import "../../App.css";
import Card from "../../components/Card/Card";
import pizza1 from "../../img/pizza1.png";

const Home = ({ pizzas }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Острые", "Закрытые"];

  const [category, setCategory] = React.useState(0);
  const [filteredCategory, setFilteredCaregory] = React.useState(pizzas);

  const handleCategory = (i, item) => {
    setCategory(i);
    if (i !== 0) {
      setFilteredCaregory(pizzas.filter((el) => el.category.includes(item)));
    } else {
      setFilteredCaregory(pizzas);
    }
  };
  const handleFilter = (event) => {
    const onPrice = "onPrice";
    const alphabetic = "alphabetic";
    if (event === onPrice) {
      setFilteredCaregory(filteredCategory.sort((a, b) => a.price - b.price));
    } else if (event === alphabetic) {
      setFilteredCaregory(
        filteredCategory.sort((a, b) => a.title.localeCompare(b.title))
      );
    }
  };

  return (
    <>
      <div className="navBar">
        <ul>
          {categories.map((item, i) => {
            return (
              <li
                onClick={() => handleCategory(i, item)}
                className={category === i ? "activeBtn" : "navBarBtn"}
                key={i}
              >
                {" "}
                {item}
              </li>
            );
          })}
        </ul>
        <div className="filter">
          <span>Сортировка по:</span>
          <select onChange={(e) => handleFilter(e.target.value)}>
            <option value="onPopular">популярности</option>
            <option value="onPrice">по цене</option>
            <option value="alphabetic">по алфавиту</option>
          </select>
        </div>
      </div>
      <div className="pizzasSection">
        <h2>Все пиццы</h2>
        {filteredCategory.length <= 0 ? (
          <div className="anyPizza">
            <Card
              disabled
              item={{
                title: "Гриль",
                price: "345",
                img: pizza1,
              }}
            />
          </div>
        ) : (
          <div className="cardsContainer">
            {filteredCategory.map((item, i) => {
              return <Card key={i} item={item} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
