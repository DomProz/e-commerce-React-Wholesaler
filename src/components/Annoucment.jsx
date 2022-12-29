import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #8f7cec;
  color: white;
  text-align: center;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 500;
`;
const Annoucment = () => {
  return <Container>Darmowa dostawa od 200 zł !</Container>;
};

export default Annoucment;
