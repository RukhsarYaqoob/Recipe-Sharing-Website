import React, { createContext, useState} from 'react'
import { recipes } from '../foodItem'
export const dataContext = createContext()
function UserContext({children}) {
  const [cate, setCate] = useState(recipes)
  const [input, setInput] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All");
  let data = {
    input,
    setInput,
    cate,
    setCate,
    selectedCategory,
    setSelectedCategory,
  }
  return (
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
  )
}

export default UserContext