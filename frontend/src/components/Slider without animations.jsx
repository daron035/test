import React, { useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { sliderItems } from "./data";


const Container = styled.div`
  width: 100%;
  padding: 56px 0;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  height: 430px;
  width: 1180px;
  padding: 0 40px;
`;
const Arrow = styled.div`
  width: 13;
  height: 32;
  cursor: pointer;
  marginRight: 32
`;

const WrapperArrow = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 40px;
`;

const NumPage = styled.div``;

const HeadName = styled.div``;

const ShopButton = styled.div`
  width: 156px;
  color: white;
  margin-left: auto;
  background-color: black;
  border: 1px solid #ededed;
  text-align: center;
`;

const ShopButton2 = styled.div`
  width: 156px;
  color: white;
  background-color: black;
  border: 1px solid #ededed;
  text-align: center;
`;

const Slide = styled.div``;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliderItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <Wrapper >
        <WrapperArrow>
          <Arrow
            style={{ marginRight: 32 }}
            direction="left"
            onClick={goToPrevious}
          >
            <KeyboardArrowLeftIcon sx={{ fontSize: 32 }} />
          </Arrow>
          <NumPage>
            <span className="text-3xl font-semibold mr-2">
              {currentIndex + 1}
            </span>
          </NumPage>
          <NumPage className="relative">
            <span className="text-xl font-medium absolute bottom-0 mr-8">
              /0{sliderItems.length}
            </span>
          </NumPage>
          <Arrow className="ml-16" direction="right" onClick={goToNext}>
            <KeyboardArrowRightIcon sx={{ fontSize: 32 }} />
          </Arrow>
        </WrapperArrow>

        <Slide className={`absolute w-[1100px]`}>
          <div
            className="absolute pt-[60px] h-[350px] w-[706px]"
          >
            <img src={sliderItems[currentIndex].image} className=" " />
          </div>
          <HeadName className="relative">
            <div className="text-right">
              <div className="text-3xl font-bold tracking-[.2em]">
                {sliderItems[currentIndex].title}
              </div>
              <div className="mb-[20px] text-xl font-light">THE COLLECTION</div>
              <ShopButton2 className="font-medium text-base tracking-widest py-[19px] ml-auto">
                SHOP NOW
              </ShopButton2>
            </div>
          </HeadName>
        </Slide>

      </Wrapper>
    </Container>
  );
};

export default Slider;
