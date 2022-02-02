import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useReduxStore } from "../../utils/GlobalState";
// import { useDispatch, useSelector } from 'react-redux';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const [ state, dispatch ] = useReduxStore();

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
    <div >
      {/* <h2 className="py-2">Original or print?</h2> */}
      {categories.map((item) => (
        <button className="cat"
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
