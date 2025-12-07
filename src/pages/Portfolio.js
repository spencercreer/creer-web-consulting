import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import common components
import Section from '../components/common/Section';
import Grid from '../components/common/Grid';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const PortfolioContainer = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#4a90e2' : 'transparent'};
  color: ${props => props.active ? 'white' : '#333'};
  border: ${props => props.active ? '2px solid #4a90e2' : '2px solid #ddd'};
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#4a90e2' : '#f5f5f5'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectCategory = styled.span`
  background-color: #f0f7ff;
  color: #4a90e2;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const ProjectLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:after {
    content: '→';
    margin-left: 5px;
  }
`;

const CTASection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 8px;
  max-width: 1200px;
  margin: 5rem auto 0;
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

const Portfolio = () => {
  useEffect(() => {
    document.title = 'CWC | Portfolio';
  }, []);

  const [filter, setFilter] = useState('all');
  
  // Define category labels for display
  const categoryLabels = {
    'web-development': 'Web Development',
    'cloud-architecture': 'Cloud Architecture',
    'ai-integration': 'AI Integration',
    'mobile-development': 'Mobile Development',
    'website-design': 'Website Design'
  };
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web-development',
      image: '/images/portfolio/project1.jpg',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and secure payment processing.',
      link: '#'
    },
    {
      id: 2,
      title: 'Cloud Migration Project',
      category: 'cloud-architecture',
      image: '/images/portfolio/project2.jpg',
      description: 'Migrated a legacy application to AWS cloud infrastructure, improving scalability and reducing operational costs.',
      link: '#'
    },
    {
      id: 3,
      title: 'AI-Powered Chatbot',
      category: 'ai-integration',
      image: '/images/portfolio/project3.jpg',
      description: 'Developed a customer service chatbot using natural language processing to handle common inquiries.',
      link: '#'
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      category: 'mobile-development',
      image: '/images/portfolio/project4.jpg',
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness progress.',
      link: '#'
    },
    {
      id: 5,
      title: 'Corporate Website Redesign',
      category: 'website-design',
      image: '/images/portfolio/project5.jpg',
      description: 'Complete redesign of a corporate website with improved user experience and responsive design.',
      link: '#'
    },
    {
      id: 6,
      title: 'Inventory Management System',
      category: 'web-development',
      image: '/images/portfolio/project6.jpg',
      description: 'A web-based inventory management system with real-time tracking and reporting features.',
      link: '#'
    },
    {
      id: 7,
      title: 'Serverless API Architecture',
      category: 'cloud-architecture',
      image: '/images/portfolio/project1.jpg',
      description: 'Designed and implemented a serverless API architecture using AWS Lambda and API Gateway.',
      link: '#'
    },
    {
      id: 8,
      title: 'Predictive Analytics Dashboard',
      category: 'ai-integration',
      image: '/images/portfolio/project2.jpg',
      description: 'A dashboard that uses machine learning to provide predictive insights from business data.',
      link: '#'
    },
    {
      id: 9,
      title: 'Food Delivery App',
      category: 'mobile-development',
      image: '/images/portfolio/project3.jpg',
      description: 'A mobile application for food ordering and delivery with real-time order tracking.',
      link: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <PortfolioContainer>
      <Section 
        padding="120px 0 3rem"
        title="Our Portfolio"
        subtitle="Explore our recent projects and see how we've helped businesses solve their technology challenges and achieve their goals."
      >
      
      <FilterContainer>
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All Projects
        </FilterButton>
        <FilterButton 
          active={filter === 'web-development'} 
          onClick={() => setFilter('web-development')}
        >
          Web Development
        </FilterButton>
        <FilterButton 
          active={filter === 'cloud-architecture'} 
          onClick={() => setFilter('cloud-architecture')}
        >
          Cloud Architecture
        </FilterButton>
        <FilterButton 
          active={filter === 'ai-integration'} 
          onClick={() => setFilter('ai-integration')}
        >
          AI Integration
        </FilterButton>
        <FilterButton 
          active={filter === 'mobile-development'} 
          onClick={() => setFilter('mobile-development')}
        >
          Mobile Development
        </FilterButton>
        <FilterButton 
          active={filter === 'website-design'} 
          onClick={() => setFilter('website-design')}
        >
          Website Design
        </FilterButton>
      </FilterContainer>
      
      <Grid columns={3} tabletColumns={2} mobileColumns={1} gap="2rem">
        {filteredProjects.map((project, index) => (
          <Grid.Item key={project.id} span={1}>
            <motion.div
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                image={project.image}
                title={project.title}
                text={project.description}
                tags={[categoryLabels[project.category]]}
                link={project.link}
                linkText="View Project"
                delay={index * 0.1}
              />
            </motion.div>
          </Grid.Item>
        ))}
      </Grid>
      
      <Section bgColor="var(--secondary)" padding="4rem 0" marginTop="5rem">
        <CTASection>
          <CTATitle>Have a Project in Mind?</CTATitle>
          <CTADescription>
            Let's discuss how we can help bring your ideas to life with our expertise
            in web development, cloud architecture, and AI integration.
          </CTADescription>
          <Button primary large to="/contact">Start a Project</Button>
        </CTASection>
      </Section>
      </Section>
    </PortfolioContainer>
  );
};

export default Portfolio;
