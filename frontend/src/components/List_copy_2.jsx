import { Divider, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ListProduct from "./ListProduct";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const count = [1];
// const count = [1, 1, 1, 1];

const hr = {
  display: "block",
  height: "1px",
  border: "0",
  // borderTop: "1px solid #ccc",
  // borderTop: "1px solid #080705",
  borderTop: "1px solid #c0c0c0",
  margin: "0",
  padding: "0",
};

const Container = styled.div`
  width: 1500px;
  max-width: 100%;
  margin: 0 auto;
  ${"" /* display: flex; */}
  ${"" /* overflow: hidden; */}
  ${"" /* flex-wrap: wrap; */}
  ${"" /* justufy-content: space-between; */}
`;

const List = () => {
  return (
    <Container>
      <Grid container>
        {count.map((item, index) => (
          <Grid xl={3} md={3} xs={6} key={index}>
            <ListProduct key={item.id} pr={index} />
            <hr style={hr} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default List;

// w 1500px
