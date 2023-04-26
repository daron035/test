import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import {
  useParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { authAxios } from "../utils";
import { addToStockURL } from "../contacts";

import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import img from "../static/p01.jpg";
import Navbar2 from "./snippets/Navbar2";
// import BreadCrums from "./UI/BreadCrums";
import BreadCrums from "./UI/account/BreadCrums";

const Container = styled.div`
  width: 780px;
  max-width: 100%;
  margin: 0 auto;
  padding: 64px 40px 100px;
`;
const Wrapper = styled.div``;
const SearchInput = styled.div`
  border-bottom: 1px solid #ededed;
  background-color: white;
  padding: 20px 40px;
`;

const ListingDetails = styled.div`
  background-color: white;
  border-bottom: 1px solid #ededed;
  padding: 30px 40px;
`;

const ListingPrice = styled.div`
  background-color: white;
  border-bottom: 1px solid #ededed;
  padding: 30px 40px;
`;

const BottomButtons = styled.div`
  background-color: white;
  padding: 30px 40px;
`;

const SellingSellItems = () => {
  const { sku } = useParams();
  const [item, setItem] = useState();
  // console.log(sku);

  useEffect(() => {
    getProducts();
  }, []);

  let getProducts = async () => {
    // setIsLoading(true);
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/selling/new/${sku}`)
      // .get(`http://85.193.81.247/api/products/`)
      .then((res) => {
        // console.log(res);
        const response = res.data;
        console.log(response);
        setItem(response);
        // console.log(item);
        // setProducts(allProducts);
      })
      .catch((err) => console.log(err));
  };
  // setIsLoading(false);
  // const [item, setItem] = useState();

  // const handleAddToStock = async (sku) => {
  //   // const config = {
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     Authorization: `JWT ${localStorage.getItem("access")}`,
  //   //   },
  //   // };
  //   // const variations = handleFormatData(formData)
  //   const body = { sku };
  //   console.log(body)
  //   await axios
  //     .post(`${process.env.REACT_APP_API_URL}/api/add-to-stock/`, body)
  //     // .post(`http://85.193.81.247/api/add-to-cart/`, body, config)
  //     .then((response) => {})
  //     .catch((err) => console.log(err));
  // };
  // console.log("access")
  // console.log(localStorage.getItem("access"))

  const [details, setDetails] = useState({
    sku: sku,
    size: "1",
    number: "1",
    price: 15,
  });

  function increment() {
    setDetails({ ...details, price: details.price + 5 });
  }

  function decrement() {
    setDetails({ ...details, price: details.price - 5 });
  }

  const handleAddToStock = async (sku) => {
    // Authorization: `JWT ${localStorage.getItem("access")}`
    // console.log(localStorage.getItem("access"))
    const body = {
      sku,
      details,
    };
    await authAxios
      .post(addToStockURL, body)
      // .post(`${process.env.REACT_APP_API_URL}/api/selling/new/${sku}`, body)
      .then((res) => {})
      .catch((err) => console.log(err));
    console.log(details);
  };

  return (
    <div className="bg-[#F8F8F8]">
      <Container>
        <div className="pb-[25px]">
          <BreadCrums name="Account" />
          <div className="text-3xl font-bold pt-[14px]">Sell Items</div>
        </div>
        <div className="border">
          <SearchInput>
            <div className={``}>
              {item && (
                <Wrapper className="py-6px flex items-center">
                  <img
                    src={item.image}
                    width="104px"
                    height="104px"
                    className="mr-[12px]"
                  />
                  <div className="flex">
                    <div>
                      <span className="font-bold">{item.name}</span>
                      <p>
                        {item.year_released} | {item.sku}
                      </p>
                    </div>
                  </div>
                </Wrapper>
              )}
            </div>
          </SearchInput>
          <ListingDetails>
            <h4 className="font-bold text-xl mb-[25px]">Listing Details</h4>
            <div className="mb-[26px]">
              <label className="w-full mb-[6px]">Size</label>
              <div className="border flex">
                <select
                  name="size"
                  className="w-full px-[16px] py-[13.76px] border-r-[16px] border-transparent outline-none appearance-none"
                  onChange={(e) =>
                    setDetails({ ...details, size: e.target.value })
                  }
                >
                  <option value="1">UK 3 | EU 35.5 | US 3.5</option>
                  <option value="2">UK 3.5 | EU 36 | US 4</option>
                  <option value="3">UK 4 | EU 36.5 | US 4.5</option>
                </select>
              </div>
            </div>
            <div className="mb-[26px]">
              <label className="w-full mb-[6px]">No. Of Pairs</label>
              <div className="border">
                <select
                  name="number"
                  className="w-full px-[16px] py-[13.76px] border-r-[16px] border-transparent outline-none appearance-none"
                  onChange={(e) =>
                    setDetails({ ...details, number: e.target.value })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="1999">5</option>
                  <option value="1990">6</option>
                  <option value="1990">7</option>
                  <option value="1990">8</option>
                  <option value="1990">9</option>
                  <option value="1990">10</option>
                </select>
              </div>
            </div>
          </ListingDetails>
          <ListingPrice>
            <h4 className="font-bold text-xl mb-[25px]">Listing Price</h4>
            <div className="flex mb-[13px]">
              <BsCurrencyDollar size={20} color={"777777"} />
              <div className="ml-[5px] w-full text-5xl font-normal tabular-nums">
                {details.price}
              </div>
              <div className="flex items-center">
                <button
                  class="ml-[3.25px] border w-[37px] h-[37px] outline-none"
                  onClick={decrement}
                >
                  -
                </button>
                <button
                  class="ml-[3.25px] border w-[37px] h-[37px] outline-none"
                  onClick={increment}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-[20px] border rounded-sm border-[#ededed] divide-y">
              <div className="flex justify-between p-[20px]">
                <div>Handling Fee (12%)</div>
                <div>$180</div>
              </div>
              <div className="flex justify-between p-[20px]">
                <div>Payment Fee (3%)</div>
                <div>$180</div>
              </div>
              <div className="flex justify-between p-[20px]">
                <div>Shipping Fee</div>
                <div>$180</div>
              </div>
              <div className="flex justify-between p-[20px] font-bold">
                <div>Total Payout</div>
                <div>$180</div>
              </div>
            </div>
            <p className="text-sm mt-[10px]">
              You are <span className="font-bold">1st</span> in the queue! There
              are no other listings for this product/size.
            </p>
          </ListingPrice>
          <BottomButtons>
            <div className="my-[10px] flex justify-between">
              <button className="border px-[28.8px] py-[15px] w-[49.2%] tracking-widest text-lg antialiased font-medium">
                CANCEL
              </button>
              <button
                className="border px-[28.8px] py-[15px] w-[49.2%] text-white bg-black tracking-widest text-lg antialiased font-medium"
                onClick={() => handleAddToStock(sku)}
              >
                DONE
              </button>
            </div>
          </BottomButtons>
        </div>
      </Container>
    </div>
  );
};

export default SellingSellItems;
