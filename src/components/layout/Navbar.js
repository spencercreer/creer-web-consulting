import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background-color: ${props => 
    props.scrolled ? '#ffffff' : 
    props.isHomePage ? 'transparent' : 'rgba(42, 79, 201, 0.9)'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  color: ${props => props.scrolled ? '#272727' : '#ffffff'};
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    transition: all 0.3s ease;
    filter: ${props => !props.scrolled && props.isHomePage ? 'brightness(0) invert(1)' : 'none'};
  }
  
  @media (max-width: 768px) {
    img {
      height: 32px;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.scrolled ? '#272727' : '#ffffff'};
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
    padding: 2rem 0;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? '#272727' : '#ffffff'};
  text-decoration: none;
  font-weight: ${props => props.isActive ? '700' : '500'};
  padding: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.isActive ? '80%' : '0'};
    height: 2px;
    background-color: #2A4FC9;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #2A4FC9;
    
    &:after {
      width: 80%;
    }
  }
  
  @media (max-width: 768px) {
    color: #272727;
    font-size: 1.2rem;
    
    &:after {
      bottom: -5px;
    }
  }
`;

const ContactButton = styled(Link)`
  background-color: ${props => props.isActive ? '#7F97E8' : '#2A4FC9'};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: ${props => props.isActive ? '700' : '500'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.isActive ? '0 4px 12px rgba(42, 79, 201, 0.3)' : 'none'};
  position: relative;
  
  &:hover {
    background-color: #7F97E8;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(42, 79, 201, 0.3);
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 80%;
    text-align: center;
    padding: 0.8rem;
  }
`;

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Nav scrolled={scrolled} isHomePage={isHomePage}>
      <Logo to="/" scrolled={scrolled} isHomePage={isHomePage}>
        <img src="/Logo_Full_Name.png" alt="CreerWebConsulting Logo" />
      </Logo>
      
      <MenuIcon onClick={() => setIsOpen(!isOpen)} scrolled={scrolled}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink 
            to="/" 
            scrolled={scrolled} 
            onClick={() => {
              setIsOpen(false)
              setTimeout(() => window.scrollTo(0, 0), 100)
            }}
            isActive={location.pathname === '/'}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/services" 
            scrolled={scrolled} 
            onClick={() => {
              setIsOpen(false)
              setTimeout(() => window.scrollTo(0, 0), 100)
            }}
            isActive={location.pathname === '/services'}
          >
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/about" 
            scrolled={scrolled} 
            onClick={() => {
              setIsOpen(false)
              setTimeout(() => window.scrollTo(0, 0), 100)
            }}
            isActive={location.pathname === '/about'}
          >
            About
          </NavLink>
        </NavItem>
        {/* Portfolio page temporarily hidden
        <NavItem>
          <NavLink to="/portfolio" scrolled={scrolled} onClick={() => setIsOpen(false)}>
            Portfolio
          </NavLink>
        </NavItem>
        */}
        <NavItem>
          <ContactButton 
            to="/contact" 
            onClick={() => {
              setIsOpen(false)
              setTimeout(() => window.scrollTo(0, 0), 100)
            }}
            isActive={location.pathname === '/contact'}
          >
            Contact Us
          </ContactButton>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
