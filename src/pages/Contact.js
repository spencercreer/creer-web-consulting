import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// Import common components
import Section from '../components/common/Section';
import Grid from '../components/common/Grid';
import ContactForm from '../components/common/ContactForm';

const ContactContainer = styled.div`
  padding: 120px 2rem 5rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  span {
    color: #4a90e2;
  }
`;

const PageDescription = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: #666;
`;

const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

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

const ContactItemText = styled.p`
  color: #ffffff;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 400;
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

const ContactFormContainer = styled.div`
  background-color: #f7f7f7;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex: 1;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  position: relative;
  
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

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

const FormButton = styled.button`
  background-color: #4a90e2;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
    transform: translateY(-3px);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
  }
  
  &.error {
    background-color: #f8d7da;
    color: #721c24;
  }
`;

const MapSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
`;

const MapTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const MapContainer = styled.div`
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Contact = () => {
  
  return (
    <ContactContainer>
      <Section 
        padding="120px 0 3rem"
        title="Contact Us"
        subtitle="Have a question or want to discuss a project? Get in touch with us and we'll get back to you as soon as possible."
        darkBg={false}
      >
      
      <Grid columns={3} tabletColumns={1} gap="3rem">
        <Grid.Item span={1}>
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
                <ContactItemText>info@creerweb.com</ContactItemText>
              </ContactItemContent>
            </ContactItem>
            
            <ContactItem>
              <FaPhone />
              <ContactItemContent>
                <ContactItemTitle>Phone</ContactItemTitle>
                <ContactItemText>(555) 123-4567</ContactItemText>
              </ContactItemContent>
            </ContactItem>
            
            <ContactItem>
              <FaMapMarkerAlt />
              <ContactItemContent>
                <ContactItemTitle>Location</ContactItemTitle>
                <ContactItemText>
                  123 Tech Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </ContactItemText>
              </ContactItemContent>
            </ContactItem>
            
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
            </motion.div>
          </ContactInfo>
        </Grid.Item>
        
        <Grid.Item span={2}>
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
        </Grid.Item>
      </Grid>
      
      {/* Location section temporarily hidden
      <Section title="Our Location" padding="5rem 0 3rem">
        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143526147!2d-122.39997368468215!3d37.78779997975728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd61a4390d5fa39!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1625084140176!5m2!1sen!2sus" 
            allowFullScreen="" 
            loading="lazy"
            title="Office Location"
          ></iframe>
        </MapContainer>
      </Section>
      */}
      </Section>
    </ContactContainer>
  );
};

export default Contact;
