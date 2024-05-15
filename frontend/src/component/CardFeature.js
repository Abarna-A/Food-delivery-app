import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem,increaseQty } from "../redux/productSlide";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch()

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      category : category,
      image : image
    }))
  };

  return (
    <div className="w-full transition ease-in-out delay-100  hover:scale-105 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg shadow-md  min-w-[200px] max-w-[200px] bg-white rounded hover:shadow-lg drop-shadow-lg py-2 px-2 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className=" min-h-[150px]  flex flex-col justify-center items-center">
              <img src={image} className="h-full rounded-lg w-full" />
            </div>
            <h3 className="font-semibold text-slate-950  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-800  font-medium">{category}</p>
            <p className=" font-bold">
              <span className="text-red-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
          <button
            className="bg-green-900 transition ease-in-out delay-100  hover:scale-105  hover:bg-green-800 hover:text-white bg-opacity-70 backdrop-blur-lg rounded-xl drop-shadow-lg py-0.5 mt-2 text-white rounded  w-full"
            onClick={handleAddCartProduct}
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
