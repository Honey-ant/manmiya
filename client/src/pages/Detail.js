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
          <div className="container col-lg-6 mx-auto">
            <div className=''>
              <h2>{currentProduct.name}</h2>
              
              <img
                className="pro "
                src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}
              />
              <p className="my-3 py-3">{currentProduct.description}</p>
              {/* <h6 className="my-2 py-1">{currentProduct.details}</h6> */}
              <div className="row ">
                <h6 className="my-1 py-1 ">{currentProduct.size}, {currentProduct.medium}</h6>
                <h6 className="my-1 py-1 col"></h6>
              </div>
              <p className="my-2 py-2">
                
                <strong>Price:</strong>${currentProduct.price}{' '}
                </p>
                <div className="row">
                    <div className="col">
                        <button className=" button-74 " 
                        onClick={addToCart}>
                          Add to Cart
                          </button>
                      </div>
                      <div className=" col-7">
                        <button
                            className=" button-74 "
                            disabled={!cart.find((p) => p._id === currentProduct._id)}
                            onClick={removeFromCart}
                        >
                          Remove from Cart
                        </button>
                      </div>
                  
                </div>
            </div>
         </div> 
         <div className="my-3 container col-lg-6 mx-auto py-4">
            <Link className="" to="/">??? Back to main page</Link>
         </div>
        </div>
        
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
