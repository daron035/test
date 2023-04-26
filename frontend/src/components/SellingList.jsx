import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OutsideAlerter from "./OutsideAlerted";
import SellingListItem from "./SellingListItem";
import axios from "axios";
import MyLoader from "../UI/Loader/Loader";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import BreadCrums from "./UI/BreadCrums";
import BreadCrums from "./UI/account/BreadCrums";
import SellingCertainItem from "./SellingCertainItem";
import "../styles/PDetail.scss";

const Container = styled.div`
  width: 780px;
  max-width: 100%;
  margin: 0 auto;
  padding: 64px 40px 100px;
`;

const SearchInput = styled.div`
  margin: 0 0 20px;
  border: 1px solid #ededed;
  background-color: white;
  padding: 30px 40px;
`;

const Suggestions = styled.div`
  background-color: white;
  width: 700px;
  max-width: 100%;
  padding: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 13px 16px;
  font-size: 16px;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
  ::placeholder {
    color: #c8c8c8;
    opacity: 1; /* Firefox */
  }
  &:focus {
    outline: none;
    border: 1px solid #101010;
  }
`;

const Product = styled.div`
  background-color: white;
  padding: 20px;
  border: 1px solid #ededed;
`;

const ProductItems = styled.div`
  padding: 20px;
`;

// border-rose-500

const SellingList = () => {
  // const query = new URLSearchParams(useLocation().search);
  // const style_codes = query.get("style_codes");

  const [searchParams, setSearchParams] = useSearchParams();

  function setCallbackStringParams(sku) {
    setSearchParams((params) => {
      params.append("style_codes", sku);
      return params;
    });
  }

  // useEffect(() => {
  //   const fetch = async () => {
  //     await axios
  //       .get(
  //         `${process.env.REACT_APP_API_URL}/api/selling/new/?style_codes=${style_codes}`
  //       )
  //       .then((res) => {
  //         const response = res.data;
  //         console.log(response);
  //         setItem(response[0]);
  //         console.log(item);
  //       });
  //   };
  //   fetch();
  // }, [query]);

  const [activeButton, setButton] = useState(false);

  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(searchParams.get("style_codes"));
    getProducts();
  }, []);

  let getProducts = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/products/`)
        .then((response) => {
          const allProducts = response.data;
          setProducts(allProducts);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    });
  };

  // const getCertainProduct = async () => {
  //   await axios
  //     .get(
  //       `${process.env.REACT_APP_API_URL}/api/selling/new/?style_codes=${style_codes}`
  //     )
  //     .then((res) => {
  //       const response = res.data;
  //       console.log(response);
  //       setItem(response[0]);
  //       console.log(item);
  //     });
  // };

  // function setCallbackStringParams(sku) {
  //   console.log(sku);
  //   // setSearchParams({ style_codes: sku });
  // }

  // function setCallbackStringParams(sku) {
  //   setSearchParams((params) => {
  //     params.append("style_codes", sku);
  //     return params;
  //   });
  // }

  // // устанавливаем значение параметра `paramName` в `paramValue`
  // const setParamValue = (paramName, paramValue) => {
  //   // получаем текущее значение параметра
  //   const currentValues = searchParams.getAll(paramName);
  //
  //   // добавляем новое значение к текущим значениям
  //   const newValues = [...currentValues, paramValue];
  //
  //   // устанавливаем новое значение параметра
  //   setSearchParams({ [paramName]: newValues });
  // };

  return (
    <div className="bg-[#f8f8f8]">
      {searchParams.get("style_codes") ? (
        <SellingCertainItem />
      ) : (
        <Container>
          <div className="pb-[25px]">
            <BreadCrums name="Selling" />
            <div className="text-3xl font-bold pt-[14px] segoe-bold">
              Sell Items
            </div>
          </div>
          <SearchInput>
            <form className={`flex justify-center `}>
              <StyledInput
                type="text"
                placeholder="Item name, brand, code or style"
              />
            </form>
            {/* </OutsideAlerter> */}
          </SearchInput>
          <Product>
            <ProductItems>
              <h3 className="mb-[25px] text-xl tracking-wider segoe-boldbold">
                Suggestions
              </h3>
              {isLoading ? (
                <MyLoader />
              ) : (
                products.map((i) => (
                  <>
                    <SellingListItem
                      key={i.id}
                      name={i.name}
                      sku={i.sku}
                      year={i.year_released}
                      callbackStringParams={setCallbackStringParams}
                    />
                  </>
                ))
              )}
            </ProductItems>
          </Product>
        </Container>
      )}
    </div>
  );
};

export default SellingList;

// <button onClick={handleClick}>sdfasdf</button>
