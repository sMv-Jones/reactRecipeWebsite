import { createRoot } from 'react-dom/client'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import { Home, Login, Recipe, Register } from "./pages/index.js"
import "./main.css"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/recipe' element={<Recipe />} />
    </Route>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </>
))

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)