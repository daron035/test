import React from "react";
import styled from "styled-components";
import { Search, ShoppingBagOutlined } from "@mui/icons-material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Container = styled.div`
  height: 70px;
`;

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
  cursor: pointer;
  display: flex;
  height: 70px;
  align-items: center;
  padding: 11.25px 15px;
`;

const MenuIcons = styled.div`
  padding: 22.5px 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>icon</Left>
        <Right>
          <MenuItem>New Releases</MenuItem>
          <MenuItem>Best Sellers</MenuItem>
          <MenuItem>Brows</MenuItem>
          <MenuItem>Sell</MenuItem>
          <MenuItem className="mr-10">Login</MenuItem>
          <MenuIcons>
            <Search sx={{ fontSize: 25 }} />
          </MenuIcons>
          <MenuIcons>
            <ShoppingBagOutlined sx={{ fontSize: 25 }} />
          </MenuIcons>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

// const menuIcons = {
//   color: "blue",
//   padding: "22.5px 25px",
// };

// <SearchIcon style={{ fontSize: 25 }} />
// <SearchIcon sx={{ fontSize: 25 }} />
// <ShoppingBagOutlinedIcon sx={{ fontSize: 25 }} />
