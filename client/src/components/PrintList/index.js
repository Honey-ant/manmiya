import React, { useEffect } from 'react';
import PrintItem from '../Print';
import { useReduxStore } from "../../utils/GlobalState";

import HorizontalScroll from 'react-horizontal-scrolling'

// import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRINTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';

import { QUERY_PRINTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/gif.gif';

function PrintList() {
  const [state, dispatch] = useReduxStore();
  
  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRINTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRINTS,
        prints: data.prints,
      });
      data.print.forEach((print) => {
        idbPromise('prints', 'put', print);
      });
    } else if (!loading) {
      idbPromise('prints', 'get').then((prints) => {
        dispatch({
          type: UPDATE_PRINTS,
          prints: prints,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterPrints() {
    if (!currentCategory) {
      return state.prints;
    }

    return state.prints.filter(
      (print) => print.category._id === currentCategory
    );
  }

  return (
    // <HorizontalScroll>
    <div className="my-3  proList">
      {/* <h2> Browse through the Prints and Originals </h2> */}
      {state.products.length ? (
        <div className="flex-row">
          {filterPrints().map((print) => (
            <PrintItem
              key={print._id}
              _id={print._id}
              image={print.image}
              name={print.name}
              details={print.details}
              size={print.size}
              medium={print.meduim}
              price={print.price}
              quantity={print.quantity}
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

export default PrintList;
