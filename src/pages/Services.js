import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCloud, FaRobot, FaMobile, FaPalette } from 'react-icons/fa';

// Import common components
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const ServicesContainer = styled.div`
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

const ServiceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  &:nth-child(even) {
    direction: rtl;
  }
  
  &:nth-child(even) > div {
    direction: ltr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    direction: ltr !important;
  }
`;

const ServiceContent = styled.div``;

const ServiceTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const ServiceFeature = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: #4a90e2;
    margin-right: 10px;
    font-weight: bold;
  }
`;

const ServiceImage = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

const CTASection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 8px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #666;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #4a90e2;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
    transform: translateY(-3px);
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Section 
        padding="120px 0 3rem"
        title="Our Services"
        subtitle="We provide comprehensive technology solutions tailored to your business needs, from web development and cloud architecture to AI integration and mobile applications."
      >
      
      <ServiceSection id="web-development">
        <ServiceContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ServiceTitle>Web App Development</ServiceTitle>
            <ServiceDescription>
              We build custom web applications that are scalable, secure, and user-friendly.
              Using modern frameworks and best practices, we create solutions that help your
              business operate more efficiently and provide exceptional experiences to your users.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Custom web application development</ServiceFeature>
              <ServiceFeature>Frontend development with React, Angular, or Vue</ServiceFeature>
              <ServiceFeature>Backend development with Node.js, Python, or Java</ServiceFeature>
              <ServiceFeature>Database design and optimization</ServiceFeature>
              <ServiceFeature>API development and integration</ServiceFeature>
              <ServiceFeature>Progressive Web Apps (PWAs)</ServiceFeature>
            </ServiceFeatures>
          </motion.div>
        </ServiceContent>
        <ServiceImage>
          <motion.img 
            src="/images/services/image.png" 
            alt="Web Development"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <ServiceSection id="cloud-architecture">
        <ServiceContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ServiceTitle>Cloud Architecture</ServiceTitle>
            <ServiceDescription>
              As an AWS Certified Developer, we design and implement cloud solutions that
              optimize performance, security, and cost-efficiency. We help businesses
              leverage the power of cloud computing to scale operations and innovate faster.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>AWS architecture design and implementation</ServiceFeature>
              <ServiceFeature>Cloud migration strategies</ServiceFeature>
              <ServiceFeature>Serverless application development</ServiceFeature>
              <ServiceFeature>Infrastructure as Code (IaC)</ServiceFeature>
              <ServiceFeature>DevOps and CI/CD pipeline setup</ServiceFeature>
              <ServiceFeature>Cloud security and compliance</ServiceFeature>
            </ServiceFeatures>
          </motion.div>
        </ServiceContent>
        <ServiceImage>
          <motion.img 
            src="/images/services/image.png" 
            alt="Cloud Architecture"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <ServiceSection id="ai-integration">
        <ServiceContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ServiceTitle>AI Integration</ServiceTitle>
            <ServiceDescription>
              We help businesses implement cutting-edge AI solutions to automate processes,
              gain valuable insights from data, and create intelligent applications that
              provide competitive advantages in today's market.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Machine learning model integration</ServiceFeature>
              <ServiceFeature>Natural Language Processing (NLP) solutions</ServiceFeature>
              <ServiceFeature>Computer vision applications</ServiceFeature>
              <ServiceFeature>Chatbot and virtual assistant development</ServiceFeature>
              <ServiceFeature>Predictive analytics implementation</ServiceFeature>
              <ServiceFeature>AI-powered recommendation systems</ServiceFeature>
            </ServiceFeatures>
          </motion.div>
        </ServiceContent>
        <ServiceImage>
          <motion.img 
            src="/images/services/image.png" 
            alt="AI Integration"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <ServiceSection id="mobile-development">
        <ServiceContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ServiceTitle>Mobile Development</ServiceTitle>
            <ServiceDescription>
              We develop native and cross-platform mobile applications that provide
              seamless experiences across all devices. Our mobile solutions help businesses
              engage with customers and streamline operations on the go.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>iOS and Android native app development</ServiceFeature>
              <ServiceFeature>Cross-platform development with React Native or Flutter</ServiceFeature>
              <ServiceFeature>Mobile UI/UX design</ServiceFeature>
              <ServiceFeature>App Store optimization and deployment</ServiceFeature>
              <ServiceFeature>Mobile app testing and quality assurance</ServiceFeature>
              <ServiceFeature>App maintenance and support</ServiceFeature>
            </ServiceFeatures>
          </motion.div>
        </ServiceContent>
        <ServiceImage>
          <motion.img 
            src="/images/services/image.png" 
            alt="Mobile Development"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <ServiceSection id="website-design">
        <ServiceContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ServiceTitle>Website Design & Development</ServiceTitle>
            <ServiceDescription>
              We create beautiful, responsive websites that represent your brand and
              engage your audience. Our designs focus on user experience, performance,
              and conversion optimization to help you achieve your business goals.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Responsive website design</ServiceFeature>
              <ServiceFeature>WordPress development</ServiceFeature>
              <ServiceFeature>E-commerce website development</ServiceFeature>
              <ServiceFeature>Landing page optimization</ServiceFeature>
              <ServiceFeature>SEO-friendly website structure</ServiceFeature>
              <ServiceFeature>Website maintenance and support</ServiceFeature>
            </ServiceFeatures>
          </motion.div>
        </ServiceContent>
        <ServiceImage>
          <motion.img 
            src="/images/services/image.png" 
            alt="Website Design"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <Section bgColor="var(--secondary)" padding="4rem 0">
        <CTASection>
          <CTATitle>Ready to Get Started?</CTATitle>
          <CTADescription>
            Contact us today to discuss your project requirements and how our services
            can help your business grow in the digital landscape.
          </CTADescription>
          <Button primary large to="/contact">Schedule a Consultation</Button>
        </CTASection>
      </Section>
      </Section>
    </ServicesContainer>
  );
};

export default Services;
