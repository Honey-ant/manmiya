import { reducers } from './reducers';
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";

export const store = createStore(reducers, { 
    products: [],
    cart: [],
    cartOpen: [],
    currentCategory: "",
});

export const useReduxStore = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return [state, dispatch];
};