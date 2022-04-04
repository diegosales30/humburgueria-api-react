import "./Product.css";

const Product = ({ products, handleClick, filtered }) => {
  return (
    <div className="container-product">
      {filtered.length === 0 ? (
        <>
          {products.map((current) => (
            <div key={current.id} className="container-render-product">
              <figure className="box-product-img">
                <img src={current.img} alt={current.name} />
              </figure>
              <div className="title-product">
                <h2>{current.name}</h2>
              </div>
              <div className="description-product">
                <p>{current.category}</p>
              </div>
              <div className="price-product">
                <span>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(current.price)}
                </span>
              </div>
              <div className="btn-product">
                <button onClick={() => handleClick(current)}>Adicionar</button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {filtered.map((current) => (
            <div key={current.id} className="container-render-product">
              <figure className="box-product-img">
                <img src={current.img} alt={current.name} />
              </figure>
              <div className="title-product">
                <h2>{current.name}</h2>
              </div>
              <div className="description-product">
                <p>{current.category}</p>
              </div>
              <div className="price-product">
                <span>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(current.price)}
                </span>
              </div>
              <div className="btn-product">
                <button onClick={() => handleClick(current)}>Adicionar</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default Product;
