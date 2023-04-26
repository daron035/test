import React from "react";
import { Outlet } from "react-router-dom";
import List from "../components/List";
import PDetail from "../components/PDetail";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider animated";
import Slider_small from "../components/Slider_small";
// import Slider from "../components/Slider without animations";
import MyHeader from "../components/snippets/Header";
import Navbar from "../components/snippets/Navbar";
import Navbar2 from "../components/snippets/Navbar2";

function Temp() {
  return (
    <div>
      <Slider />
      <div className="w-[1180px] max-w-full mx-auto px-[40px]">
        <Slider_small />
      </div>
      <div>asdfasdf</div>
      <Outlet />
    </div>
  );
}

// function Temp() {
//   const hr = {
//     display: "block",
//     height: "1px",
//     border: "0",
//     borderTop: "1px solid #ccc",
//     margin: "1em 0",
//     padding: "0",
//   };

//   // <hr style={hr} />
//   return (
//     <div>
//       <Navbar2 />
//       <List />
//       <Outlet />
//     </div>
//   );
// }

// Product Detail
// function Temp() {
//   return (
//     <div>
//       <Navbar2 />
//       <PDetail />
//     </div>
//   );
// }

// Common
// function Temp() {
//   return (
//     <div>
//       <Navbar2 />
//       <Outlet />
//     </div>
//   );
// }

export default Temp;

// <MyHeader />

// HOME PAGE
