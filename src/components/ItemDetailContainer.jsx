import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { BarLoader } from "react-spinners";
import { traerUnProducto } from "../services/firestore";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerUnProducto(productId).then((res) => {
      setProductos(res);
      console.log(productos);
    });
    // eslint-disable-next-line
  }, [productId]);

  const [isAddedToCart, setAddedToCart] = useState(false);

  function handleToCart(marcador) {
    setAddedToCart(true);
    addToCart(productos, marcador);
  }

  const { addToCart } = useContext(CartContext);

  return (
    <Agrupar className="single">
      <Container className="product">
        {!productos && (
          <BarLoader
            color="#2d3277"
            cssOverride={{ magin: 'auto' }}
            size={55}
          />
        )}
        {productos && (
          <Ficha key={productos.id}>
            <Image src={productos.image} alt="producto" />
            <Desc>{productos.title}</Desc>
            <Desc>
              <em>{productos.description}</em>
            </Desc>
            <Desc>
              <strong>U$D {productos.price}</strong>
            </Desc>
          </Ficha>
        )}
        {!isAddedToCart ? (
          <ItemCount onAdd={handleToCart} stock={5} />
        ) : (
          <Link to="/cart">
            <CarritoBtn>Ir a Carrito</CarritoBtn>
          </Link>
        )}
      </Container>
    </Agrupar>
  );
};

export default ItemDetailContainer;

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
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 50px;
`;

const Image = styled.img`
  width: 200px;
  margin-left: 4rem;
  margin-right: 4rem;
`;

const Desc = styled.p``;

const Agrupar = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CarritoBtn = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  width: 100px;
  height: 40px;
  background-color: #2d3277;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
