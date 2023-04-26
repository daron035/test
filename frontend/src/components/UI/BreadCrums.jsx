import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BreadCrums = (props) => {
  return (
    <div className="flex items-center mb-[13px]">
      <IoIosArrowBack size={18} style={{ color: "#777777" }} />
      <Link to=".." style={{ textDecoration: "none", color: "#777777" }}>
        {props.name}
      </Link>
    </div>
  );
};

export default BreadCrums;
