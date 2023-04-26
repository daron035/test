import React from "react";
import Slider from "./Slider animated";
import Slider_small from "./Slider_small";

const HomeSlides = () => {
  return (
    <div>
      <Slider />
      <div className="w-[1180px] max-w-full mx-auto px-[40px]">
        <Slider_small />
      </div>
    </div>
  );
};

export default HomeSlides;
