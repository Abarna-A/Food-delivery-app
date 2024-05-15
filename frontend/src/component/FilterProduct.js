import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div className="gap-7 " onClick={onClick}>
      <div className={`text-3xl bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg" p-5 text-white rounded-lg cursor-pointer ${isActive ? "bg-rose-800 text-white" : "bg-green-900"}`}>
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
