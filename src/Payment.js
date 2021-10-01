import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import "./Payment.css";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { useHistory } from "react-router";
import { db } from "./firebase";
import {
  CardElement,
  useStripe,
  uesElements,
  useElements,
} from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import { Card } from "@material-ui/core";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [ClientSecret, setClientSecret] = useState(true);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(ClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.ClientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The secret is :", ClientSecret);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(
          <Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Westland Boulevard</p>
            <p>Arbutus, MD 21227</p>
          </div>
        </div>
        <div className="payment_section">
          <h3 className="payment_title">Order Review</h3>
          <div className="payment_address">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>

              <div className="payment_price">
                <CurrencyFormat
                  renderText={(value) => <h3> Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)} // Part of the homework
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
              <button
                className="payment_btn"
                disabled={processing || disabled || succeeded}
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
