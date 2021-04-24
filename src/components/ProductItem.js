import React from "react";

const ProductItem = ({name, price, img, description, addProduct}) => {
  return (
    <section>
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={() => addProduct({name, price})}>Add To Cart</button>
      <img src={img}/>
      <p>{description}</p>
    </section>
  );
};

export default ProductItem;