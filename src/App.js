import Header from "./Components/Header/Header";
import ProductsList from "./Components/ProductsList/ProductsList";
import Cart from "./Components/Cart/Cart";

import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  const showProducts = (item) => {
    const filtered = products.filter(
      (current) =>
        current.category
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") ===
        item
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
    );
    //setProducts(filtered);
    setFiltered(filtered);
  };

  const handleClick = (item) => {
    if (!currentSale.includes(item)) {
      products.filter((current) => {
        if (current.id === item.id) {
          setCurrentSale([...currentSale, current]);
        }
      });
    }
  };

  function handleRemove(id) {
    const filtered = currentSale.filter((current) => current.id !== id);
    setCurrentSale(filtered);
  }

  return (
    <div className="App">
      <div className="container-principal">
        <Header products={products} showProducts={showProducts} />
        <div className="container-products">
          <ProductsList
            products={products}
            currentSale={currentSale}
            handleClick={handleClick}
            filtered={filtered}
          />
          <Cart
            products={products}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            handleClick={handleClick}
            handleRemove={handleRemove}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
