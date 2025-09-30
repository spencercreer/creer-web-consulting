import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from '../components/common/ContactForm';
import { Container, PageHeader, PageTitle, PageDescription } from '../styles/commonStyles';

const ContactInfo = styled.div`
  background-color: #2a3f54;
  background-image: linear-gradient(to bottom, #2a3f54, #1e2d3d);
  padding: 3rem 2rem;
  border-radius: 8px;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const ContactInfoTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  position: relative;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.8rem;
    width: 50px;
    height: 2px;
    background-color: #4a90e2;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  svg {
    margin-right: 15px;
    font-size: 1.5rem;
    color: #4a90e2;
    margin-top: 5px;
  }
`;

const ContactItemContent = styled.div``;

const ContactItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;


const ContactItemLink = styled.a`
  color: #ffffff;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: #4a90e2;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #4a90e2;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(74, 144, 226, 0.4);
  }
`;













const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Contact = () => {
  return (
    <Container>
      <PageHeader>
        <PageTitle>Contact <span>Us</span></PageTitle>
        <PageDescription>
          Have a question or want to discuss a project? Get in touch with us and we'll get back to you as soon as possible.
        </PageDescription>
      </PageHeader>
      
      <ContactSection>
        <ContactInfo>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          <ContactInfoTitle>Get In Touch</ContactInfoTitle>
          
          <ContactItem>
            <FaEnvelope />
            <ContactItemContent>
              <ContactItemTitle>Email</ContactItemTitle>
              <ContactItemLink href="mailto:spencercreer@gmail.com">spencercreer@gmail.com</ContactItemLink>
            </ContactItemContent>
          </ContactItem>
          
          <ContactItem>
            <FaPhone />
            <ContactItemContent>
              <ContactItemTitle>Phone</ContactItemTitle>
              <ContactItemLink href="tel:+16025254634">(602) 525-4634</ContactItemLink>
            </ContactItemContent>
          </ContactItem>
          
          <SocialLinks>
            <SocialIcon href="https://www.linkedin.com/in/spencer-creer-023246109/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://github.com/spencercreer" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
          </SocialLinks>
          </motion.div>
        </ContactInfo>
        
        <ContactForm 
          title="Send a Message"
          fields={[
            { name: 'name', label: 'Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', required: false },
            { name: 'subject', label: 'Subject', type: 'text', required: true },
            { name: 'message', label: 'Message', type: 'textarea', required: true }
          ]}
          submitButtonText="Send Message"
          successMessage="Thank you for your message! We will get back to you soon."
        />
      </ContactSection>
    </Container>
  );
};

export default Contact;
