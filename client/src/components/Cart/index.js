import React, { useState, useEffect } from 'react';
import { loadStripe, stripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { useLazyQuery } from '@apollo/client';

import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from "../../utils/GlobalState";

import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

const stripePromise = loadStripe(`${process.env.STRIPE}` );

// const product = await stripe.products.create({name: product.name});

const Cart = () => {

  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      })
    } else {
      console.error("Stripe checkout error");
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

            {Auth.loggedIn() ? (
              // <button onClick={submitCheckout}>Checkout</button>
              <form action="/create-checkout-session" method="POST">
              {/* Add a hidden field with the lookup_key of your Price */}
              <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
              <button id="checkout-and-portal-button" type="submit">
                Checkout
              </button>
            </form>
            ) : (
              <span>(log in to check out)</span>
            )}
            
          </div>
        </div>
      ) : (
        <h3>
          {/* <span role="img" aria-label="shocked">
            😱
          </span> */}
          You haven't added anything to your cart yet
        </h3>
      )}
    </div>
  );
};

const SuccessDisplay = ({ sessionId }) => {
  return (
    <section>
      <div className="product Box-root">
     
        <div className="description Box-root">
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export  function App() {
  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  if (!success && message === '') {
    return <ProductDisplay />;
  } else if (success && sessionId !== '') {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}

const ProductDisplay = () => (
  <section>
    <div className="product">
     
      <div className="description">
        <h3>Starter plan</h3>
        <h5>$20.00 / month</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      {/* Add a hidden field with the lookup_key of your Price */}
      <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
      <button id="checkout-and-portal-button" type="submit">
        Checkout
      </button>
    </form>
  </section>
);


export default Cart;
