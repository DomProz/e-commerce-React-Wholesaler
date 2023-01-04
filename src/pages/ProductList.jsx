import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <Container>
      <Navbar />
      <Annoucment />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtruj Produkty:</FilterText>
          <Select name="subcat" onChange={handleFilters}>
            <Option disabled>Podkategoria</Option>
            <Option>Drewno</Option>
            <Option>Narzedzia</Option>
            <Option>Malowanie</Option>
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Kolor</Option>
            <Option>Brak</Option>
            <Option>Biały</Option>
            <Option>Brązowy</Option>
            <Option>Czarny</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj Produkty:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Najnowsze</Option>
            <Option value="asc">Cena (w górę)</Option>
            <Option value="desc">Cena (w dół)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
