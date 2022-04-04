import "./Header.css";
import logo from "../../img/log-burguer-kenzie.png";
import { useState } from "react";

const Header = ({ products, showProducts }) => {
  const [input, setInput] = useState([]);
  return (
    <div>
      <header className="container-header">
        <div className="box-img">
          <img className="img-logo" src={logo} alt="" />
        </div>
        <div className="box-search">
          <input
            type="search"
            placeholder="Digitar pesquisa"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={() => showProducts(input)}>Pesquisar</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
