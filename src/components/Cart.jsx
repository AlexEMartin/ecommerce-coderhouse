import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Lista = styled.div`
  max-width: 80vw;
  height: 24vh;
  background-color: #eeeded;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto 0 auto;
`;

const ImageContainer = styled.div`
  width: 4rem;
  margin-left: 2rem;
  border-radius: 50%;
  background-color: white;
  padding: 20px;
`;

const Image = styled.img`
  max-width: 3.5rem;
  max-height: 4rem;
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

const Div1 = styled.div`
  width: 80vw;
  height: 3vh;
  background-color: #eeeded;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 0 auto;
`;

const RemoveBtn = styled.button`
  background-color: white;
  margin-right: 1.8rem;
  margin-bottom: 2rem;
  padding: 5px;
  cursor: pointer;
`;


const Cart = () => {

  const { cart, RemoveFromCart, VaciarCarrito } = useContext(CartContext);

  const navigate = useNavigate();

  const noFuimo = () => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  const calcularTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += (cart[i][0].price * cart[i].marcador);
    }
    return total;
  }

  return (
    <div>
      {
        cart.length === 0 &&
        <h4 style={{backgroundColor: '#FE4A49', color: '#FFFDF9', height: '16vh',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '80%', margin: '2rem auto 0 auto', fontSize: '18px'}}>
          Tu carrito está vacío
        </h4>
      }
      {
        cart.length === 0 && noFuimo()
      }
      {
        cart.map((producto) => (
          <div key={producto[0].id}>
          <Lista>
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
          <Div1>
            <Desc style={{marginBottom: '1rem'}}>
               <strong>Precio: </strong>{producto[0].price * producto.marcador} U$D
            </Desc>
            <RemoveBtn onClick={() => RemoveFromCart(producto[0].id)}>Remover Item</RemoveBtn>
          </Div1>
          </div>
        ))
      }
      {
        cart.length > 0 &&
        <>
        <h3 style={{backgroundColor: '#fdfd3f', color: '#1a1a1a', height: '2rem', width: '80%', margin: '1rem auto 1rem auto'}}>TOTAL: {calcularTotal()} U$D</h3>
        <RemoveBtn
        style={{marginTop: '0rem', fontWeight: '900', marginLeft: '1.8rem'}}
        onClick={() => VaciarCarrito()}>Vaciar Carrito
        </RemoveBtn>
        </>
      }
    </div>
  )
}

export default Cart