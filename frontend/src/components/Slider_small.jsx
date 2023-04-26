import React, { useState } from "react";

import img from "../static/p01.jpg";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Slider_small = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [styleNext, setStyleNext] = useState({
  });

  const a = ~~(count.length / 5) // 3
  
  const movePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? a - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

    if (currentIndex === 0) {
      setStyleNext({
        transform: "translateX(-200%)",
        transition: "transform 1s",
      });
    } else if (currentIndex === 1) {
      setStyleNext({
        transform: "translateX(0%)",
        transition: "transform 1s",
      });
    } else if (currentIndex === 2) {
      setStyleNext({
        transform: "translateX(-100%)",
        transition: "transform 1s",
      });
    }
  };
  // console.log(~~(15 / 5));

  const moveNext = () => {
    const isLastSlide = currentIndex === ~~(count.length / 5) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    if (currentIndex === 0) {
      setStyleNext({
        transform: "translateX(-100%)",
        transition: "transform 1s",
      });
    } else if (currentIndex === 1) {
      setStyleNext({
        transform: "translateX(-200%)",
        transition: "transform 1s",
      });
    } else if (currentIndex === 2) {
      setStyleNext({
        transform: "translateX(0%)",
        transition: "transform 1s",
      });
    }
  };

  return (
    <div className="max-w-[1100px] pt-[40px]">
      {/* header slider w arrows */}
      <div className="flex justify-between py-[20px]">
        <div className="text-xl font-bold">MOST POPULAR</div>
        <div className="flex">
          <div className="pr-5" onClick={movePrev}>
            left
          </div>
          <div className="pl-5" onClick={moveNext}>
            right
          </div>
        </div>
      </div>
      {/* обертка слайдера / обозначение размеров div */}
      <div className="w-[1100px] max-w-full h-[316px] relative overflow-hidden pb-[40px]">
        {/* непосредственно слайдер */}
        <div
          className="flex"
          style={styleNext} // initial state of translateX
        >
          {count.map((item, index) => {
            return (
              <div
                key={index}
                className="transition hover:-translate-y-2 duration-300 w-[20%] h-auto"
              >
                <div
                  className="w-[222px] max-w-full h-auto"
                  onClick={() => console.log(index)}
                >
                  <img src={img} alt="sdfsdf" />
                </div>
                <div className="text-center font-bold">name</div>
                <div className="text-center">{index}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider_small;
