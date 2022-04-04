const CartProduct = ({ current, handleRemove }) => {
  return (
    <div className="produtos-no-cart">
      <div key={current.id} className="container-cart-product">
        <div className="box-img-title">
          <div>
            <img className="img-cart" src={current.img} alt="" />
          </div>
          <div>
            <h2 className="title-cart-h2">{current.name}</h2>
            <p className="paragraph-cart">{current.category}</p>
          </div>
        </div>
        <div>
          <button
            className="btn-remove"
            onClick={() => handleRemove(current.id)}
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
