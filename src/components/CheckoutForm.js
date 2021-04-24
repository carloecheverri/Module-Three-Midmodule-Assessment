import React from "react";

class CheckoutForm extends React.Component {
    state = {firstname:"", lastname:"", email:"", credicard:"", zipcode:""}

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { cart, total} = this.props
        const{
            firstname,
            lastname,
            email,
            creditcard,
            zipcode
        } = this.state
        if(!firstname || !lastname || !email){
            alert("Input is not valid")
        }
        else if(creditcard.length !== 16){
            alert("Credit card number is not valid")
        }
        else if(zipcode.length !==5){
            alert("Zip code is not valid")
        }
        else {
            alert(`Purchase complete
            your total is $${total.toFixed(2)}`)
        }
    }
  render() {

      const {
          firstname,
          lastname,
          email,
          creditcard,
          zipcode
      } = this.state

    return (
      <section>
        <h1>Checkout</h1>
        <form onSubmit={this.handleSubmit}>
            <label>First Name<br></br>
            <input 
            name="firstname"
            value={firstname}
            onChange={this.handleChange}/>
            </label>
            <label>Last Name<br></br>
            <input name="lastname"
            value={lastname}
            onChange={this.handleChange}/>
            </label>
            <label>Email<br></br>
            <input name="email"
            value={email}
            onChange={this.handleChange}/>
            </label>
            <label>Credit Card<br></br>
            <input name="creditcard"
            value={creditcard}
            onChange={this.handleChange}/>
            </label>
            <label>Zip Code<br></br>
            <input name="zipcode"
            value={zipcode}
            onChange={this.handleChange}/>
            </label>
            <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default CheckoutForm;
