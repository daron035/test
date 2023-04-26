import React from "react";
import { Outlet } from "react-router-dom";
import SellingList from "../components/SellingList";
import SellingCertainItem from "../components/SellingCertainItem";
import Navbar2 from "../components/snippets/Navbar2";
import SellingListItem from "../components/SellingCertainItem";

function Selling() {
  return (
    <div>
      <Navbar2 />
      <div className="">
        {/* <SellingList /> */}
        {/* <SellingListItem /> */}
        {/* <SellingCertainItem /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Selling;
