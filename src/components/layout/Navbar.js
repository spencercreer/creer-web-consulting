import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import useScrollToTop from '../../hooks/useScrollToTop';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  transition: all 0.3s ease-in-out;
  background-color: ${props => 
    props.isHomePage && !props.scrolled ? 'transparent' : '#ffffff'};
  box-shadow: ${props => (props.scrolled || !props.isHomePage) ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  color: ${props => (props.isHomePage && !props.scrolled) ? '#ffffff' : '#272727'};
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1002;
  
  img {
    height: 40px;
    transition: all 0.3s ease;
    filter: ${props => props.isHomePage && !props.scrolled ? 'brightness(0) invert(1)' : 'none'};
  }
  
  @media (max-width: 768px) {
    img {
      height: 32px;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  z-index: 1002;
  position: relative;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Backdrop = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
    padding: 5rem 2rem 2rem 2rem;
    z-index: 999;
    box-shadow: ${({ isOpen }) => (isOpen ? '2px 0 10px rgba(0, 0, 0, 0.1)' : 'none')};
    overflow-y: auto;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    
    &:last-child {
      border-bottom: none;
      margin-top: 1rem;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${props => (props.isHomePage && !props.scrolled) ? '#ffffff' : '#272727'};
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
    display: block;
    width: 100%;
    color: #272727;
    font-size: 1.1rem;
    padding: 1rem;
    text-align: left;
    
    &:after {
      display: none;
    }
    
    &:hover {
      background-color: #f5f5f5;
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
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.8rem;
  }
`;

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('ul') && !e.target.closest('.hamburger-react')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Nav scrolled={scrolled} isHomePage={isHomePage}>
        <Logo
          to="/"
          scrolled={scrolled}
          isHomePage={isHomePage}
          onClick={() => {
            setIsOpen(false);
            scrollToTop();
          }}
        >
          <img src="/Logo_Full_Name.png" alt="CreerWebConsulting Logo" />
        </Logo>
        
        <MenuIcon scrolled={scrolled} isHomePage={isHomePage}>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color={(isHomePage && !scrolled) ? '#ffffff' : '#272727'}
            duration={0.3}
          />
        </MenuIcon>
        
        <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink 
            to="/" 
            scrolled={scrolled}
            isHomePage={isHomePage}
            onClick={() => {
              setIsOpen(false)
              scrollToTop()
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
            isHomePage={isHomePage}
            onClick={() => {
              setIsOpen(false)
              scrollToTop()
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
            isHomePage={isHomePage}
            onClick={() => {
              setIsOpen(false)
              scrollToTop()
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
              scrollToTop()
            }}
            isActive={location.pathname === '/contact'}
          >
            Contact Us
          </ContactButton>
        </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
