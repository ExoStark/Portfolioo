import React from 'react';
import { motion } from 'framer-motion';

import { Container } from './LayoutStyles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

// For SEO and metadata (e.g., using react-helmet-async or similar library)
import Head from '../components/Head';

// Centralize the animation variants and transition properties for reusability.
const transition = {
  // Use a 'spring' for a more natural, fluid animation.
  type: 'spring',
  damping: 10,
  stiffness: 100,
  restDelta: 0.001,
  duration: 0.6, // Shorter duration for a snappier feel.
};

const variants = {
  hidden: { opacity: 0, x: -50, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};

export const Layout = ({ children, title, description }) => {
  return (
    <>
      {/* Conditionally include the Head component for SEO. */}
      {title && <Head title={title} description={description} />}
      <Container>
        <Header />
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={transition}
        >
          {children}
        </motion.main>
        <Footer />
        <ScrollToTop />
      </Container>
    </>
  );
};

export default Layout;
