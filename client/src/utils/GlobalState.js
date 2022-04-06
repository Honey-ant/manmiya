import { reducer } from './reducers';
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
// import React, { createContext, useContext } from "react";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//     const [ state, dispatch ] = useProductReducer({
//         products: [],
//         cart: [],
//         cartOpen: false,
//         categories: [],
//         currentCategory: "",
//     })
//     return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//     return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

// old code 
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

export default createStore(reducer);