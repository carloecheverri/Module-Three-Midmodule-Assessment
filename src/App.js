import React from "react";
import "./App.css";
import Products from "./components/Products"
import ShoppingCart from "./components/ShoppingCart"
import CheckoutForm from "./components/CheckoutForm"

class App extends React.Component {
  state = {cart: []}

    addToCart = (product) => {
      this.setState((prevState) => ({cart: [...prevState.cart, product]}))
    }


  render() {
    const { cart } = this.state
    let subTotal = 0;
    let tax = 0;
    let total = 0;
    cart.forEach(product => 
      subTotal += product.price)

    tax = subTotal * 0.05

    total += subTotal + tax
    


    return <section>
      <Products addToCart={this.addToCart}/>
      <ShoppingCart cart={cart} subTotal={subTotal} tax={tax} total={total}/>
      <CheckoutForm total={total}/>

    </section>;
  }
}

export default App;
