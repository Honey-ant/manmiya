import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useReduxStore } from "../../utils/GlobalState";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // };

  return (
    // <HorizontalScroll>
    <div className=" container ">
      <div className="center container m">
        <h2 className=" my-4 titles "> Shop </h2>
      </div>
      {/* <CategoryMenu /> */}

        {state.products.length ? (
   
          <div className=" flex-row my-2 proList">
            {filterProducts().map((product) => 
            (
              <ProductItem className=""
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
      )
       : (
        <h3 className="mb-2 container">Just a second</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}

      <Cart/>
    </div>
  // {/* </HorizontalScroll> */}
  );
}

export default ProductList;
