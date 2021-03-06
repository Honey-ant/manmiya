import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useReduxStore } from "../../utils/GlobalState";

import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import './style.css';

function PrintItem(item) {
  const [state, dispatch] = useReduxStore();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="col-10 card px-1 py-4 my-3 col-xs-12 proList">
      <div className="">
        <Link to={`/prints/${_id}`}>
          <img className="pro" alt={name} src={`/images/${image}`} />
          <h4 className="py-3 ">{name}</h4>
        </Link>
        <div>
          <div>
            {quantity} {pluralize('item', quantity)} in stock
          </div>
          {/* <span>${price}</span> */}
        </div>
        {/* <button onClick={addToCart}>Add to cart</button> */}
      </div>
    </div>
  );
}

export default PrintItem;