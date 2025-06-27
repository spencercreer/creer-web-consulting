import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2a3f54;
  color: #ffffff;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 50px;
    height: 2px;
    background-color: #4a90e2;
  }
`;

const FooterText = styled.p`
  color: #ffffff;
  opacity: 0.9;
  line-height: 1.6;
  font-size: 0.95rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #ffffff;
  opacity: 0.9;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  &:hover {
    color: #4a90e2;
    transform: translateX(5px);
    opacity: 1;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #ffffff;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  svg {
    margin-right: 10px;
    color: #4a90e2;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3a4f65;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #4a90e2;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #ffffff;
  opacity: 0.8;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <FooterText>
            CreerWebConsulting provides expert services in web development, 
            cloud architecture, AI integration, and mobile app development.
            As an AWS-certified team, we deliver high-quality solutions 
            for businesses of all sizes.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Our Services</FooterTitle>
          <FooterLink to="/services#web-development">Web App Development</FooterLink>
          <FooterLink to="/services#cloud-architecture">Cloud Architecture</FooterLink>
          <FooterLink to="/services#ai-integration">AI Integration</FooterLink>
          <FooterLink to="/services#mobile-development">Mobile Development</FooterLink>
          <FooterLink to="/services#website-design">Website Design</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/" onClick={() => window.scrollTo(0, 0)}>Home</FooterLink>
          <FooterLink to="/about" onClick={() => window.scrollTo(0, 0)}>About</FooterLink>
          <FooterLink to="/services" onClick={() => window.scrollTo(0, 0)}>Services</FooterLink>
          {/* <FooterLink to="/portfolio" onClick={() => window.scrollTo(0, 0)}>Portfolio</FooterLink> */}
          <FooterLink to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactItem>
            <FaEnvelope />
            <span>info@creerwebconsulting.com</span>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <span>(602) 525-4634</span>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>Chandler, AZ</span>
          </ContactItem>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} CreerWebConsulting. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
