import React from "react";

const ShoppingCart = ({cart, subTotal, tax, total}) => {
  return (
    <section>
      <h1>Cart</h1>
        <ul>
            {cart.map((product) => {
                return(
                    <li>
                        {product.name}: ${product.price.toFixed(2)}
                    </li>
                )
            })}
        </ul>
      <h2>Subtotal: ${subTotal.toFixed(2)}</h2>
      <h2>Tax: ${tax.toFixed(2)}</h2>
      <h2>Total: ${total.toFixed(2)}</h2>
    </section>
  );
};

export default ShoppingCart;
