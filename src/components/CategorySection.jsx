import React, { useContext } from "react";
import { categories, recipes } from "../foodItem";
import { dataContext } from "../context/UserContext";

const CategorySection = () => {
   let {cate,setCate,input} = useContext(dataContext)
   function filter(category) {
    if (category ==='All') {
      setCate(recipes)
    }else {
    let newList =  recipes.filter((item) => item.category === category)
    setCate(newList)
    }
  }
  return (
    <div className="p-6 flex flex-col gap-4">
      <h3 className="text-xl md:text-3xl font-bold">Featured Recipe Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => filter(cat)}
            className={`cursor-pointer rounded p-3 text-center shadow-md font-medium transition`}>
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
