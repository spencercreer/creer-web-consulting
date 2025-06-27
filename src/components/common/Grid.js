import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 12}, 1fr);
  gap: ${props => props.gap || '1.5rem'};
  width: 100%;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(${props => props.tabletColumns || 6}, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(${props => props.mobileColumns || 4}, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(${props => props.smallMobileColumns || 2}, 1fr);
    gap: ${props => props.mobileGap || '1rem'};
  }
`;

const GridItem = styled(motion.div)`
  grid-column: span ${props => props.span || 1};
  
  @media (max-width: 992px) {
    grid-column: span ${props => props.tabletSpan || props.span || 1};
  }
  
  @media (max-width: 768px) {
    grid-column: span ${props => props.mobileSpan || props.tabletSpan || props.span || 1};
  }
  
  @media (max-width: 576px) {
    grid-column: span ${props => props.smallMobileSpan || props.mobileSpan || props.tabletSpan || props.span || 1};
  }
`;

const Grid = ({ children, ...props }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <GridContainer 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      {children}
    </GridContainer>
  );
};

const Item = ({ children, ...props }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <GridItem
      variants={itemVariants}
      {...props}
    >
      {children}
    </GridItem>
  );
};

Grid.Item = Item;

export default Grid;
