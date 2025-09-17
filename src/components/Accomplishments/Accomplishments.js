import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from 'react-countup';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects', description: 'that I have built and contributed to.' },
  { number: 1000, text: 'Students Mentored', description: 'in various coding bootcamps and workshops.' },
  { number: 1900, text: 'Github Followers', description: 'who support my work and open-source contributions.' },
  { number: 5000, text: 'Github Stars', description: 'for my various repositories and code examples.' },
];

// Helper function to format numbers with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const AnimatedBoxNum = ({ end }) => {
  // We use a ref and useInView to trigger the animation when the component is visible.
  const countRef = React.useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  
  const { countUp, start } = useCountUp({
    start: 0,
    end: end,
    duration: 2.5,
    formattingFn: formatNumber,
  });

  React.useEffect(() => {
    if (isInView) {
      start();
    }
  }, [isInView, start]);

  return <BoxNum ref={countRef}>{countUp}+</BoxNum>;
};

const Accomplishments = () => (
  <Section aria-label="My Personal Achievements">
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <motion.div
          key={index}
          // Animate the boxes as they come into view
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Box>
            <AnimatedBoxNum end={card.number} />
            <BoxText>{card.text}</BoxText>
            {/* You can add a description here if you want more detail */}
            {/* <p className="description">{card.description}</p> */}
          </Box>
        </motion.div>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Accomplishments;
