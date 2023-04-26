import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Divider, Grid } from "@mui/material";
import "../styles/PDetail.scss";

import i1 from "../static/p01.jpg";
import Slider_small from "./Slider_small";
import product from "./data";
import s from "./size.js";
const count = [1, 1, 1];

const Container = styled.div`
  width: 1184px;
  max-width: 100%;
  margin: 0 auto;
`;

const PDetail = () => {
  const [active, setActive] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  // console.log("active", active);
  // console.log("activeItem", activeItem);

  function asdf(v, value, country_value) {
    setActiveItem(v);
    console.log(country_value);
    console.log(value);
    // onChange
  }
  const [state, setState] = useState();
  const onChange = (e) => {
    let value = e.target.value;
    setState(value);
  };

  function activeButton(value) {
    // console.log("index", value);
    setActive(value);
    console.log("active", active);
  }
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <Container>
        <div className="px-[20px] flex">
          <div className="flex-grow">
            {/* предпоказ слева */}
            <div className="flex sticky top-[70px]">
              {/* маленькие картики слева */}
              <div className="max-w-[80px] mt-[40px]">
                {/* ИСПРАВИТЬ НА BORDER TRANSPARENT*/}
                {count.map((img, index) => {
                  return (
                    <div
                      className={`bg-blue-300 cursor-pointer ${
                        activeImage === index
                          ? "border-[1px] border-[#959595]"
                          : "border-[1px] border-white"
                      }`}
                      // className={`text-sm font-medium py-[8px] px-[10px] flex-none cursor-pointer ${
                      //   active === index ? "bg-gray-300/50 " : ""
                      // }`}

                      key={index}
                      onClick={() => setActiveImage(index)}
                    >
                      <img src={i1} alt="afasd" className="" />
                    </div>
                  );
                })}
              </div>
              {/* главная картинка*/}
              <div className="bg-gray-300 h-auto my-auto mx-auto">
                <img
                  src={i1}
                  alt="afasd"
                  className="ml-auto w-[580px] max-w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[420px] pt-[40px] w-[325px] flex-none ">
            <div className="pr-[20px] pb-[15px] border-b border-[#EDEDED]">
              <div className="mb-[11px] text-[#777777] text-sm">
                NIKE / CW1590-100
              </div>
              <h1
                className="text-4xl font-sans tracking-widest font-bold uppercase"
                style={{ fontFamily: "Segoe UI" }}
              >
                <span className="segoe-bold">
                  NIKE DUNK LOW RETRO BLACK WHITE
                </span>
              </h1>
            </div>
            <div className="flex justify-between px-0.5 items-center h-[52px] py-[10px]">
              <span className="font-bold flex-none ">Available Sizes:</span>
              <div className="flex border rounded-lg divide-x">
                {["RU SIZES", "EU SIZES", "UK SIZES"].map((item, index) => (
                  <span
                    key={item + index}
                    className={`text-xs font-sans text-[#777777] font-semibold py-[8px] px-[10px] flex-none cursor-pointer ${
                      active === index ? "bg-[#EDEDED] text-black" : ""
                    }`}
                    onClick={() => setActive(index)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="max-w-full">
              <div className="flex flex-wrap">
                {/* кнопка map */}
                {s.size.map((i, index) => (
                  <div key={i + index} className="w-1/5 max-w-full p-0.5">
                    <div
                      className={`w-full border border-[#D0D0D0] cursor-pointer rounded-lg h-[55px] flex items-center justify-center ${
                        activeItem === index ? "bg-[#101010] text-white" : ""
                      }`}
                      // onClick={() => setActiveItem(index)}
                      onClick={() => asdf(index, i[active], active)}
                      // onChange={onChange}
                      // value={i[active]}
                    >
                      {i[active]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[25px] text-3xl font-bold tracking-wider">
                $245
              </div>
            </div>
            <div>
              <div
                className="bg-[#1BC49F] text-[#FFFFFF] tracking-widest text-lg font-medium uppercase hover:bg-[#15977B] duration-200 mt-[20px] h-14 flex items-center justify-center"
                // onClick={() => console.log(s.size[0][0],active)}>
                onClick={() => console.log(active, s.size[activeItem][active])}
              >
                ADD TO CART
              </div>
              <div
                className="text-black tracking-widest text-sm uppercase border-[1px] border-[#EDEDED] hover:border-[#BABABA] duration-200 mt-[20px] h-14 flex items-center px-[23.4px] py-[15.6px]"
                // onClick={() => console.log(s.size[0][0],active)}>
                onClick={() => console.log(active, s.size[activeItem][active])}
              >
                sell this trainer
              </div>
            </div>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat Lorem ipsum
            dolor sit amet, officia excepteur ex fugiat Lorem ipsum dolor sit
            amet, officia excepteur ex fugiat Lorem ipsum dolor sit amet,
            officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
            nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
            cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
            Lorem est aliquip amet voluptate voluptate dolor minim nulla est
            proident. Nostrud officia pariatur ut officia. Sit irure elit esse
            ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem
            duis laboris cupidatat officia voluptate. Culpa proident adipisicing
            id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis. reprehenderit enim labore culpa sint ad nisi
            Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
            excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident.
            Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
            sunt ex occaecat reprehenderit commodo officia dolor Lorem duis
            laboris cupidatat officia voluptate. Culpa proident adipisicing id
            nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis. reprehenderit enim labore culpa sint ad nisi
            Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
            excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident.
            Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
            sunt ex occaecat reprehenderit commodo officia dolor Lorem duis
            laboris cupidatat officia voluptate. Culpa proident adipisicing id
            nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis. reprehenderit enim labore culpa sint ad nisi
            Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
            excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident.
            Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
            sunt ex occaecat reprehenderit commodo officia dolor Lorem duis
            laboris cupidatat officia voluptate. Culpa proident adipisicing id
            nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
            reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
            culpa et culpa duis.
          </div>
        </div>
        <div className="border-gray-300">
          <Slider_small />
        </div>
      </Container>
    </div>
  );
};

export default PDetail;
