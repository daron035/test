import React from "react";
import styled from "styled-components";

import img from "../static/p01.jpg";

// const i =
//   "http://127.0.0.1:8000/media/images/air-jordan-1-chicago_GGzCgzj.jpeg";
const i =
  "https://source.unsplash.com/VWcPlbHglYc";

const Container = styled.div`
  max-width: 100%;
`;

const Image = styled.div`
  height: 25%;
  width: 25%;
`;

const image = {
  width: "354px",
  // max-width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  height: "354px",
  // width: "25%",
  // height: "25%",
};

const ListProduct = () => {
  return (
    <Container className="flex">
      {/* <img src={i} alt="sdfsdf" width={"354px"} height={"354px"} /> */}
      <img src={i} alt="sdfsdf" style={image} />
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
