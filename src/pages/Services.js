import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Container, PageHeader, PageTitle, PageDescription } from '../styles/commonStyles';

const ServiceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  &:nth-child(even) {
    direction: rtl;
    > div { direction: ltr; }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    direction: ltr !important;
  }
`;

const PageTitleStyled = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #272727;
  font-weight: 400;
  max-width: 1200px;
  margin: 0 auto 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: #909090;
  margin-bottom: 5rem;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto 5rem;
`;

const ServiceTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #272727;
  font-weight: 400;
`;

const ServiceDescription = styled.p`
  color: #909090;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  
  li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    
    &:before {
      content: '✓';
      color: #2A4FC9;
      margin-right: 10px;
      font-weight: bold;
    }
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
  background: linear-gradient(135deg, #2A4FC9 0%, #7F97E8 100%);
  text-align: center;
  border-radius: 8px;
  max-width: 1200px;
  margin: 0 auto;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: white;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 2rem;
    color: white;
    opacity: 0.9;
  }
`;

const Services = () => {
  useEffect(() => {
    document.title = 'CWC | Services';
  }, []);

  return (
    <Container>
      <PageTitleStyled>Our Services</PageTitleStyled>
      <PageSubtitle>
        We provide comprehensive technology solutions tailored to your business needs, from web development and cloud architecture to AI integration and mobile applications.
      </PageSubtitle>
      
      <ServiceSection id="web-development">
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
            <li>Custom web application development</li>
            <li>Frontend development with React, Angular, or Vue</li>
            <li>Backend development with Node.js, Python, or Java</li>
            <li>Database design and optimization</li>
            <li>API development and integration</li>
            <li>Progressive Web Apps (PWAs)</li>
          </ServiceFeatures>
        </motion.div>
        <ServiceImage>
          <motion.img 
            src="/images/services/web_dev.png" 
            alt="Web Development"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <ServiceSection id="cloud-architecture">
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
            <li>AWS architecture design and implementation</li>
            <li>Cloud migration strategies</li>
            <li>Serverless application development</li>
            <li>Infrastructure as Code (IaC)</li>
            <li>DevOps and CI/CD pipeline setup</li>
            <li>Cloud security and compliance</li>
          </ServiceFeatures>
        </motion.div>
        <ServiceImage>
          <motion.img 
            src="/images/services/cloud_arch.png" 
            alt="Cloud Architecture"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <ServiceSection id="ai-integration">
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
            <li>Machine learning model integration</li>
            <li>Natural Language Processing (NLP) solutions</li>
            <li>Computer vision applications</li>
            <li>Chatbot and virtual assistant development</li>
            <li>Predictive analytics implementation</li>
            <li>AI-powered recommendation systems</li>
          </ServiceFeatures>
        </motion.div>
        <ServiceImage>
          <motion.img 
            src="/images/services/ai.png" 
            alt="AI Integration"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <ServiceSection id="mobile-development">
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
            <li>iOS and Android native app development</li>
            <li>Cross-platform development with React Native or Flutter</li>
            <li>Mobile UI/UX design</li>
            <li>App Store optimization and deployment</li>
            <li>Mobile app testing and quality assurance</li>
            <li>App maintenance and support</li>
          </ServiceFeatures>
        </motion.div>
        <ServiceImage>
          <motion.img 
            src="/images/services/mobile_dev.png" 
            alt="Mobile Development"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <ServiceSection id="website-design">
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
            <li>Responsive website design</li>
            <li>WordPress development</li>
            <li>E-commerce website development</li>
            <li>Landing page optimization</li>
            <li>SEO-friendly website structure</li>
            <li>Website maintenance and support</li>
          </ServiceFeatures>
        </motion.div>
        <ServiceImage>
          <motion.img 
            src="/images/services/web_design.png" 
            alt="Website Design"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </ServiceImage>
      </ServiceSection>
      
      <CTASection>
        <h2>Ready to Get Started?</h2>
        <p>
          Contact us today to discuss your project requirements and how our services
          can help your business grow in the digital landscape.
        </p>
        <Button primary large to="/contact">Schedule a Consultation</Button>
      </CTASection>
    </Container>
  );
};

export default Services;
