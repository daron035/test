import React from "react";
import styled from "styled-components";

import i1 from "../static/p01.jpg";

const i2 =
  "http://127.0.0.1:8000/media/images/air-jordan-1-chicago_GGzCgzj.jpeg";
const i3 = "https://source.unsplash.com/VWcPlbHglYc";

const Container = styled.div`
  max-width: 100%;
  background-color: white;
`;

// const image = {
//   width: "100%",
//   height: "100%",
//   maxWidth: "354px",
//   maxHeight: "354px",
// };
const Image = styled.img`
  ${
    "" /* margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 354px;
  max-height: 354px;
  z-index: 0; */
  }
  width: 350px;
  margin: 0 auto;
`;

const ListProduct = ({ pr }) => {
  return (
    <Container className="" onClick={() => console.log(pr)}>
      {/* <img src={i} alt="sdfsdf" width={"354px"} height={"354px"} /> */}
      {/* <img src={i1} alt="sdfsdf" style={image} /> */}
      <div className="overflow-hidden">
        <Image src={i1} alt="sdfasf" className="hover:scale-105 duration-700" />
      </div>

      <div className="text-center mb-[15px] z-50">NAME</div>
      <div className="text-center pb-[60px]">price {pr}</div>
      {/* <Image src={i} alt="fsdf" />  */}
    </Container>
  );
};

export default ListProduct;

{
  /* <img src={i} alt="sdfsdf" width={"354px"} height={"222px"} />
<Image src={i} alt="fsdf" /> */
}

// <Container className="flex">
//   <img src={img} alt="sdfsdf" width={"10%"} height={"10%"} />
//   <img src={img} alt="sdfsdf" width={"222px"} height={"222px"} />
//   <img src={i} alt="sdfsdf" width={"222px"} height={"222px"} />
//   <Image src={i} alt="fsdf" />
// </Container>

// <Image
//   src={img}
//   alt="sdfsdf"
//   className="w-[222px] max-w-full h-[222px] max-h-full z-10"
// />
