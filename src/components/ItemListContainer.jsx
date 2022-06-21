import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;  
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 5rem;
`;

const Ficha = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Image = styled.img`
    height: 200px;
    margin-left: 4rem;
    margin-right: 4rem;
`;

const Desc = styled.p`
    width: 200px;
`;


const ItemStore = () => {

const [ productos, setProductos ] = useState([]);

useEffect(() => {
  obtenerDatos();

}, [productos])


const obtenerDatos = async() => {
    const res = await fetch('https://fakestoreapi.com/products?limit=4'); 
    const data = await res.json();
    setProductos(data);
}

  return (
    <Container>
        {
            productos.map(producto => {
            return (
                <Ficha key={producto.id}>
                    <Link to={'/item/' + producto.id.toString()}>
                        <Image src={producto.image} alt='producto' />
                    </Link>
                    <Desc>{producto.title}</Desc>
                    <Desc><strong>U$D {producto.price}</strong></Desc>
                </Ficha>
            )})
        }
    </Container>
  )
}

export default ItemStore