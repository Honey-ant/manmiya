import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import giki from '../assets/c.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <img src={giki} className=" img-fluid" alt=" Responsive image" />
    <div className="container">
          
      <div className="intro mb-1">
        <p className="my-2">
          Munmia Bedford is a Bunuba artist from the Kimberly Western Australia.
      
        </p>
        <p className="py-1">
          They currently live on Boon Wurrong land
        </p>
        <p>
          Read about them<Link to="/about">here</Link>
        </p>
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
