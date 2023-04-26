import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import img from "../static/p01.jpg";
import Navbar2 from "./snippets/Navbar2";
import BreadCrums from "./UI/account/BreadCrums";

const Container = styled.div`
  width: 780px;
  max-width: 100%;
  margin: 0 auto;
  padding: 64px 40px 100px;
`;
const Wrapper = styled.div``;

const Items = styled.div`
  border: 1px solid #ededed;
  margin: 0 0 20px;
  background-color: white;
`;

const SearchInput = styled.div`
  padding: 20px 40px;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};

const SellingCertainItem = ({ name, year, sku }) => {
  // const navigate = useNavigate();
  // function handleClick() {
  //   navigate("/");
  // }
  const [item, setItem] = useState();
  const query = new URLSearchParams(useLocation().search);
  const style_codes = query.get("style_codes");

  const [products, setProducts] = useState({});
  useEffect(() => {
    // getProducts();
    const fetch = async () => {
      // try {
      //   const allProducts = axios.get(
      //     `${process.env.REACT_APP_API_URL}/api/selling/new/?style_codes=${style_codes}`
      //   );
      //   const response = await axios.get(allProducts);
      //   setItem(response.data);
      //   console.log(item);
      // } catch (err) {
      //   console.error(err);
      // }
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/selling/new/?style_codes=${style_codes}`
        )
        .then((res) => {
          const response = res.data;
          console.log(response);
          setItem(response[0]);
          console.log(item);
        });
    };
    fetch();
  }, []);

  let getProducts = async () => {
    // setIsLoading(true);
    // setTimeout(async () => {
    //   axios
    //     .get(`${process.env.REACT_APP_API_URL}/api/products/`)
    //     .then((response) => {
    //       const allProducts = response.data;
    //       setProducts(allProducts);
    //     })
    //     .catch((err) => console.log(err));
    //   setIsLoading(false);
    // }, 2000);
    // setIsLoading(true);
    // try {
    //   const allProducts = axios.get(
    //     `${process.env.REACT_APP_API_URL}/api/selling/new/?style_codes=${sku}`
    //   );
    //   const response = await axios.all([allProducts]);
    //   console.log(response);
    //   setProducts(response[0].data);
    // } catch (err) {
    //   console.error(err);
    // }
    // const fetch = async () => {
    //   try {
    //     const allProducts = axios.get(
    //       `${process.env.REACT_APP_API_URL}/api/selling/new/?style_codes=${sku}`
    //     );
    //     console.log(allProducts);
    //     const response = await axios.get(allProducts);
    //     console.log(response);
    //     setProducts(response[0].data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // fetch();
    // setIsLoading(false);
  };
  // const handleItemClick = (SKU) => {
  //   console.log("adf");
  // };

  return (
    <div>
      {/* <Navbar2 /> */}
      <Container>
        <div className="pb-[25px]">
          <BreadCrums name="Selling" />
          <div className="text-3xl font-bold pt-[14px]">Sell Items</div>
        </div>
        <Items>
          <SearchInput>
            <div className={``}>
              {item && (
                <Wrapper className="py-6px flex items-center">
                  <img
                    src={item.image}
                    width="104px"
                    height="104px"
                    className="mr-[13px]"
                  />
                  <div className="flex">
                    <div>
                      <span className="font-bold text-xl tracking-wider">
                        {item.name}
                      </span>
                      <p>
                        {item.year_released} | {item.sku}
                      </p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="cursor-pointer hover:text-[#0D3699]">
                      Remove
                    </span>
                  </div>
                </Wrapper>
              )}
            </div>
          </SearchInput>
          <div className="py-[20px] px-[40px] border-t border-[#ededed]">
            <div className="uppercase text-center tracking-wider border-dashed border-[1px] border-[#d0d0d0] py-[15px] px-[23px] hover:border-[#0D3699] transition ease-in-out duration-200 cursor-pointer text-[#0D3699]">
              Selling multiple products? Add another
            </div>
          </div>
        </Items>

        <div className="flex justify-center py-[16.2px] bg-black cursor-pointer">
          {item && (
            <Link
              to={`/account/selling/new/${item.sku}/`}
              style={{ textdecoration: "none", color: "black" }}
            >
              <div className="text-white uppercase tracking-wider text-lg antialiased">
                Next
              </div>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default SellingCertainItem;
