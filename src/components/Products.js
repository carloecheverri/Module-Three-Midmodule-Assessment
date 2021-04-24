import React from "react";
import "./Products.css";
import productsData from "../data/productData";
import ProductItem from "./ProductItem";

class Products extends React.Component {
  render() {
    const ProductsList = productsData.map((product) => {
      return (
        <ProductItem
          name={product.name}
          price={product.price}
          img={product.img}
          description={product.description}
          addProduct={this.props.addToCart}

        />
      );
    });

    return (
      <div>
        <h1>My Garage Sale</h1>
        <section className="Products">{ProductsList}</section>
      </div>
    );
  }
}

export default Products;
