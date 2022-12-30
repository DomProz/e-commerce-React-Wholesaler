import styled from "styled-components";
import Annoucment from "../components/Annoucment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({
    marginRight: "0px",
  })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0px",
  })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Annoucment />
      <Title>Wykończenie</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtruj Produkty:</FilterText>
          <Select>
            <Option disabled selected>
              Podkategoria
            </Option>
            <Option>Drewno</Option>
            <Option>Płytki</Option>
            <Option>Malowanie</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Kolor
            </Option>
            <Option>Biały</Option>
            <Option>Brązowy</Option>
            <Option>Czarny</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj Produkty:</FilterText>
          <Select>
            <Option selected>Najnowsze</Option>
            <Option>Cena (w górę)</Option>
            <Option>Cena (w dół)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
