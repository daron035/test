import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import img from "../static/p01.jpg";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const dd2 = {
//   transform: "translateX(-100%)",
//   transition: "transform 1s",
// };

const nextStyle1 = {
  transform: "translateX(-100%)",
  transition: "transform 1s",
};
const nextStyle2 = {
  transform: "translateX(-200%)",
  transition: "transform 1s",
};

// }

const Image = styled.img`
  ${'' /* margin: 0 auto;
  height: 100%;
  max-height: 354px;
  z-index: 0; */}
  width: 222px;
  max-width: 100%;
  height: auto;
`;

const Slider_small = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const pr = (i) => {
    console.log(i);
  };

  const [dd, setDd] = useState({
    // transform: "-translateX(100%)",
    transform: "0",
    transition: "transform 1s",
  });

  const [styleNext, setStyleNext] = useState({
    transform: "0",
    transition: "0",
  });

  const movePrev = () => {
    console.log(currentIndex);
    const isFirstSlide = currentIndex === 0;
    // const newIndex = isFirstSlide ? sliderItems.length - 1 : currentIndex - 1;
    const newIndex = isFirstSlide ? ~~(count.length / 5) - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(newIndex);

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
    // setDd(nextStyle);
    // console.log("sdf");
    console.log(currentIndex);

    const isLastSlide = currentIndex === ~~(count.length / 5) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(newIndex);

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

  useEffect(() => {
    if ((carousel !== null ** carousel.current) !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);
  return (
    <div className="max-w-[1100px] pt-[40px]">
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
          ref={carousel}
          className="flex w-[1180px] max-w-full h-auto"
          style={styleNext}
        >
          {count.map((item, index) => {
            return (
              <div
                key={index}
                className="transition hover:-translate-y-2 duration-300 w-[20%] h-auto"
              >
                <div
                  className="w-[222px] max-w-full h-[222px] max-h-full"
                  onClick={() => console.log(index)}
                >
                  <Image
                    src={img}
                    alt="sdfsdf"
                  />
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
