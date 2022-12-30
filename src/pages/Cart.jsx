import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Annoucment from "../components/Annoucment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#252525" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
  ${mobile({
    display: "none",
  })}
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span`
  text-transform: uppercase;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;

  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 400;
  ${mobile({
    marginBottom: " 20px",
  })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  background-color: #f8f8fa;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #252525;
  color: white;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
`;

const Cart = () => {
  return (
    <Container>
      <Annoucment />
      <Navbar />
      <Wrapper>
        <Title>Your BAG</Title>
        <Top>
          <TopButton>Kontynuuj Zakupy</TopButton>

          <TopTexts>
            <TopText>Farba (2)</TopText>
            <TopText>Lista Życzeń (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Przejdz do Płatności</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://image.ceneostatic.pl/data/article_picture/c1/a3/cfbd-f1e2-4a2c-b697-3e04a5825adf_large.jpg" />
                <Details>
                  <ProductName>
                    <b>Produkt: </b> Farba
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>3214
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>80 zł</ProductPrice>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetail>
                <Image src="https://image.ceneostatic.pl/data/article_picture/c1/a3/cfbd-f1e2-4a2c-b697-3e04a5825adf_large.jpg" />
                <Details>
                  <ProductName>
                    <b>Produkt: </b> Farba
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>3214
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>80 zł</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Podsumowanie</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Razem: </SummaryItemText>
              <SummaryItemPrice>160 zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Dostawa: </SummaryItemText>
              <SummaryItemPrice>15 zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Całkowicie</SummaryItemText>
              <SummaryItemPrice>175 zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Przejdz do Płatności</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
