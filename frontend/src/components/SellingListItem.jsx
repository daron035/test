import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";

import img from "../static/p01.jpg";

const Container = styled.div`
  width: 780px;
  max-width: 100%;
  margin: 0 auto;
  padding: 6px 0;
  ${"" /* padding: 64px 40px 100px; */}
  /* padding: 20px; */
  background-color: white;
  border: 1px;
  border-color: #d4d4d4;
  border-top-style: dotted;
  /* border-right-style: solid; */
  /* border-left-style: solid; */
`;

const SearchInput = styled.div`
  border: 1px solid silver;
  margin: 0 0 20px;
  padding: 30px 40px;
`;

const Suggestions = styled.div`
  width: 700px;
  max-width: 100%;
  padding: 20px;
`;

const Item = styled.div``;

// border-rose-500

const SellingListItem = ({ key, name, sku, year, callbackStringParams }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const navigate = useNavigate();
  // function handleClick() {
  //   navigate("/");
  // }
  // // const [sku, setSku] = useState({});
  // const query = new URLSearchParams(useLocation().search);
  // const style_codes = query.get("style_codes");
  //
  // const [activeButton, setButton] = useState(false);
  // let [searchParams, setSearchParams] = useSearchParams();
  //
  // const getQuery = searchParams.get("style_codes") || false;
  // // console.log(getQuery);
  //
  // let [products, setProducts] = useState([]);
  // let [isLoading, setIsLoading] = useState(false);
  // // console.log(products)
  //
  // useEffect(() => {
  //   // getProducts();
  //   // console.log(getQuery);
  // }, []);
  //
  // let getProducts = async () => {
  //   setIsLoading(true);
  //   setTimeout(async () => {
  //     axios
  //       .get(`${process.env.REACT_APP_API_URL}/api/products/`)
  //       .then((response) => {
  //         const allProducts = response.data;
  //         setProducts(allProducts);
  //       })
  //       .catch((err) => console.log(err));
  //     setIsLoading(false);
  //   }, 500);
  //
  //   // setIsLoading(true);
  //   // try {
  //   //   const allProducts = axios.get(
  //   //     `${process.env.REACT_APP_API_URL}/api/selling/new/?style_codes=${sku}`
  //   //   );
  //   //   const response = await axios.all([allProducts]);
  //   //   console.log(response);
  //   //   setProducts(response[0].data);
  //   // } catch (err) {
  //   //   console.error(err);
  //   // }
  //   // setIsLoading(false);
  // };

  return (
    <Container>
      <div className="py-6px flex items-center">
        <img src={img} width="70px" height="70px" className="mr-[12px]" />
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-[#777777]">
            {year} | {sku}
          </div>
        </div>
        <div className="ml-auto">
          <span
            className="cursor-pointer text-sm"
            onClick={() => callbackStringParams(sku)}
          >
            Select Product
          </span>
        </div>
      </div>
    </Container>
  );
};

export default SellingListItem; // {products.map((item) => (
//   <SellingCertainItem key={item.id}/>
// ))}
