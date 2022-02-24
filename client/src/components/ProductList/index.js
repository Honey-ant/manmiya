import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
// import { useDispatch, useSelector } from 'react-redux';
import HorizontalScroll from 'react-horizontal-scrolling'

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';

import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/gif.gif';

import graphic4 from '../../assets/graphic4.png';

function ProductList() {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const [ state, dispatch ] = useStoreContext();

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
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    // <HorizontalScroll>
    <div className="my-3  proList space-between">
      {/* <h2> Browse through the Prints and Originals </h2> */}

      {state.products.length ? (
        <div className="flex-row">
                {/* <img src={graphic4} className="graphic" alt=" Responsive image" /> */}
          {filterProducts().map((product) => (
            <ProductItem
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
        <h3 className="mb-2">Just a second</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  // {/* </HorizontalScroll> */}
  );
}

export default ProductList;
