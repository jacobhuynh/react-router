import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/projects", element: <Projects/>},
  {path: "/about", element: <About/>},
  {path: "/contact", element: <Contact/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
