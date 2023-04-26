import React, { useEffect, useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
// import { Menu, Search, ShoppingBagOutlined } from "@mui/icons-material";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import { Badge, Slide, useMediaQuery, useScrollTrigger } from "@mui/material";
// import logo from "../static/logo.png";
import logo from "../../static/logo.svg";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";

import "../../styles/Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div`
  height: 70px;
  background-color: white;
  z-index: 2;
  border-bottom: 1px solid #f2f2f2;

  // On Scroll Fixed Header
  position: sticky;
  top: 0;
`;
// ${(props) => (props.isSquare ? "10px" : "50%")};
const Wrapper = styled.div`
  padding: 10px 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  // display: flex;
  // height: 70px;
  // align-items: center;
  // padding: 11.25px 15px;
`;

const MenuIcons = styled.div`
  padding: 22.5px 25px;
`;

const MobileWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const LeftMobile = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const LeftIconMobile = styled.div`
  padding: 23.75px 25px;
`;

const ItemMobile = styled.div``;

const MenuMobile = styled.div`
  padding: 0 14.25px;
  position: relative;
  z-index: 1;
  background-color: white;
`;

const MenuMobileItems = styled.div`
  padding: 19px 0;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  border-top: 1px solid #ededed;
`;

const Mm = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MenuMobileButtons = styled.div`
  display: flex;
  padding: 19px 0;
  border-top: 1px solid #ededed;
  justify-content: space-between;
  cursor: pointer;
`;

const MenuMobileBut = styled.div`
  padding: 24px;
  border: 1px solid #ededed;
  width: 49.6%;
  text-align: center;
`;

// function HideOnScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger();
//
//   return (
//     <Slide appear={false} derection={"down"} in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

const Navbar2 = (props) => {
  const themem = createTheme({
    palette: {
      custom: {
        main: "#9EE2CF",
      },
    },
  });
  const { classes } = props;

  const theme = useTheme();
  // console.log(localStorage.getItem("access"))
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const isUnMatch = useMediaQuery(theme.breakpoints.up("md"));
  console.log(isMatch);

  const [scroll, setScroll] = useState(false);
  const [back, setBack] = useState(false);

  const handleMenu = () => {
    setScroll(!scroll);
    setBack(!back);
    if (scroll) {
      document.body.style.overflow = "scroll";
      document.body.style.backgroundColor = "transparent";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    // console.log(scroll);
  };

  if (isUnMatch) {
    // console.log("asdf");
    document.body.style.overflow = "scroll";
    document.body.style.backgroundColor = "transparent";
  }

  const gg = () => {
    console.log("icon");
  };

  return (
    <Container>
      <React.Fragment>
        <Wrapper>
          <Left onClick={gg}>
            <img src={logo} alt="logo" className="h-[69px] cursor-pointer" />
          </Left>

          <Right>
            <div className="dropdown">
              <button className="dropbtn">New Releases</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Best Sellers</button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
              </div>
            </div>
            <div className="subnav">
              <button className="subnavbtn">Browse</button>
              <div className="subnav-content">
                <div className="grid grid-cols-3 gap-20">
                  <div className="bg-red-400">
                    <span className="text-lg antialiased font-medium">
                      Yeezy
                    </span>
                    <div className="grid grid-cols-3">
                      <div>dssdf</div>
                      <div>dssdf</div>
                      <div>dssdf</div>
                      <div>dssdf</div>
                      <div>dssdf</div>
                      <div>dssdf</div>
                    </div>
                  </div>
                  <div className="bg-yellow-400">Air Jordan</div>
                  <div className="bg-green-400">Nike</div>
                  <div className="bg-gray-400">New Balance</div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <button className="h-[70px] text-[15px] py-[11.25px] px-[15px]">
                Sell
              </button>
            </div>
            <div className="mr-10">
              <button className="dropbtn">Log In</button>
            </div>
            <MenuIcons>
              <SearchIcon sx={{ fontSize: 25 }} />
            </MenuIcons>
            <MenuIcons>
              <ThemeProvider theme={themem}>
                <Badge badgeContent={4} color="custom">
                  <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />
                </Badge>
              </ThemeProvider>
            </MenuIcons>
          </Right>
        </Wrapper>
      </React.Fragment>
      {/* )} */}
    </Container>
  );
};

export default Navbar2;

// const menuIcons = {
//   color: "blue",
//   padding: "22.5px 25px",
// };

// <SearchIcon style={{ fontSize: 25 }} />
// <SearchIcon sx={{ fontSize: 25 }} />
// <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />
