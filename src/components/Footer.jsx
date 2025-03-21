import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HurtBud.</Logo>
        <Desc>Strona z artykułami budowlanymi</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Przydatne Linki</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Koszyk</ListItem>
          <ListItem>Narzędzia</ListItem>
          <ListItem>Materiały Budowlane</ListItem>
          <ListItem>Wykończenie</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Kontakt</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Opolskie, Żłobizna, 49-305
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +48 731 607 XXX
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          dominikprozor@wp.pl
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
