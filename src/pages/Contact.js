import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../components/common/ContactForm';
import { Container } from '../styles/commonStyles';

const ContactInfo = styled.div`
  padding: 2rem 0;
`;

const ContactInfoTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #272727;
  font-weight: 400;
`;

const ContactInfoSubtitle = styled.p`
  font-size: 1.1rem;
  color: #909090;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #909090;
  
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    opacity: 0.6;
  }
`;

const ContactItemText = styled.a`
  color: #909090;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2A4FC9;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #909090;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    opacity: 0.6;
  }
  
  &:hover {
    color: #2A4FC9;
    
    img {
      opacity: 1;
    }
  }
`;













const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: start;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Contact = () => {
  useEffect(() => {
    document.title = 'CWC | Contact';
  }, []);

  return (
    <Container>
      <ContactSection>
        <ContactInfo>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfoTitle>Contact Us</ContactInfoTitle>
            <ContactInfoSubtitle>
              Let's discuss your project and how we can help your business reach its full potential.
            </ContactInfoSubtitle>
            
            <ContactItem>
              <img src="/icons/Envelope.svg" alt="Email" />
              <ContactItemText href="mailto:spencercreer@gmail.com">
                spencercreer@gmail.com
              </ContactItemText>
            </ContactItem>
            
            <ContactItem>
              <img src="/icons/Phone.svg" alt="Phone" />
              <ContactItemText href="tel:+16025254634">
                (602) 525-4634
              </ContactItemText>
            </ContactItem>
            
            <SocialLinks>
              <SocialLink href="https://github.com/spencercreer" target="_blank" rel="noopener noreferrer">
                <img src="/icons/GithubLogo.svg" alt="GitHub" />
                Github
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/107837274/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/LinkedinLogo.svg" alt="LinkedIn" />
                LinkedIn
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </ContactInfo>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm 
            fields={[
              { name: 'name', label: 'Name', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'email', required: true },
              { name: 'phone', label: 'Phone (Optional)', type: 'tel', required: false },
              { name: 'subject', label: 'Subject', type: 'text', required: true },
              { name: 'message', label: 'Message', type: 'textarea', required: true }
            ]}
            submitButtonText="Submit"
            successMessage="Thank you for your message! We will get back to you soon."
          />
        </motion.div>
      </ContactSection>
    </Container>
  );
};

export default Contact;
