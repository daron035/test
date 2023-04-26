import React, { useEffect, useState } from "react";
import styles from "../index.module.css";
import axios from "axios";
import { Button, Container, Icon, Item, Label } from "semantic-ui-react";
import MyLoader from "../UI/Loader/Loader";
import { connect } from "react-redux";
import { fetchCart } from "../store/actions/cart";
import { Link } from "react-router-dom";

import styled from "styled-components";
const ProductList = ({ fetchCart }) => {
  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  // console.log(products)

  useEffect(() => {
    getProducts();
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
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/products/`)
      // .get(`http://85.193.81.247/api/products/`)
      .then((response) => {
        const allProducts = response.data;
        setProducts(allProducts);
      })
      .catch((err) => console.log(err));
  };

  const handleAddToCart = async (slug) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    const body = { slug };
    await axios
      .post(`${process.env.REACT_APP_API_URL}/api/add-to-cart/`, body, config)
      // .post(`http://85.193.81.247/api/add-to-cart/`, body, config)
      .then((response) => {})
      .catch((err) => console.log(err));
    fetchCart();
  };

  const Hsd = styled.div``;

  return (
    <Container>
      {isLoading ? (
        <MyLoader />
      ) : (
        <Item.Group divided>
          {products.map((item) => (
            <Item key={item.id}>
              <Item.Image src={item.image} />

              <Item.Content>
                <Link to={`/products/${item.id}`}>
                  <Item.Header as="a">{item.title}</Item.Header>
                </Link>
                <Item.Meta>
                  <span className="cinema">{item.category}</span>
                </Item.Meta>
                <Item.Description>{item.description}</Item.Description>
                <Item.Extra>
                  {/* <Button
                    primary
                    floated="right"
                    icon
                    labelPosition="right"
                    onClick={() => handleAddToCart(item.slug)}
                  >
                    Add to cart
                    <Icon name="cart plus" />
                  </Button> */}
                  {item.discount_price && (
                    <Label
                      color={
                        item.label === "primary"
                          ? "blue"
                          : item.label === "secondary"
                          ? "green"
                          : "olive"
                      }
                    >
                      {item.category}
                    </Label>
                  )}
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      )}
      <Hsd>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </Hsd>
      <Hsd>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </Hsd>
      <Hsd>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </Hsd>
      <Hsd>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </Hsd>
      <Hsd>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </Hsd>
      <Hsd>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </Hsd>
      <Hsd>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
        nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
        minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
        Lorem duis laboris cupidatat officia voluptate. Culpa proident
        adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
        Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
        et culpa duis.
      </Hsd>
    </Container>
  );
};

export default connect(null, { fetchCart })(ProductList);
