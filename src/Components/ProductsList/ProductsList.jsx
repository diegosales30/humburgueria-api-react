import Product from "../Product/Product";

const ProductsList = ({ products, currentSale, handleClick, filtered }) => {
  return (
    <div>
      <Product
        products={products}
        currentSale={currentSale}
        handleClick={handleClick}
        filtered={filtered}
      />
    </div>
  );
};

export default ProductsList;
