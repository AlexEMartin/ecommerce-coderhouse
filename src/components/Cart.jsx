import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";

const Lista = styled.div`
  width: 80vw;
  height: 24vh;
  background-color: #eeeded;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto 0 auto;
`;

const ImageContainer = styled.div`
  margin-left: 4rem;
  border-radius: 50%;
  background-color: white;
  padding: 20px;
`;

const Image = styled.img`
  width: 3rem;
  padding: 0px;
`;

const Desc = styled.span`
  color: #242020;
  font-weight: 400;
  margin-left: 2rem;
`;

const Marcador = styled.span`
  color: #242020;
  font-weight: 800;
  margin-right: 2rem;
`;


const Cart = () => {

  const { cart } = useContext(CartContext);

  return (
    <div>
      {
        cart.map((producto) => (
          <Lista key={producto[0].id}>
            <ImageContainer>
             <Image src={producto[0].image} alt='producto' />
            </ImageContainer>
            <Desc>
              {producto[0].title}
            </Desc>
            <Marcador>
              Cantidad: {producto.marcador}
            </Marcador>
          </Lista>
        ))
      }
    </div>
  )
}

export default Cart