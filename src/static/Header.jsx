import React, { useState } from 'react';
import styled from 'styled-components';
import Media from '../components/Media';
import { MdMenu } from "react-icons/md";
import Menu from './Menu';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Container>
        <LogoNav>
          <Logo>
            <h3>Mahmud</h3>
          </Logo>
          <Navigation>
            <Link to='/'>
            <NavItem>Home</NavItem>
            </Link>
            
           <Link to='/about'>
           <NavItem>About</NavItem>
           </Link>
           <Link to='stack'>
           <NavItem>Tech Stack</NavItem>
           </Link>
            <Link to='project'>
            <NavItem>Projects</NavItem>
            </Link>
            <Link to='contact'>
            <NavItem>Contact</NavItem>
            </Link>
           
          </Navigation>
        </LogoNav>
        <Socials>
          <Media />
        </Socials>
        <SideBar>
          <MdMenu size={30} onClick={handleToggle} />
        </SideBar>
      </Container>
      {toggle === false ? null : <Menu setToggle={setToggle} />}
    </>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 10000;
  height: 70px;
  width: 100%;
  display: flex;
  padding-inline: 50px;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media screen and (max-width: 800px) {
    height: 50px;
    padding: 10px;
  }
`;

const LogoNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 150px;
`;

const Logo = styled.div``;

const Navigation = styled.div`
  display: flex;
  gap: 20px;
  font-weight: bold;
  color: darkblue;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const NavItem = styled.div`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const SideBar = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    padding: 30px;
  }
`;

const Socials = styled.div`
  padding-right: 50px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
