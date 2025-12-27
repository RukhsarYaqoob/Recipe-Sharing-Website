import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../context/UserContext";
import RatingStar from "./RatingStar";

const RecipeDetail = () => {
  let { cate } = useContext(dataContext);
  const { id } = useParams();

  const recipe = cate.find((r) => r.id == Number(id));

  if (!recipe)
    return <h2 className="text-center text-red-600">Recipe not found</h2>;

  return (
    <div className=" md:pt-5 p-5 bg-gray-50 flex justify-center min-h-screen text-gray-800">
      <div className="w-full max-w-6xl p-5 bg-white rounded-3xl shadow-md flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="w-full flex justify-center items-start md:w-1/2">
          <img className="w-full md:max-w-[95%]" src={recipe.image} alt="" />
        </div>
        <div className="w-full flex flex-col justify-start gap-3 md:gap-5 md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold">{recipe.name}</h1>
          <RatingStar rating={recipe.rating} />
          <h3 className="text-xl font-semibold">Ingredients</h3>
          <ul className="list-disc pl-6">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold">Instructions</h3>
          <ol className="list-decimal pl-6">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
