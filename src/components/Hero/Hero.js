import React from 'react';
import styled from 'styled-components';

// Import global styles or define local ones
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

// Define the styled component for the left section
const LeftSection = styled.div`
  width: 100%;
  padding-bottom: 40px; /* Consistent spacing */

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 20px;
  }
`;

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Explore my portfolio to quickly familiarize yourself with my projects and professional background. Feel free to connect via the contact links for a potential collaboration.
      </SectionText>
      <Button onClick={() => window.location.href = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
