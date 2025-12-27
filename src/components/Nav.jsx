import { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { dataContext } from "../context/UserContext";
import { recipes } from "../foodItem";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let { input, setInput, cate, setCate, showCart, setShowCard } =
    useContext(dataContext);
  useEffect(() => {
    const newList = recipes.filter((item) =>
      item.name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);
  return (
    <div className="w-full ">
      <nav className="w-full fixed top-0 left-0 z-1000 h-18 bg-[#212529] text-gray-50 flex items-center justify-between px-5 md:px-10 shadow">
        <h1 className="text-xl md:text-2xl font-bold">RecipeHub</h1>
        <div className="flex gap-5">
          <ul className="hidden md:flex gap-6 text-lg font-bold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/browse">Browse Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/submit">Submit Recipe</NavLink>
            </li>
          </ul>
          <div className="hidden md:flex gap-5">
            <Link
              to="/login"
              className="bg-transparent text-white border-2 border-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-orange-500 text-white border-2 border-orange-500 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-orange-600 hover:border-orange-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
  className={`absolute top-18 left-0 w-full bg-[#212529] text-gray-50 flex flex-col items-center font-bold text-lg md:hidden 
  transition-all duration-500 ease-in-out overflow-hidden z-50
  ${menuOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}
>
  <ul className="flex flex-col items-center gap-6 w-full">
    <li>
      <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
    </li>
    <li>
      <NavLink onClick={() => setMenuOpen(false)} to="/browse">
        Browse Recipes
      </NavLink>
    </li>
    <li>
      <NavLink onClick={() => setMenuOpen(false)} to="/submit">
        Submit Recipe
      </NavLink>
    </li>
  </ul>

  {/* 🔽 Mobile Login / Signup */}
  <div className="mt-6 flex flex-col gap-4 w-10/12">
    <Link
      to="/login"
      onClick={() => setMenuOpen(false)}
      className="w-full text-center border-2 border-gray-300 py-2  rounded-full text-white hover:bg-white hover:text-orange-500 transition"
    >
      Login
    </Link>

    <Link
      to="/register"
      onClick={() => setMenuOpen(false)}
      className="w-full text-center bg-orange-500 py-2 rounded-full text-white hover:bg-orange-600 transition"
    >
      Sign Up
    </Link>
  </div>
</div>

      </nav>
      <div className="fixed top-18 left-0 md:mt-18 md:static border-b-2 border-[#212529] w-full md:w-full bg-gray-200 px-7 py-3">
        <input
          type="text"
          placeholder="Search recipes by title or ingredients..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-[#212529] p-2 bg-white rounded w-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
