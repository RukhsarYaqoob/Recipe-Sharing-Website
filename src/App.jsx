import './App.css'
import Navbar from './components/Nav'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './pages/Footer'
import BrowseRecipes from './pages/BrowseRecipes'
import SubmitRecipes from './pages/SubmitRecipes'
import RecipeDetail from './components/RecipeDetail'
import Login from './pages/Login'
import Register from './pages/Register'

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>} />
        <Route path='/browse' element={<BrowseRecipes/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='submit' element={<SubmitRecipes/>} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Route>
    )
  )

function App() {

  return (
    <>
      <Navbar />
      <main className='mt-35 md:mt-0'>
      <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
