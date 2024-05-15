import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import { Link } from "react-router-dom";
import logo from "../assest/FRONT.png";



const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1,5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "Biryani" || "Fried Rice",
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
    
    <div className="p-2 h-full min-h-screen w-full bg-blue-200 rounded-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 md:p-4"    >
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              alt="Doorstep Delivery"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
           Hungry?{" "}<br></br>
            <span className=" text-green-900 text-"> Order in Seconds, Delivered in Minutes!</span>
          </h2>
          <p className="py-3 text-base "></p>
          <div className="p-6 rounded-lg text-gray-900">
  <h2 className="text-4xl   font-extrabold mb-4">
    <span className="text-yellow-500 ">SAVOR </span>
    <span className="text-blue-800">THE </span>
    <span className="text-indigo-700">FLAVOR, </span>
    <span className="text-green-500">SWIFTLY!</span>
  </h2>
  <h4>
  Bolt Foods, a renowned establishment nestled in the heart of Coimbatore, is more than just a restaurant - it's an epicurean haven. Our commitment is centered around crafting and delivering culinary masterpieces within a generous 30-kilometer radius, guaranteeing not just meals, but experiences, promptly and efficiently to your doorstep.
  </h4>
</div>


<button className="mt-8 transition ease-in-out delay-100 hover:scale-110 font-bold bg-green-900 text-slate-200 px-4 py-2 rounded-md">
        <Link to="/listmenu" className="text-slate-200">
          Order Now
        </Link>
      </button>
          
          </div>
          <div
  className="relative h-44.5 w-50"
  style={{
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Blurred Background */}
  <div
    className="absolute p-5  ml-80 left-40 inset-4 bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 "
    style={{
      position: 'absolute',
    }}
  ></div>
  
  {/* Image in front */}
  <img
    src={logo}
    alt="EveryDay Eats"
    className="ml-60 h-[550px] transition ease-in-out delay-100  hover:scale-110  rounded-md"
    style={{
      position: 'relative',
      zIndex: 1,
    }}
  />
</div>



 

        
      </div>

       <div className="">
        <div className="flex w-full  items-center">
          <h2 className="font-bold  text-2xl text-slate-800 mb-4">
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        
        <div
          className="flex pt-8 gap-5  overflow-scroll overflow-hidden scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"Fried Rice"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>
      

      <AllProduct heading={""}/>
    </div>
    
  );
};

export default Home;
