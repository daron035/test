import React from "react";
import styled from "styled-components";
import ListProduct from "./ListProduct";
import { tablet, mobile } from "../responsive";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Container = styled.div`
  width: 1500px;
  max-width: 100%;
  margin: 0 auto;
  // для реализации divider'а между элементами внутри grid css
  background-color: #ededed;
  gap: 1px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ${tablet({ gridTemplateColumns: "repeat(3, 1fr)" })}
  ${mobile({ gridTemplateColumns: "repeat(2, 1fr)" })}
`;

const List = () => {
  return (
    <Container>
      {count.map((item, index) => (
        <ListProduct key={item.id} pr={index} />
      ))}
    </Container>
  );
};

export default List;
