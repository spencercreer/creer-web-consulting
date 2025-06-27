import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaRobot, FaMobile, FaPalette } from 'react-icons/fa';

// Import common components
import Section from '../components/common/Section';
import Grid from '../components/common/Grid';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

// Hero Section
const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('/images/hero-bg.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  span {
    color: #4a90e2;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
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

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

// Services Section
const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  
  span {
    color: #4a90e2;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #666;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #4a90e2;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const ServiceLink = styled(Link)`
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

// About Section
const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div``;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  span {
    color: #4a90e2;
  }
`;

const AboutDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const AboutList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const AboutListItem = styled.li`
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

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
              url('/images/cta-bg.jpg') no-repeat center center/cover;
  color: white;
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>Web Development & Cloud Solutions</span>
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expert consulting for web applications, cloud architecture, AI integration, 
          and mobile development to help your business thrive in the digital world.
        </HeroSubtitle>
        <ButtonGroup
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <PrimaryButton to="/contact">Get Started</PrimaryButton>
          <SecondaryButton to="/services">Our Services</SecondaryButton>
        </ButtonGroup>
      </HeroSection>

      <Section 
        title="Our Services" 
        subtitle="We provide comprehensive technology solutions to help businesses innovate and grow in today's digital landscape."
        bgColor="var(--background-alt)"
        padding="5rem 0"
      >
        <Grid columns={4} tabletColumns={2} mobileColumns={1} gap="2rem">
          <Grid.Item span={1}>
            <motion.div
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                icon={<FaCode />}
                title="Web App Development"
                text="Custom web applications built with modern frameworks and best practices to deliver exceptional user experiences."
                to="/services#web-development"
                linkText="Learn More"
                delay={0}
              />
            </motion.div>
          </Grid.Item>
          
          <Grid.Item span={1}>
            <motion.div
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                icon={<FaCloud />}
                title="Cloud Architecture"
                text="AWS-certified cloud solutions that optimize performance, security, and cost-efficiency for your business."
                to="/services#cloud-architecture"
                linkText="Learn More"
                delay={0.1}
              />
            </motion.div>
          </Grid.Item>
          
          <Grid.Item span={1}>
            <motion.div
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                icon={<FaRobot />}
                title="AI Integration"
                text="Implement cutting-edge AI solutions to automate processes and gain valuable insights from your data."
                to="/services#ai-integration"
                linkText="Learn More"
                delay={0.2}
              />
            </motion.div>
          </Grid.Item>
          
          <Grid.Item span={1}>
            <motion.div
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                icon={<FaMobile />}
                title="Mobile Development"
                text="Native and cross-platform mobile applications that provide seamless experiences across all devices."
                to="/services#mobile-development"
                linkText="Learn More"
                delay={0.3}
              />
            </motion.div>
          </Grid.Item>
          
          <Grid.Item span={1}>
            <motion.div
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                icon={<FaPalette />}
                title="Website Design"
                text="Beautiful, responsive websites that represent your brand and engage your audience with exceptional user experiences."
                to="/services#website-design"
                linkText="Learn More"
                delay={0.4}
              />
            </motion.div>
          </Grid.Item>
        </Grid>
      </Section>

      <Section padding="5rem 0">
        <Grid columns={2} mobileColumns={1} gap="3rem">
          <Grid.Item span={1}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <AboutTitle>About <span>CreerWebConsulting</span></AboutTitle>
              <AboutDescription>
                Founded by Spencer Creer, an AWS-certified software engineer,
                CreerWebConsulting delivers high-quality technology
                solutions for businesses of all sizes.
              </AboutDescription>
              <AboutDescription>
                With a Master's degree in Computer Science from ASU and extensive experience
                in web development, cloud architecture, and AI integration, we bring expertise
                and innovation to every project.
              </AboutDescription>
              <AboutList>
                <AboutListItem>AWS Certified Developer</AboutListItem>
                <AboutListItem>Master's in Computer Science</AboutListItem>
                <AboutListItem>Professional Software Engineering Experience</AboutListItem>
                <AboutListItem>End-to-End Development Solutions</AboutListItem>
              </AboutList>
              <Button primary to="/about">Learn More About Us</Button>
            </motion.div>
          </Grid.Item>
          <Grid.Item span={1}>
            <AboutImage>
              <motion.img 
                src="/images/about/about-img.jpg" 
                alt="About CreerWebConsulting"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            </AboutImage>
          </Grid.Item>
        </Grid>
      </Section>

      <Section 
        bgColor="var(--secondary)" 
        padding="5rem 0" 
        title="Ready to Transform Your Digital Presence?"
        subtitle="Let's discuss how our web development, cloud architecture, and AI integration services can help your business reach its full potential."
        align="center"
        textColor="white"
        darkBg={true}
      >
        <Button primary large to="/contact">Contact Us Today</Button>
      </Section>
    </>
  );
};

export default Home;
