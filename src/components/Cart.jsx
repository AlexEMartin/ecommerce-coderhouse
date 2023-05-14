import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createHandleOrder } from "../services/firestore";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, removeFromCart, vaciarCarrito } = useContext(CartContext);

  const navigate = useNavigate();

  const noFuimo = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const calcularTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].marcador;
    }
    return total.toFixed(1);
  };

  const handleOrder = () => {
    const dataOrder = {
      buyer: {
        name: "Cosme Fulanito",
        phone: 1163923747,
        email: "cosme.fulanito@gmail.com",
      },
      items: cart,
      total: calcularTotal(),
    };

    createHandleOrder(dataOrder).then((res) => {
      vaciarCarrito();
      Swal.fire(
        "Compra Exitosa!",
        `Gracias ${dataOrder.buyer.name}, has realizado el importe de U$D ${dataOrder.total}. Pronto recibirás tu pedido :)`,
        "success"
      );
    });
  };

  return (
    <div>
      {cart.length === 0 && (
        <h4
          style={{
            backgroundColor: "#FE4A49",
            color: "#FFFDF9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          Tu carrito está vacío
        </h4>
      )}
      {cart.length === 0 && noFuimo()}
      {cart.map((producto) => (
        <div key={producto.id}>
          <Lista className="buyList">
            <ImageContainer>
              <Image src={producto.image} alt="producto" />
            </ImageContainer>
            <Desc>{producto.title}</Desc>
            <Marcador>Cantidad: {producto.marcador}</Marcador>
          </Lista>
          <Div1>
            <Desc>
              <strong>Precio: </strong>
              {producto.price.toFixed(1) * producto.marcador} U$D
            </Desc>
            <RemoveBtn onClick={() => removeFromCart(producto.id)}>
              Remover Item
            </RemoveBtn>
          </Div1>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <div
            style={{
              backgroundColor: "#ffe600",
              color: "#003a39",
            }}
          >
            <h3 style={{ padding: "10px", fontWeight: "400" }}>
              TOTAL: {calcularTotal()} U$D
            </h3>
          </div>
          <BuyBtn
            onClick={() => handleOrder()}
          >
            Finalizar Compra
          </BuyBtn>
          <RemoveBtn
            style={{
              marginTop: "0rem",
              fontWeight: "900",
              marginLeft: "1.8rem",
            }}
            onClick={() => vaciarCarrito()}
          >
            Vaciar Carrito
          </RemoveBtn>
        </>
      )}
    </div>
  );
};

export default Cart;

const Lista = styled.div`
  max-width: 80vw;
  min-height: 35vh;
  background-color: #eeeded;
  display: flex;
  align-items: center;
  margin: 1rem auto 0 auto;
`;

const ImageContainer = styled.div`
  width: 4rem;
  margin: 20px 20px 0px 20px;
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
  width: 100%;
  margin-top: 20px;
`;

const Marcador = styled.span`
  width: 150px;
  color: #242020;
  font-weight: 800;
  margin: 20px 20px 0px 20px;
`;

const Div1 = styled.div`
  width: 80vw;
  height: 3vh;
  background-color: #eeeded;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 0 auto;
  padding-bottom: 20px;
`;

const RemoveBtn = styled.button`
  background-color: #fe4a49;
  width: 150px;
  color: white;
  border: none;
  padding: 10px;
  margin-right: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const BuyBtn = styled.button`
  background-color: #2d3277;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
