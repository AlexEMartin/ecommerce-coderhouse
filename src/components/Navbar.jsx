import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  background-color: #fdfd3f;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input``;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #1a1a1a;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
            </SearchContainer>
          </Left>
          <Center>
            <Logo><Link style={{textDecoration: 'none'}} to='/'>Mercado Pampeano.</Link></Logo>
          </Center>
          <Right>
            <MenuItem><Link style={{textDecoration: 'none'}} to='/category/jewelery'>Jewelery</Link></MenuItem>
            <MenuItem><Link style={{textDecoration: 'none'}} to='/category/electronics'>Electronics</Link></MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="secondary">
                  <Link to='/cart'><ShoppingCartIcon /></Link>
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
