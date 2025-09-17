import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

import { ExternalLinks } from '../Cards/CardStyles';
import ProjectCard from '../Cards/ProjectCard';

import { projects } from '../../constants/constants';

// --- Styled Components ---

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  padding: 40px 0;
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    padding: 24px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 0;
  }
`;

const LinkContainer = styled(motion.div)`
  text-align: center;
  margin-top: 48px;
`;

// --- Utility Functions ---

const getLatestProjects = (count) => {
  return [...projects]
    .sort((a, b) => a.order - b.order)
    .slice(0, count);
};

// --- Component ---

const Projects = () => {
  const latestProjects = getLatestProjects(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle>Latest Projects</SectionTitle>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <GridContainer>
          {latestProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard item={project} />
            </motion.div>
          ))}
        </GridContainer>
      </motion.div>

      <LinkContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ExternalLinks href="/all-projects" className="link-to" title="See all projects">
          See All Projects
        </ExternalLinks>
      </LinkContainer>

    </Section>
  );
};

export default Projects;
