import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
// import { useStoreContext } from "../../utils/GlobalState";
import { useReduxStore } from "../../utils/GlobalState";
import { useDispatch, useSelector } from 'react-redux';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {

  const [state , dispatch] = useReduxStore();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch])
  console.log('Categories logged')
  ;

  function filterCategories() { 
    if (!categories) {
      return state.categories;
    }

    return state.categories.filter(
      (item) => item.category._id === categories
    );
    console.log('categories Printed')
  }

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
    console.log("categories selected");
  };

  return (
    <div className="container flex-row myb-2">
        {categories.map((item) => (
            <button className="shade white button-74 mx-2"
            key={item._id}
              onClick={() => {
                handleClick(item._id);
              }}
            >
              {item.name}
            </button>   
        ))}
    </div>

    //   <div className="container flex-row myb-2">
    //   {state.categories.length ? (
    //     <div className="flex-row myb-2">
    //     {filterCategories().map((item) => (
    //         <button className="shade white button-74 mx-2"
    //         key={item._id}
    //           onClick={() => {
    //             handleClick(item._id);
    //           }}
    //         >
    //           {item.name}
    //         </button>   
    //     ))}
    //     </div>
    //   )}
    // </div>

  );

}

export default CategoryMenu;
