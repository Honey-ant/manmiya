import React, { useState, useEffect } from 'react';
import { loadStripe,  } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useReduxStore } from "../../utils/GlobalState";
import {Elements, redirectToCheckout } from '@stripe/react-stripe-js';

import { Link } from 'react-router-dom';

import CartItem from '../CartItem';
// import Auth from '../../utils/auth';
// import { useStoreContext } from "../../utils/GlobalState";

import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

const stripe = require('stripe')(`${process.env.STRIPE_PUBLISHABLE_KEY}`);

const stripePromise = loadStripe("pk_test_51JXeTvQR8ZQnmKpPpGZYIANsAd55jusCiji4eR5L6nZUyZkbLrhxmIcuNEsQLtqaNMiROEDzrYgG7pctE68yJcwQ00w5WUMtXz");

// const product = await stripe.products.create({name: product.name});

const Cart = () => {
  const [state, dispatch] = useReduxStore();

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      }); console.log("stripepromise: %d")
    } else {
      console.error("redirect to checkout not working");
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    } else {
      console.error("Cart /get func not working");
    }

  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      } 

    });

    getCheckout({
      variables: { products: productIds },
    });
    
  }  

  if (!state.cartOpen) {
    return (
      <div className="cart-closed my-2" onClick={toggleCart}>
        {/* <span role="img" aria-label="trash">
          🛒
        </span> */}
        <i className="bi bi-cart2 " role="img" aria-label="trash"></i>
      </div>
    );
  }

  return (
    <div className="cart py-3">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()} </strong>
            <button type="submit" onClick={submitCheckout}>
                 Checkout
                 </button>
            {/* {Auth.loggedIn() ? (

               <button type="submit" onClick={submitCheckout}>
                 Checkout
                 </button>

            ) : (
              <span>(<Link to="/login">Login</Link> to check out)</span>
            )}   */}
                     
          </div>
          
        </div>
      ) : (
        <h3>
          You haven't added anything to your cart yet
        </h3>
      )}
    </div>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default Cart;
