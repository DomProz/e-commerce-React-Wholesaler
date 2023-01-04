import {
  Add,
  LocalAtm,
  Remove,
  TransferWithinAStation,
  VerifiedUser,
} from "@material-ui/icons";
import styled from "styled-components";
import Annoucment from "../components/Annoucment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: "10px",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  object-fit: cover;
  ${mobile({
    width: "60%",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "0px 10px",
  })}
`;
const Title = styled.h1`
  font-weight: 700;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 17px;
  ${mobile({
    fontSize: "15px",
  })}
`;
const BrandContainer = styled.div`
  display: flex;
  margin: 10px 10px 0px 10px;
  padding-bottom: 20px;
`;
const Price = styled.span`
  font-weight: 500;
  flex: 1;
  font-size: 40px;
`;
const Brand = styled.span`
  font-weight: 700;
  flex: 2;
  font-size: 40px;
`;
const BrandText = styled.span`
  text-transform: uppercase;
`;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.div`
  padding: 15px;
  font-weight: 600;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const GuaranteeContainer = styled.div`
  display: flex;
  padding-top: 20px;
`;
const Guarantee = styled.div`
  display: flex;
  background-color: lightgray;
  height: 50px;
  width: 220px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 10px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
      <Navbar />
      <Annoucment />

      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <BrandContainer>
            <Price>{product.price} zł</Price>
            <Brand>
              Marka: <BrandText>{product.brand}</BrandText>
            </Brand>
          </BrandContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>DO KOSZYKA</Button>
          </AddContainer>
          <GuaranteeContainer>
            <Guarantee>
              <TransferWithinAStation /> Zwroty bez problemu
            </Guarantee>
            <Guarantee>
              <LocalAtm />
              Gwarancja najniższych cen
            </Guarantee>
            <Guarantee>
              <VerifiedUser />
              Gwarancja jakości
            </Guarantee>
          </GuaranteeContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
