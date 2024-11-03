import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = ({ setToggle }) => {
  const handleMenuClick = () => {
    setToggle(false); 
  };

  return (
    <Container>
      <Navigation>
        <Link to='/'>
        <NavItem onClick={handleMenuClick} >Home</NavItem>
        </Link>
        <Link to='/about'>
        <NavItem onClick={handleMenuClick} >About</NavItem>
        </Link>
        <Link to='/stack'>
        <NavItem onClick={handleMenuClick} >Tech Stack</NavItem>
        </Link>
        <Link to='/project'>
        <NavItem onClick={handleMenuClick} >Projects</NavItem>
        </Link>
        <Link to='/contact'>
        <NavItem onClick={handleMenuClick} >Contact</NavItem>
        </Link>
      </Navigation>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  min-height: 100vh;
  margin-top: 5em;
  text-align: center;
  background-color: #f8f8f8;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff; 
    color: white; 
  }
`;
