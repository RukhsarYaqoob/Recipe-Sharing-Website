import React, { useContext } from 'react'
import { recipes } from '../foodItem'
import RecipesGrid from "../components/RecipesCard";
import CategorySection from "../components/CategorySection";
import { dataContext } from '../context/UserContext';

const BrowseRecipes = () => {
   let {cate,setCate,input} = useContext(dataContext)
  return (
    <>
    {cate.length > 0 ? (
       <div className="pt-5">
      <h2 className="text-2xl p-6 font-bold">Browse Recipes</h2>
      {!input ? <CategorySection /> : null}
      <div className="w-full grid grid-cols-1 px-5 mb-10 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {cate.map((item) => (
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
    ) : <div className='text-center pt-5 text-2xl text-[#212529] dark:text-[#fffcf2] font-bold'>No Recipe Found</div>}
    </>
   
  )
}

export default BrowseRecipes