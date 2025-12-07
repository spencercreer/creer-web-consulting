import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CardContainer = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: ${props => props.height || '200px'};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${CardContainer}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: 0.75rem;
  color: var(--secondary);
`;

const CardText = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
`;

const CardFooter = styled.div`
  padding: 0 1.5rem 1.5rem;
  margin-top: auto;
`;

const CardTag = styled.span`
  display: inline-block;
  background-color: rgba(42, 79, 201, 0.1);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Card = ({
  image,
  imageHeight,
  title,
  text,
  tags,
  link,
  linkText,
  externalLink,
  footer,
  children,
  ...props
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const CardWrapper = ({ children }) => (
    <CardContainer
      variants={cardVariants}
      {...props}
    >
      {children}
    </CardContainer>
  );

  const content = (
    <>
      {image && (
        <CardImage height={imageHeight}>
          <img src={image} alt={title} />
        </CardImage>
      )}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {text && <CardText>{text}</CardText>}
        {tags && (
          <div>
            {tags.map((tag, index) => (
              <CardTag key={index}>{tag}</CardTag>
            ))}
          </div>
        )}
        {children}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </>
  );

  if (link && !externalLink) {
    return (
      <CardWrapper>
        <Link to={link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
          {content}
        </Link>
      </CardWrapper>
    );
  }

  if (externalLink) {
    return (
      <CardWrapper>
        <a href={externalLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
          {content}
        </a>
      </CardWrapper>
    );
  }

  return <CardWrapper>{content}</CardWrapper>;
};

export default Card;
