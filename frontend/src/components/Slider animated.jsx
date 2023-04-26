import React, { useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// import styles from "../../static/css/App.module.css";
import img1 from "../static/p1.png";
import img2 from "../static/p2.avif";
import img3 from "../static/p3.avif";
import img4 from "../static/p4.avif";
import { sliderItems } from "./data";

import styles from "./App.module.scss";
import "./index.scss";

const Container = styled.div`
  ${"" /* width: 1180px; */}
  max-width: 100%;
  ${"" /* margin: 0 auto; */}
  padding: 56px 0;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  width: 1180px;
  max-width: 100%;
  height: 430px;

  padding: 0 40px;
`;
const Arrow = styled.div`
  width: 13;
  height: 32;
  cursor: pointer;
`;
// const Container = styled.div``;
// const Container = styled.div``;

const WrapperArrow = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 40px;
`;

const NumPage = styled.div``;

const HeadName = styled.div``;

const HeadName2 = styled.div``;

const ShopButton = styled.div`
  width: 156px;
  color: white;

  background-color: black;
  border: 1px solid #ededed;
  text-align: center;
`;

const ShopButton2 = styled.div`
  // padding: 16px 33px;
  // padding: 16px auto;
  width: 156px;
  color: white;
  background-color: black;
  border: 1px solid #ededed;
  text-align: center;
`;

const Slide = styled.div``;

const SlideImage = styled.div``;

const indexOfButton = 0;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [styleLeft0, setStyleLeft0] = useState({
    visibility: "visible",
    opacity: "1",
  });
  const [styleLeftHead0, setStyleLeftHead0] = useState({
    visibility: "visible",
    opacity: "1",
    display: "block",
  });
  const [styleLeftButton0, setStyleLeftButton0] = useState({
    visibility: "visible",
    opacity: "1",
  });

  const [styleRight1, setStyleRight1] = useState({
    visibility: "hidden",
    opacity: "0",
    transform: "translateX(-42px)",
  });
  const [styleRightHead1, setStyleRightHead1] = useState({
    visibility: "hidden",
    display: "none",
    opacity: "0",
  });
  const [styleRightButton1, setStyleRightButton1] = useState({
    visibility: "hidden",
    opacity: "0",
  });

  const [styleLeft2, setStyleLeft2] = useState({
    visibility: "hidden",
    opacity: "0",
  });
  const [styleLeftHead2, setStyleLeftHead2] = useState({
    visibility: "hidden",
    display: "none",
    opacity: "0",
  });
  const [styleLeftButton2, setStyleLeftButton2] = useState({
    visibility: "hidden",
    opacity: "0",
  });

  const [styleRight3, setStyleRight3] = useState({
    visibility: "hidden",
    opacity: "0",
    transform: "translateX(-42px)",
  });
  const [styleRightHead3, setStyleRightHead3] = useState({
    visibility: "hidden",
    display: "none",
    opacity: "0",
  });
  const [styleRightButton3, setStyleRightButton3] = useState({
    visibility: "hidden",
    opacity: "0",
  });
  const goToPrevious = () => {
    if (currentIndex === 0) {
      setStyleLeft0(nextLeft);
      setStyleRight3(nextRight);
      setStyleLeftHead0({
        opacity: "0",
        transition: "opacity 1s",
      });
      setStyleRightHead3({
        opacity: "1",
        transition: "opacity 1s",
      });
    } else if (currentIndex === 1) {
      setStyleLeft0(previousLeft);
      setStyleRight1(previousRight);
      setStyleLeftHead0({
        opacity: "1",
        transition: "opacity 1s",
      });
      setStyleRightHead1({
        opacity: "0",
        transition: "opacity 1s",
      });
    } else if (currentIndex === 2) {
      setStyleLeft2(nextLeft);
      setStyleRight1(nextRight);
      setStyleLeftHead2({
        opacity: "0",
        transition: "opacity 1s",
      });
      setStyleRightHead1({
        opacity: "1",
        transition: "opacity 1s",
      });
    } else if (currentIndex === 3) {
      setStyleLeft2(previousLeft);
      setStyleRight3(previousRight);
      setStyleLeftHead2({
        opacity: "1",
        transition: "opacity 1s",
      });
      setStyleRightHead3({
        opacity: "0",
        transition: "opacity 1s",
      });
    }
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (currentIndex === 0) {
      setStyleLeft0(nextLeft);
      setStyleRight1(nextRight);
      // const a = () => setStyleLeftHead0({
      //   opacity: "0",
      //   transition: "opacity 1s",
      //   // display: 'none',
      //   // transition: "opacity 1s display 1s",
      // })
      // a().then(() => console.log('aa'))
      setStyleLeftHead0({
        opacity: "0",
        transition: "opacity 1s",
        // display: 'none',
        // transition: "opacity 1s display 1s",
      });
      // setTimeout(function(){ setStyleLeftHead0({
      //   display: 'none',
      // })},500);
      setStyleRightHead1({
        opacity: "1",
        transition: "opacity 1s",
      });
      // setTimeout(function(){ setStyleRightHead1({
      //   display: 'block',
      // })},500);
      // }
    } else if (currentIndex === 1) {
      setStyleLeft2(previousLeft);
      setStyleRight1(previousRight);
      setStyleLeftHead2({
        opacity: "1",
        transition: "opacity 1s",
      });
      // setTimeout(function(){ setStyleLeftHead2({
      //   display: 'block',
      // })},500);
      setStyleRightHead1({
        opacity: "0",
        transition: "opacity 1s",
      });
      // setTimeout(function(){ setStyleRightHead1({
      //   display: 'none',
      // })},500);
    } else if (currentIndex === 2) {
      setStyleLeft2(nextLeft);
      setStyleRight3(nextRight);
      setStyleRightHead3({
        opacity: "1",
        transition: "opacity 1s",
      });
      // setTimeout(function(){ setStyleRightHead3({
      //   display: 'block',
      // })},500);
      setStyleLeftHead2({
        opacity: "0",
        transition: "opacity 1s",
      });
      // setTimeout(function(){ setStyleLeftHead2({
      //   display: 'none',
      // })},500);
    } else if (currentIndex === 3) {
      setStyleLeft0(previousLeft);
      setStyleRight3(previousRight);
      // indexOfButton = 0
      setStyleLeftHead0({
        opacity: "1",
        transition: "opacity 1s",
        // zIndex: "55",
        // zIndex: "auto",
      });
      // setTimeout(function(){ setStyleLeftHead0({
      //   display: 'block',
      // })},500);
      setStyleRightHead3({
        opacity: "0",
        transition: "opacity 1s",
      });
      // setTimeout(function(){ setStyleRightHead3({
      //   display: 'none',
      // })},500);
    }

    const isLastSlide = currentIndex === sliderItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  let nextLeft = {
    // backgroundColor: "green",
    transform: "translateX(42px)",
    opacity: "0",
    transition: "transform 1s, opacity 1s",
    // opacity: "0.5",
  };

  let nextRight = {
    // backgroundColor: "green",
    display: "block",
    // opacity: "0",
    transform: "translateX(42px)",
    opacity: "1",
    transition: "transform 1s, opacity 1s",
    // opacity: "0.5",
  };

  let previousLeft = {
    // backgroundColor: "green",
    transform: "translateX(-42px)",
    opacity: "1",
    transition: "transform 1s, opacity 1s",
    // opacity: "0.5
  };

  let previousRight = {
    display: "block",
    transform: "translateX(-42px)",
    opacity: "0",
    transition: "transform 1s, opacity 1s",
  };

  const ppp = () => {
    console.log("000");
  };
  console.log(currentIndex);
  return (
    <Container>
      <Wrapper slide={currentIndex}>
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
        <Slide
          // className={`${styles.bb} absolute w-[1100px] max-w-full`}
          className={`bb absolute w-[1100px] max-w-full z-auto`}
          // style={dd}
        >
          {/* <div className={currentIndex === 0 ? "block" : "hidden"}> */}

          <SlideImage
            // className={`${style} absolute pt-[60px] h-[350px] w-[706px] max-w-full`}
            className={`absolute pt-[60px] h-[350px] w-[706px] max-w-full`}
            // style={style00.img}
            style={styleLeft0}
          >
            <img src={img1} className="flex" />
          </SlideImage>
          <HeadName className=" " style={styleLeftHead0}>
            <div className="text-right mr-[40px]">
              <div className="text-3xl font-bold tracking-[.2em]">
                {sliderItems[currentIndex].title}
              </div>
              <div className="mb-[20px] text-xl font-light">0000000000</div>
              <div
                className={
                  currentIndex === 0 ? "block cursor-pointer" : "hidden"
                }
                onClick={() => console.log("0000000")}
              >
                <ShopButton
                  className="font-medium text-base tracking-widest py-[19px] ml-auto cursor-pointer w-[156px] max-w-full"
                  value="0"
                >
                  <span> SHOP NOW</span>
                </ShopButton>
              </div>
            </div>
          </HeadName>
          {/* </div> */}
        </Slide>

        {/* {sliderItems.map((item) => ( */}
        <Slide
          // className={`${styles.bb} absolute w-[1100px] max-w-full`}
          className={`bb absolute w-[1100px] max-w-full`}
          // style={dd}
        >
          <SlideImage
            // className={`${style} absolute pt-[60px] h-[350px] w-[706px] max-w-full`}
            className={`absolute pt-[60px] h-[350px] w-[706px] max-w-full right-0`}
            // style={style00.img}
            style={styleRight1}
          >
            <img src={img2} className="flex" />
          </SlideImage>
          <HeadName className="relative" style={styleRightHead1}>
            <div className="">
              <div className="text-3xl font-bold tracking-[.2em]">
                {sliderItems[currentIndex].title}
              </div>
              <div className="mb-[20px] text-xl font-light">111111111111</div>
              <div className={currentIndex === 1 ? "block" : "hidden"}>
                <ShopButton
                  className="font-medium text-base tracking-widest py-[19px] cursor-pointer"
                  onClick={() => console.log("1111111")}
                >
                  SHOP NOW
                </ShopButton>
              </div>
            </div>
          </HeadName>
        </Slide>

        <Slide
          // className={`${styles.bb} absolute w-[1100px] max-w-full`}
          className={`bb absolute w-[1100px] max-w-full`}
          // style={dd}
        >
          <SlideImage
            // className={`${style} absolute pt-[60px] h-[350px] w-[706px] max-w-full`}
            className={`absolute pt-[60px] h-[350px] w-[706px] max-w-full`}
            // style={style00.img}
            style={styleLeft2}
          >
            <img src={img3} className="flex" />
          </SlideImage>
          <HeadName className="relative " style={styleLeftHead2}>
            <div className="text-right mr-[40px]">
              <div className="text-3xl font-bold tracking-[.2em]">
                {sliderItems[currentIndex].title}
              </div>
              <div className="mb-[20px] text-xl font-light">22222222222</div>
              <div className={currentIndex === 2 ? "block" : "hidden"}>
                <ShopButton
                  className="font-medium text-base tracking-widest py-[19px] ml-auto cursor-pointer w-[156px] max-w-full"
                  value="2"
                  onClick={() => console.log("22222")}
                >
                  SHOP NOW
                </ShopButton>
              </div>
            </div>
          </HeadName>
        </Slide>

        <Slide
          // className={`${styles.bb} absolute w-[1100px] max-w-full`}
          className={`bb absolute w-[1100px] max-w-full`}
          // style={dd}
        >
          <SlideImage
            // className={`${style} absolute pt-[60px] h-[350px] w-[706px] max-w-full`}
            className={`absolute pt-[60px] h-[350px] w-[706px] max-w-full right-0`}
            // style={style00.img}
            style={styleRight3}
          >
            <img src={img4} className="flex" />
          </SlideImage>
          <HeadName className="relative " style={styleRightHead3}>
            <div className="">
              <div className="text-3xl font-bold tracking-[.2em]">
                {sliderItems[currentIndex].title}
              </div>
              <div className="mb-[20px] text-xl font-light">33333333333</div>
              <div className={currentIndex === 3 ? "block" : "hidden"}>
                <ShopButton
                  className="font-medium text-base tracking-widest py-[19px] cursor-pointer"
                  value="3"
                  onClick={() => console.log("33333333")}
                >
                  SHOP NOW
                </ShopButton>
              </div>
            </div>
          </HeadName>
        </Slide>

        {/* <Slide
          // className={`${styles.bb} absolute w-[1100px] max-w-full`}
          className={`bb absolute w-[1100px] max-w-full`}
          style={dd}
        >
            <SlideImage
              // className={`${style} absolute pt-[60px] h-[350px] w-[706px] max-w-full`}
              className={`absolute pt-[60px] h-[350px] w-[706px] max-w-full`}
              // style={style00.img}
              style={styleRight1}
            >
              <img src={sliderItems[1].image} className="flex" />
            </SlideImage>
          <HeadName className="relative ">
            <div className="text-right">
              <div className="text-3xl font-bold tracking-[.2em]">
                {sliderItems[currentIndex].title}
              </div>
              <div className="mb-[20px] text-xl font-light">THE COLLECTION</div>
              <ShopButton className="font-medium text-base tracking-widest py-[19px]">
                SHOP NOW
              </ShopButton>
            </div>
          </HeadName>
        </Slide> */}
      </Wrapper>
    </Container>
  );
};

export default Slider;
// <div className="flex bottom-0 left-0 absolute ">

//
