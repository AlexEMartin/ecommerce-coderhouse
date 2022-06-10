import React, { useState } from 'react'
import styled from "styled-components";

const Container = styled.div`
    width: 10rem;
    height: 12rem;
    margin-left: 2rem;
    margin-top: 2rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

const ItemTitle = styled.h4`
    color: #1a1a1a;
    font-weight: bold;
`;

const Contador = styled.div`
    margin-top: 2rem;
`;

const Boton = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    background-color: lightgray;
`;

const Numero = styled.span`
    padding: 1rem;
`;

const CarritoBtn = styled.button`
    width: 80%;
    height: 2rem;
    background-color: #1515ab;
    color: white;
    font-weight: bold;
    margin-top: 1.5rem;
`;


const ItemCount = (props) => {

const [ marcador, setMarcador ] = useState(1);

if(marcador >= props.stock) {
    document.querySelector('#plus').disabled = true;
} else if(marcador === 4) {
    document.querySelector('#plus').disabled = false;
} else if(marcador === 0) {
    document.querySelector('#minus').disabled = true;
} 

  return (
    <Container>
        <ItemTitle>Alto Producto</ItemTitle>
        <Contador>
            <Boton id='minus' onClick={() => setMarcador(marcador - 1)}>-</Boton>
            <Numero>{marcador}</Numero>
            <Boton id='plus' onClick={() => setMarcador(marcador + 1)}>+</Boton>
        </Contador>
        <CarritoBtn>Añadir al carrito</CarritoBtn>
    </Container>
  )
}

export default ItemCount