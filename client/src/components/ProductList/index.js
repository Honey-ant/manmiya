import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useReduxStore } from "../../utils/GlobalState";

import HorizontalScroll from 'react-horizontal-scrolling'
// import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';

import CategoryMenu from '../CategoryMenu';

import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/gif.gif';

import Cart from "../Cart";

function ProductList() {
  const [state, dispatch] = useReduxStore();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch])
  console.log('Products logged')
  ;

  function filterProducts() { 
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
    console.log('Products Printed')
  }

  return (
    // <HorizontalScroll>
    <div className=" proList ">
      <div className="center container m">
        <h4 className=" my-4 animate-charcter "> Browse through Prints and Originals </h4>
      </div>
      <CategoryMenu />
      {state.products.length ? (
        <div className=" flex-row my-2">
          {filterProducts().map((product) => (
            <ProductItem className="list"
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              details={product.details}
              size={product.size}
              medium={product.meduim}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
        
      ) : (
        <h3 className="mb-2 container">Just a second</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart/>
    </div>
  // {/* </HorizontalScroll> */}
  );
}

export default ProductList;
