import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Details from "./components/details/Details"
function App() {


  return (
    <>
      
      <Navbar/> 
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/Details/:id"  element={<Details/>} />
        </Routes>
        </BrowserRouter>
      <div className="  ">
      
{/* <Home></Home> */}
<Footer />

      
      </div>
    </>
  );
}

export default App;
