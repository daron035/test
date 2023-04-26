import React, { useState } from "react";
import styled from "styled-components";
import { Divider, Grid } from "@mui/material";

import i1 from "../static/p01.jpg";
import Slider_small from "./Slider_small";
import product from "./data";
const count = [1, 1, 1, 1, 1, 1, 1];

const Container = styled.div`
  width: 1184px;
  max-width: 100%;
  margin: 0 auto;
`;

const PDetail = () => {
  const [active, setActive] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  // console.log("active", active);
  console.log("activeItem", activeItem);

  function activeButton(value) {
    // console.log("index", value);
    setActive(value);
    console.log("active", active);
  }

  return (
    <div>
      <Container>
        <div className="px-[20px] flex">
          <div className="flex-grow bg-red-300">
            {/* предпоказ слева */}
            <div className="flex sticky top-0">
              {/* маленькие картики слева */}
              <div className="max-w-[80px]">
                <div className="bg-blue-300">
                  <img src={i1} alt="afasd" className="" />
                </div>
                <div className="bg-blue-300">
                  <img src={i1} alt="afasd" className="" />
                </div>
                <div className="bg-blue-300">
                  <img src={i1} alt="afasd" className="" />
                </div>
              </div>

              <div className="bg-gray-300 h-auto my-auto mx-[20px]">
                <img
                  src={i1}
                  alt="afasd"
                  className="ml-auto w-[580px] max-w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[420px] pt-[40px] w-[325px] flex-none bg-green-300">
            <div className="pr-[20px] pb-[15px] border-b border-slate-300">
              <h1 className="text-2xl ">
                NNIKE NIKE IKE DUNK LOW WHITE BLACK SDFSDF NNIKE NIKE IKE DUNK
                LOW WHITE BLACK SDFSDF
              </h1>
            </div>
            <div className="flex justify-between px-0.5 items-center h-[52px] py-[10px]">
              <span className="font-bold flex-none ">Available Sizes:</span>
              <div className="flex border rounded-lg divide-x">
                {["RU SIZES", "EU SIZES", "UK SIZES"].map((item, index) => (
                  <span
                    key={item + index}
                    className={`text-sm font-medium py-[8px] px-[10px] flex-none cursor-pointer ${
                      active === index ? "bg-gray-300/50 " : ""
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
                {product.map((item, index) => (
                  <div key={item + index} className="w-1/5 max-w-full p-0.5">
                    <div
                      className={`w-full border cursor-pointer rounded-lg h-[55px] flex items-center justify-center ${
                        activeItem === index ? "bg-gray-300/50 " : ""
                      }`}
                      onClick={() => setActiveItem(index)}
                    >
                      {item.id}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3">145</div>
            </div>
            <div className="bg-red-700 h-14 flex items-center justify-center">
              ADD TO CART
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
