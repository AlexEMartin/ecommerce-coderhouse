import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Items>
        <Lista>
          <ItemLista>Servicios</ItemLista>
          <ItemLista>Constacto</ItemLista>
          <ItemLista>Trabaja para nosotros</ItemLista>
        </Lista>
        <Title>Mercado Pampeano.</Title>
      </Items>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 15vh;
  margin-bottom: -200px;
  background-color: #3f3b3b;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-weight: bold;
`;

const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
`;

const ItemLista = styled.li`
  font-size: 12px;
  padding: 4px;
  transition: all 0.3s ease;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Title = styled.h2`
  padding: 0px 20px;
`;
