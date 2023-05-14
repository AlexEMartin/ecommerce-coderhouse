import React, { useState } from "react";
import styled from "styled-components";

const ItemCount = ({ stock, onAdd }) => {
  const [marcador, setMarcador] = useState(1);

  const suma = () => {
    if (marcador < stock) {
      setMarcador(marcador + 1);
    }
  };

  const resta = () => {
    if (marcador >= 2) {
      setMarcador(marcador - 1);
    }
  };

  return (
    <Container>
      <Contador>
        <Boton onClick={resta}>-</Boton>
        <Numero id="cartValue">{marcador}</Numero>
        <Boton onClick={suma}>+</Boton>
      </Contador>
      <CarritoBtn onClick={() => onAdd(marcador)}>Añadir al carrito</CarritoBtn>
    </Container>
  );
};

export default ItemCount;

const Container = styled.div`
  width: 200px;
  height: 150px;
  margin: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contador = styled.div``;

const Boton = styled.button`
  width: 25px;
  height: 25px;
  background-color: lightgray;
`;

const Numero = styled.span`
  padding: 1rem;
`;

const CarritoBtn = styled.button`
  width: 60%;
  height: 2rem;
  background-color: #1515ab;
  color: white;
  font-weight: bold;
  margin-top: 1.5rem;
  cursor: pointer;
`;
