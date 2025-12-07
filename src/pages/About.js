import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Container, PageHeader, PageTitle, PageDescription, SectionTitle } from '../styles/commonStyles';
const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeroContent = styled.div``;

const HeroTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const HeroDescription = styled.p`
  color: #909090;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const HeroImage = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

// Stats Section
const StatsSection = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 2rem;
  margin-bottom: 5rem;
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
`;


const StatNumber = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #272727;
`;

const StatTitle = styled.p`
  color: #909090;
  font-weight: 500;
`;

// Qualifications Section
const QualificationsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
`;


const QualificationsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const QualificationColumn = styled.div``;

const QualificationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const QualificationItem = styled(motion.div)`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #2A4FC9;
`;

const QualificationItemTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const QualificationItemSubtitle = styled.p`
  color: #2A4FC9;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const QualificationItemDate = styled.p`
  color: #909090;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const QualificationItemDescription = styled.p`
  color: #909090;
`;

// Values Section
const ValuesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
`;

const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const ValueDescription = styled.p`
  color: #909090;
`;

// CTA Section
const CTASection = styled.section`
  background: linear-gradient(135deg, #2A4FC9 0%, #7F97E8 100%);
  padding: 4rem 2rem;
  color: white;
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
  opacity: 0.9;
  color: white;
`;


const About = () => {
  return (
    <Container>
      <PageHeader>
        <PageTitle>About <span>Us</span></PageTitle>
        <PageDescription>
          Learn more about CreerWebConsulting, our expertise, and our approach to delivering exceptional technology solutions for our clients.
        </PageDescription>
      </PageHeader>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}
      >
        <HeroTitle>Expertise You Can Trust</HeroTitle>
        <HeroDescription>
          CreerWebConsulting was founded by Spencer Creer, an AWS-certified software engineer
          with a Master's degree in Computer Science from Arizona State University.
          Spencer combines academic knowledge with practical expertise to deliver
          exceptional technology solutions for businesses of all sizes.
        </HeroDescription>
        <HeroDescription>
          Our mission is to help businesses leverage technology to improve operations, enhance customer
          experiences, and drive growth. We believe in building long-term relationships with our clients
          by delivering high-quality solutions that address their specific needs.
        </HeroDescription>
      </motion.div>
      
      <StatsSection>
        <StatsContainer>
          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StatNumber>4+</StatNumber>
            <StatTitle>Years Experience</StatTitle>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatNumber>1</StatNumber>
            <StatTitle>AWS Certification</StatTitle>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatNumber>MSc</StatNumber>
            <StatTitle>Computer Science</StatTitle>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatNumber>20+</StatNumber>
            <StatTitle>Projects Completed</StatTitle>
          </StatCard>
        </StatsContainer>
      </StatsSection>
      
      <QualificationsSection>
        <SectionTitle>Education & <span>Experience</span></SectionTitle>
        <QualificationsContainer>
          <QualificationColumn>
            <QualificationTitle>
              Education
            </QualificationTitle>
            
            <QualificationItem
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <QualificationItemTitle>Master of Science in Computer Science</QualificationItemTitle>
              <QualificationItemSubtitle>Arizona State University</QualificationItemSubtitle>
              <QualificationItemDate>2018 - 2020</QualificationItemDate>
              <QualificationItemDescription>
                Specialized in cloud computing, artificial intelligence, and web technologies.
                Completed thesis on cloud-native application architectures.
              </QualificationItemDescription>
            </QualificationItem>
            
            <QualificationItem
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <QualificationItemTitle>Bachelor of Science in Computer Science</QualificationItemTitle>
              <QualificationItemSubtitle>University of Technology</QualificationItemSubtitle>
              <QualificationItemDate>2014 - 2018</QualificationItemDate>
              <QualificationItemDescription>
                Graduated with honors. Focused on software engineering, data structures,
                and web development fundamentals.
              </QualificationItemDescription>
            </QualificationItem>
          </QualificationColumn>
          
          <QualificationColumn>
            <QualificationTitle>
              Experience
            </QualificationTitle>
            
            <QualificationItem
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <QualificationItemTitle>Senior Software Engineer</QualificationItemTitle>
              <QualificationItemSubtitle>Tech Innovations Inc.</QualificationItemSubtitle>
              <QualificationItemDate>2021 - 2025</QualificationItemDate>
              <QualificationItemDescription>
                Led development of cloud-native applications using AWS services.
                Implemented AI solutions for data analysis and process automation.
                Designed and developed responsive web applications for enterprise clients.
              </QualificationItemDescription>
            </QualificationItem>
            
            <QualificationItem
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <QualificationItemTitle>Web Developer</QualificationItemTitle>
              <QualificationItemSubtitle>Digital Solutions LLC</QualificationItemSubtitle>
              <QualificationItemDate>2019 - 2021</QualificationItemDate>
              <QualificationItemDescription>
                Developed and maintained client websites and web applications.
                Implemented responsive designs and improved site performance.
                Collaborated with design and marketing teams to create effective digital solutions.
              </QualificationItemDescription>
            </QualificationItem>
          </QualificationColumn>
        </QualificationsContainer>
      </QualificationsSection>
      
      <ValuesSection>
        <SectionTitle>Our <span>Values</span></SectionTitle>
        <ValuesContainer>
          <ValueCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ValueTitle>Excellence</ValueTitle>
            <ValueDescription>
              We strive for excellence in everything we do, from code quality to client communication.
              Our commitment to high standards ensures we deliver solutions that exceed expectations.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ValueTitle>Innovation</ValueTitle>
            <ValueDescription>
              We embrace new technologies and approaches to solve complex problems.
              Our innovative mindset helps clients stay ahead in a rapidly evolving digital landscape.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ValueTitle>Partnership</ValueTitle>
            <ValueDescription>
              We view our client relationships as partnerships. We're invested in your success
              and work collaboratively to achieve your business goals through technology.
            </ValueDescription>
          </ValueCard>
        </ValuesContainer>
      </ValuesSection>
      
      <CTASection>
        <CTATitle>Ready to Work Together?</CTATitle>
        <CTADescription>
          Let's discuss how CreerWebConsulting can help your business leverage technology
          to achieve your goals and drive growth.
        </CTADescription>
        <Button primary large to="/contact">Get in Touch</Button>
      </CTASection>
    </Container>
  );
};

export default About;
