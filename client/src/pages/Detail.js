import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useReduxStore } from "../utils/GlobalState";

import Cart from '../components/Cart';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
// import { useStoreContext } from "../utils/GlobalState";
import spinner from '../assets/gif.gif';

function Detail() {
  const [state, dispatch] = useReduxStore();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };



  return (
    <>
    
      {currentProduct && cart ? (
        <div className="container my-3 py-3">
          <Link className="my-3" to="/">← Back to main page</Link>

          <h2>{currentProduct.name}</h2>
          
          

          <img
            className="pro"
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
          <p className="my-3 py-3">{currentProduct.description}</p>
          {/* <h6 className="my-2 py-1">{currentProduct.details}</h6> */}
          <h6 className="my-1 py-1">{currentProduct.size}</h6>
          <h6 className="my-1 py-1">{currentProduct.medium}</h6>

          <p className="my-2 py-2">
            
            <strong>Price:</strong>${currentProduct.price}{' '}
            </p>
            <div className="my-2 py-1">
              <p>
                {/* <button onClick={A3}>A3</button> */}
                <button className="shade white button-74 animate-charcter" onClick={addToCart}>Add to Cart</button>
                <button
                    className="shade white button-74 animate-charcter"
                    disabled={!cart.find((p) => p._id === currentProduct._id)}
                    onClick={removeFromCart}
                >
                  Remove from Cart
                </button>
              </p>
            </div>
          
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
