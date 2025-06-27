import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  padding: ${props => props.padding || '4rem 0'};
  background-color: ${props => props.bgColor || 'var(--background)'};
  background-image: ${props => props.darkBg ? 'linear-gradient(to bottom, rgba(42, 63, 84, 0.95), rgba(30, 45, 61, 0.95))' : 'none'};
  position: relative;
  overflow: hidden;
  
  ${props => props.fullHeight && `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
  
  ${props => props.withOverlay && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1;
    }
  `}
`;

const SectionInner = styled.div`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: ${props => props.align || 'center'};
  margin-bottom: 3rem;
  
  h2 {
    margin-bottom: 1rem;
    color: ${props => props.darkBg ? '#ffffff' : 'inherit'};
    text-shadow: ${props => props.darkBg ? '0 2px 4px rgba(0, 0, 0, 0.7)' : 'none'};
    font-size: ${props => props.darkBg ? '2.6rem' : '2.5rem'};
    letter-spacing: ${props => props.darkBg ? '0.5px' : 'normal'};
  }
  
  p {
    max-width: 700px;
    margin: ${props => props.align === 'center' ? '0 auto' : '0'};
    color: ${props => props.darkBg ? 'rgba(255, 255, 255, 0.95)' : 'var(--text-light)'};
    text-shadow: ${props => props.darkBg ? '0 2px 4px rgba(0, 0, 0, 0.7)' : 'none'};
    line-height: 1.8;
    font-weight: ${props => props.darkBg ? '400' : 'inherit'};
    font-size: ${props => props.darkBg ? '1.1rem' : 'inherit'};
    letter-spacing: ${props => props.darkBg ? '0.3px' : 'normal'};
  }
`;

const Section = ({ 
  children, 
  title, 
  subtitle, 
  align = 'center',
  bgColor,
  padding,
  fullHeight,
  withOverlay,
  darkBg,
  ...props 
}) => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <SectionContainer
      bgColor={bgColor}
      padding={padding}
      fullHeight={fullHeight}
      withOverlay={withOverlay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      {...props}
    >
      <SectionInner>
        {(title || subtitle) && (
          <SectionHeader 
            align={align} 
            variants={headerVariants}
            darkBg={darkBg || withOverlay || bgColor === '#2a3f54'}
          >
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </SectionHeader>
        )}
        {children}
      </SectionInner>
    </SectionContainer>
  );
};

export default Section;
