import React, { useContext } from "react";
import home_image from "../assets/home_image.jpg";
import { Link } from "react-router-dom";
import CategorySection from "../components/CategorySection";
import RecipesGrid from "../components/RecipesCard";
import { dataContext } from "../context/UserContext";

const Home = () => {
  let { cate, setCate, input } = useContext(dataContext);
  return (
    <div className="relative w-full h-full bg-[#f8f9fa] text-[#212529]">
      {!input ? (
        <div>
          <div
            className="relative w-full h-95 before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-40 bg-cover bg-center flex flex-col items-center justify-center text-black"
            style={{ backgroundImage: `url(${home_image})` }}
          >
            <div className="space-x-4 text-white text-sm md:text-lg font-medium z-5 ">
              <Link
                to="/browse"
                className="bg-orange-500 px-3 md:px-6 py-3 md:py-4 text-center rounded-xl"
              >
                Browse Recipes
              </Link>
              <Link
                to="/submit"
                className="bg-orange-500 text-center px-3 md:px-6 py-3 md:py-4 rounded-xl"
              >
                Submit a Recipe
              </Link>
            </div>
          </div>
          <CategorySection />
        </div>
      ) : null}
      {cate.length > 0 ? (
        <div className="px-5 pb-10">
        {/* Limited Recipes (Home Preview) */}
        <h3 className="text-xl md:text-3xl font-bold mt-5 mb-4">Popular Recipes</h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {cate.slice(0,6).map((item) => (
            <RecipesGrid
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              category={item.category}
              disc={item.description}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      ):<div className='text-center pt-5 text-2xl text-[#212529] dark:text-[#fffcf2] font-bold'>No Recipe Found</div>}
      
    </div>
  );
};

export default Home;
