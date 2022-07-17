import React from "react";
import styled from "styled-components";

const Container = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 15vh;
  background-color: #3f3b3b;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  font-size: 11px;
  padding: 4px;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

const Title = styled.h2``;

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
