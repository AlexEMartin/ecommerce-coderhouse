import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const cartLength = cart.length;

  return (
    <div>
      <Container>
        <Logo className="logo">
          <Link style={{ textDecoration: "none" }} to="/">
            Mercado Pampeano.
          </Link>
        </Logo>
        <Right>
          <MenuItem>
            <Link style={{ textDecoration: "none" }} to="/category/jewelery">
              Jewelery
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ textDecoration: "none" }} to="/category/electronics">
              Electronics
            </Link>
          </MenuItem>
          <MenuItem>
            {cartLength > 0 && (
              <Badge badgeContent={cartLength} color="secondary">
                <Link to="/cart">
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            )}
          </MenuItem>
        </Right>
      </Container>
    </div>
  );
};

export default Navbar;

const Container = styled.div`
  position: relative;
  height: 60px;
  background-color: #ffe600;
`;

const Logo = styled.div`
  width: 200px;
  position: absolute;
  padding: 0px 10px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  color: #2d3277;
  z-index: 1;
`;

const Right = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  z-index: 2;
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  transition: all 0.2s ease;
  color: #2d3277;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
