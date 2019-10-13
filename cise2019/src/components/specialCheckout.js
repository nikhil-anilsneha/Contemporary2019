import React, { Component } from "react";
import './Checkout.css'
import { Link } from 'react-router-dom'

class specialCheckout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      //Checkout page for one click purchases
      <div>
        <div className="payrow">
          <div className="col-75">
            <div className="containerpay">
              <form action="/action_page.php">

                <div className="payrow">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    {alert("This is a checkout page for the item you have selected to purchase which has an ongoing offer!!")}
                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                    <label for="email"><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="john@example.com" />
                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                    <label for="city"><i className="fa fa-institution"></i> City</label>
                    <input type="text" id="city" name="city" placeholder="New York" />

                    <div className="payrow">
                      <div className="col-50">
                        <label for="state">State</label>
                        <input type="text" id="state" name="state" placeholder="NY" />
                      </div>
                      <div className="col-50">
                        <label for="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder="10001" />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label for="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                    <label for="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                    <div className="row">
                      <div className="col-50">
                        <label for="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2019" />
                      </div>
                      <div className="col-50">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="420" />
                      </div>
                    </div>
                  </div>

                </div>
                <label >
                  <h5 className="shipbill"><input type="checkbox" /> Shipping address same as billing</h5>
                </label>
                <Link to="/tips.js"><button className="paybtn" onClick={paid}>Submit</button></Link>
              </form>
            </div>
          </div>

        </div>
      </div>
    );
    function paid() {
      alert("Payment Successful! You will be redirected to the Gardening Tips page for information on" +
        " how to maintain your purchased plants!");
    }
  }
}

export default specialCheckout;