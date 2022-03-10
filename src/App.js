import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import pizza1 from "./img/pizza1.png";
import CartPage from "./page/cartPage/CartPage";

function App() {
  const pizzas = [
    {
      title: "Чизбургер-пицца",
      price: "499",
      img: pizza1,
      category: "Мясные",
      kind: ["тонкое", "традиционное"],
      sizes: [26, 32, 40],
    },
    {
      title: "Сырная",
      price: "490",
      img: pizza1,
      category: "Вегетарианская",
      kind: ["тонкое", "традиционное"],
      sizes: [26, 32, 40],
    },
    {
      title: "Креветки по-азиатски",
      price: "599",
      img: pizza1,
      category: "Мясные",
      kind: ["тонкое", "традиционное"],
      sizes: [26, 32, 40],
    },
    {
      title: "Сырный цыпленок",
      price: "699",
      img: pizza1,
      category: ["Мясные", "Острые"],
      kind: ["тонкое", "традиционное"],
      sizes: [26, 32, 40],
    },
    {
      title: "Чизбургер-пицца",
      price: "409",
      img: pizza1,
      category: "Острые",
      kind: ["тонкое", "традиционное"],
      sizes: [26, 32, 40],
    },
    {
      title: "Сырный цыпленок",
      price: "400",
      img: pizza1,
      category: ["Острые", "Закрытые"],
      kind: ["тонкое", "традиционное"],
      sizes: [26, 32, 40],
    },
    {
      title: "Чизбургер-пицца",
      price: "399",
      img: pizza1,
      category: "Острые",
      kind: ["тонкое", "традиционное"],
      sizes: [26, 32, 40],
    },
    {
      title: "Креветки по-азиатски",
      price: "459",
      img: pizza1,
      category: "Закрытые",
      kind: ["тонкое", "традиционное"],
      sizes: [26, 32, 40],
    },
  ];
  return (
    <div className="App">
      <Header tagline={"самая вкусная пицца во вселенной"} />

      <Routes>
        <Route path="/" element={<Home pizzas={pizzas} />} />
        <Route path="/cart" element={<CartPage pizzas={pizzas} />} />
      </Routes>
    </div>
  );
}

export default App;
