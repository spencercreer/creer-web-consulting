import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyles = css`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  ${props => props.primary && css`
    background-color: var(--primary);
    color: white;
    border: none;
    
    &:hover {
      background-color: var(--primary-light);
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }
  `}
  
  ${props => props.secondary && css`
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
    
    &:hover {
      background-color: rgba(42, 79, 201, 0.1);
      transform: translateY(-3px);
    }
  `}
  
  ${props => props.small && css`
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  `}
  
  ${props => props.large && css`
    padding: 1rem 2.5rem;
    font-size: 1.125rem;
  `}
  
  ${props => props.fullWidth && css`
    display: block;
    width: 100%;
  `}
  
  ${props => props.disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  `}
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}
`;

const StyledAnchor = styled.a`
  ${ButtonStyles}
`;

const Button = ({ children, to, href, ...props }) => {
  if (to) {
    return <StyledLink to={to} {...props}>{children}</StyledLink>;
  }
  
  if (href) {
    return <StyledAnchor href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</StyledAnchor>;
  }
  
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
