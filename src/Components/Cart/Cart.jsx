import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";

const Cart = ({ currentSale, handleRemove, setCurrentSale }) => {
  const total = currentSale.reduce((a, b) => a + b.price, 0);

  const removeAll = () => {
    setCurrentSale([]);
  };

  return (
    <div className="container-cart">
      <div className="header-cart">
        <h3>Carrinho de compras</h3>
      </div>
      {currentSale.length !== 0 ? (
        <div className="overflow">
          {currentSale.map((current, index) => (
            <CartProduct
              current={current}
              key={index}
              handleRemove={handleRemove}
            />
          ))}
          <div className="box-price">
            <div className="box-price-container">
              <h4>total</h4>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </span>
            </div>
            <div>
              <button onClick={removeAll} className="btn-remove-all">
                Remover todos
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="msg-display-none">
            <h2>Voce não possui item na sacola</h2>
            <p>adicionar item</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
