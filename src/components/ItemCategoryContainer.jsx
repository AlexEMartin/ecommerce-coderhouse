import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { PacmanLoader } from 'react-spinners';
import { traerProductosDeCategoria } from '../services/firestore';


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
    max-height: 200px;
    max-width: 150px;
    margin-left: 4rem;
    margin-right: 4rem;
`;

const Desc = styled.p`
    width: 200px;
`;


const ItemCategoryContainer = () => {

const { categoryId } = useParams();    

const [ productos, setProductos ] = useState([]);

// useEffect(() => {

// if(categoryId === 'jewelery') {
//     obtenerJewerly();
// } else if (categoryId === 'electronics') {
//     obtenerElectronics();
// }

// }, [categoryId])

useEffect(() => {
    traerProductosDeCategoria(categoryId)
      .then((res) => {
        setProductos(res);        
      })
  }, [categoryId]);


// const obtenerJewerly = async() => {
//     setProductos([]);
//     const res = await fetch('https://fakestoreapi.com/products/category/jewelery'); 
//     const data = await res.json();
//     setProductos(data);
// }

// const obtenerElectronics = async() => {
//     setProductos([]);
//     const res = await fetch('https://fakestoreapi.com/products/category/electronics'); 
//     const data = await res.json();
//     setProductos(data);
// }

  return (
    <Container>
        {   productos.length === 0 && 
            <PacmanLoader
            color="#3f8bfc"
            cssOverride={{marginTop: '6rem', marginRight: '9rem'}}
            margin={6}
            size={35}
        />
        }
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

export default ItemCategoryContainer