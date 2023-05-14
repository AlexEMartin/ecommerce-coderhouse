import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { getItems } from "../services/firestore";

const ItemStore = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getItems().then((res) => setProductos(res));
  }, []);

  return (
    <Container>
      {productos.length === 0 && (
        <BarLoader
          color="#2d3277"
          cssOverride={{ marginTop: "6rem", marginRight: "9rem" }}
          margin={6}
          size={35}
        />
      )}
      {productos.map((producto) => {
        return (
          <Ficha key={producto.id}>
            <Link to={"/item/" + producto.id.toString()}>
              <Image src={producto.image} alt="producto" />
            </Link>
            <Desc>{producto.title.substring(0, 20)}</Desc>
            <Desc>
              <strong>U$D {producto.price}</strong>
            </Desc>
          </Ficha>
        );
      })}
    </Container>
  );
};

export default ItemStore;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

const Ficha = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.img`
  max-height: 150px;
  margin-left: 4rem;
  margin-right: 4rem;
`;

const Desc = styled.p`
  width: 200px;
`;
