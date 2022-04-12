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


  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
    console.log("categories selected");
  };

  return (
    <div className="container flex-row myb-2">
      {/* {state.categories.length ? ()} */}
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
  );

}

export default CategoryMenu;
