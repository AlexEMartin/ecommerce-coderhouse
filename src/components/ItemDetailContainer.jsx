import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext";
import { PacmanLoader } from "react-spinners";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 8rem;
  min-height: 8rem;
  margin-top: 5rem;
  padding: 2rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

const Ficha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 200px;
  margin-left: 4rem;
  margin-right: 4rem;
`;

const Desc = styled.p`
  width: 500px;
`;

const Agrupar = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CarritoBtn = styled.button`
  width: 12rem;
  height: 3rem;
  background-color: #1515ab;
  color: white;
  font-weight: bold;
  margin-top: 8rem;
  margin-right: 10rem;
  cursor: pointer;
`;


const ItemDetailContainer = () => {

  const { productId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
     obtenerDatos();
     
  }, [productos])

    const obtenerDatos = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      let renderProduct = [];
      const unProducto = data.find((producto) => {
        return producto.id === parseInt(productId)
      })
      renderProduct.push(unProducto);
      // console.log(renderProduct)
      setProductos(renderProduct);
    };

    const [ isAddedToCart, setAddedToCart ] = useState(false);

    function handleToCart(marcador) {
      // console.log(marcador)
      setAddedToCart(true);
      addToCart(productos, marcador);
    }

    const { addToCart } = useContext(CartContext);

    return (
      <Agrupar>
        <Container>
          {productos.length === 0 &&  
            <PacmanLoader
              color="#3f8bfc"
              cssOverride={{marginTop: '2rem', marginRight: '5rem'}}
              margin={6}
              size={25}
            />
          }
          {productos.map((producto) => {
            return (
              <Ficha key={producto.id}>
                <Image src={producto.image} alt="producto" />
                <Desc>{producto.title}</Desc>
                <Desc><em>{producto.description}</em></Desc>
                <Desc>
                  <strong>U$D {producto.price}</strong>
                </Desc>
              </Ficha>
            );
          })}
        </Container>
        {
          !isAddedToCart ? <ItemCount onAdd={handleToCart} stock={5} /> 
          : 
          <Link to='/cart'><CarritoBtn>Ir a Carrito</CarritoBtn></Link>
        }
      </Agrupar>
    );
}


export default ItemDetailContainer;
