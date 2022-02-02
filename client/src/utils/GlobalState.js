import { reducer } from './reducers';
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";

export const store = createStore(reducer, { 
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
});

export const useReduxStore = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return [state, dispatch];
};

// export default createStore(reducer);