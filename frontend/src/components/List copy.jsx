import React from "react";
import styled from "styled-components";
import ListProduct from "./ListProduct";

// const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const count = [1];
const count = [1,1,1,1,];

const Container = styled.div`
  width: 1500px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  ${'' /* flex-wrap: wrap; */}
  justufy-content: space-between;
`;

const List = () => {
  return (
    <Container>
      {count.map((item) => (
        <ListProduct key={item.id} />
      ))}
    </Container>
  );
};

export default List;

// w 1500px
