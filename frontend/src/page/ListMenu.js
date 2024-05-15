import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import { Link } from "react-router-dom";
import logo from "../assest/logo12.png";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
 
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  return (
    <div className="p-2 min-h-screen bg-blue-200 rounded-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 md:p-4">
      <AllProduct heading={""}/>
    </div>
    
  );
};

export default Home;
