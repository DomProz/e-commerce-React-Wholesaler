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

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;

  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 700;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 17px;
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

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
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
  return (
    <Container>
      <Navbar />
      <Annoucment />

      <Wrapper>
        <ImgContainer>
          <Image src="https://assets.stickpng.com/images/5c7659c7003fa702a1d278f1.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Długie szczypce kątowe</Title>
          <Desc>
            Wysoce specjalistyczne szczypce modelarskie o profilowanych
            uchwytach oraz korpusie wykonanym ze stali chromowo-wanadowej,
            dzięki czemu cechują się dobra odpornością na korozje oraz świetną
            trwałością i wytrzymałością ogólną. Uchwyty posiadają wykończenie ze
            specjalnego tworzywa sztucznego, co sprawia, iż chwytane elementy
            nie ulegają zarysowaniu, uszkodzeniom mechanicznym czy
            odkształceniom. Narzędzie cechuje się świetną ergonomią pracy (także
            ze względu na dwustopniową regulację rozwartości) oraz bardzo wysoką
            jakością wykonania. Co więcej, ramiona prezentowanych szczypiec
            zostały pokryte specjalną żywicą (w kolorze niebieskim), która
            pozwala na pewniejszy chwyt narzędzia oraz umożliwia większy komfort
            pracy. Producent podkreśla, że elementy żywiczne można bez problemu
            usunąć. Szczypce nadają się idealnie do pracy z modelami R/C oraz
            modelami z serii Mini 4WD firmy Tamiya. Jednak ze względu na swoje
            właściwości mogą również znaleźć zastosowanie przy pracy z modelami
            plastikowymi lub kartonowymi. Produkt powiązany to Non-Scratch
            Pliers.
          </Desc>
          <BrandContainer>
            <Price>100 zł</Price>
            <Brand>Marka:Tamyia</Brand>
          </BrandContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>DO KOSZYKA</Button>
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
