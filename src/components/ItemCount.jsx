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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 2rem;
  padding: 20px 5px;
  background-color: #2d3277;
  color: white;
  font-weight: bold;
  margin-top: 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
