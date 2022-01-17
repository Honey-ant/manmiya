import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import giki from '../assets/c.jpg';

const Home = () => {
  return (
    <>
    <img src={giki} className=" img-fluid" alt="Card image cap" style={{height:"10%"}}/>
    <div className="container">
      <div className="intro mb-1">
        <p className="my-2">
          Munmia Bedford is a Bunuba artist from the Kimberly Western Australia.
        </p>
        <p>
          They currently live on Boon Wurrong land
        </p>
        <h4 className="ann">
          Purchasing will be available soon.
          For now, just get to know me.
        </h4>
      </div>
      <CategoryMenu />
      <ProductList />
      <Cart />
      
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default Home;
