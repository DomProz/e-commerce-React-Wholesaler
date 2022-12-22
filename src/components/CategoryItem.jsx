import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: lightgray;
  margin-bottom: 20px;
  text-shadow: 2px 2px #545252;
  filter: contrast(1.75);
`;
const Button = styled.button`
  border: none;

  padding: 10px;
  font-size: 16px;
  backdrop-filter: invert(30%);
  box-shadow: 2px 6px 10px 2px rgba(255, 255, 255, 0.514);
  background-color: transparent;

  color: white;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Przejdź</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
