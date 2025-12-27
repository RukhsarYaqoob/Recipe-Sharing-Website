import React from "react";
import RatingStar from "./RatingStar";
import { useNavigate } from "react-router-dom";

const RecipesGrid = ({id, name, image, disc, category, rating }) => {
  const navigate = useNavigate();
  return (
    <div 
    onClick={() => navigate(`/recipes/${id}`)}
    className="hover:border-2 border-[#212529] rounded-2xl shadow-md transition">
      <img src={image} className="w-full h-60 object-cover rounded-t-2xl" />
      <div className="flex flex-col p-4 gap-2">
        <h4 className="text-lg font-semibold mt-2">{name}</h4>
        <p className="text-sm text-gray-500">{disc}</p>
        <RatingStar rating={rating} />
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
};

export default RecipesGrid;
