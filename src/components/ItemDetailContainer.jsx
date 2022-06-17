import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
  width: 200px;
  margin-left: 4rem;
  margin-right: 4rem;
`;

const Desc = styled.p`
  width: 500px;
`;

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
     obtenerDatos();
     
  }, [])
  

    const obtenerDatos = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await res.json();
      let renderProduct = [];
      const unProducto = data.find((producto) => {
        return producto.id === parseInt(productId)
      })
      renderProduct.push(unProducto);
      console.log(renderProduct)
      setProductos(renderProduct);
    };

    return (
      <Container>
        {productos.length === 0 && <h2>La API está muy lenta...</h2>}
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
    );
}


export default ItemDetailContainer;
