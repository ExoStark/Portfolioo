import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Button,
  CardInfo,
  HeaderThree,
  PictureImg,
  Picture,
  Hr,
  ImgContainer,
  Tag,
  TagList,
  TitleContent,
} from "./CardStyles";
import { BsPlusCircleFill } from "react-icons/bs";
import ProjectModal from "../Modal/ProjectModal";

// Enhanced variants with more dynamic animations
const variants = {
  pageInitial: {
    opacity: 0,
    scale: 0.5,
    rotateX: 45,
    y: 50,
  },
  pageAnimate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
  },
  pageExit: {
    opacity: 0,
    scale: 0.5,
    rotateX: -45,
    y: -50,
  },
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: 5,
    z: 50,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    }
  }
};

// Cool button animation variants
const buttonVariants = {
  initial: { scale: 0, rotate: -180, opacity: 0 },
  animate: { 
    scale: 1, 
    rotate: 0, 
    opacity: 1,
    transition: { delay: 0.3, type: "spring", stiffness: 500 }
  },
  hover: { 
    scale: 1.2, 
    rotate: 90,
    boxShadow: "0 0 25px rgba(59, 130, 246, 0.8)",
    transition: { type: "spring", stiffness: 400 }
  },
  tap: { scale: 0.9, rotate: 180 }
};

// Tag animation variants
const tagVariants = {
  initial: { opacity: 0, y: 20, scale: 0.8 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300
    }
  }),
  hover: {
    scale: 1.1,
    y: -2,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    transition: { type: "spring", stiffness: 400 }
  }
};

const ProjectCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth mouse following
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 400,
    damping: 40
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 400,
    damping: 40
  });

  // Glowing effect based on mouse position
  const glowX = useTransform(mouseX, [-300, 300], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-300, 300], ["0%", "100%"]);

  const openModal = () => setIsOpen(true);
  const toggleModal = () => setIsOpen(!isOpen);

  const { title, description, tags, image, imageWebp, images } = item;

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      key={title}
      className="project-card"
      layout
      initial="pageInitial"
      animate="pageAnimate"
      whileHover="hover"
      variants={variants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
        position: "relative",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Glow Effect */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          borderRadius: "inherit",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Animated Border */}
      <motion.div
        style={{
          position: "absolute",
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          background: `linear-gradient(45deg, 
            hsl(${(Date.now() / 10) % 360}, 70%, 60%), 
            hsl(${(Date.now() / 10 + 120) % 360}, 70%, 60%), 
            hsl(${(Date.now() / 10 + 240) % 360}, 70%, 60%)
          )`,
          borderRadius: "inherit",
          opacity: isHovered ? 1 : 0,
          animation: isHovered ? "borderRotate 2s linear infinite" : "none",
          zIndex: -1,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <ImgContainer>
        <motion.div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Picture>
            <source srcSet={imageWebp} type="image/webp" />
            <motion.div
              as={PictureImg}
              src={image}
              alt={title}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </Picture>
          
          {/* Shimmer effect on hover */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              pointerEvents: "none",
            }}
            animate={isHovered ? { left: "100%" } : { left: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            type="button"
            aria-label="Open Project Gallery in a modal window"
            onClick={openModal}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.div
              style={{
                color: "white",
                fontSize: "24px",
                zIndex: 10,
                position: "relative",
              }}
            >
              <BsPlusCircleFill />
            </motion.div>
            
            {/* Button pulse effect */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(255, 255, 255, 0.3)",
                borderRadius: "50%",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Button>
        </motion.div>

        <ProjectModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          title={title}
          images={images}
        />
      </ImgContainer>

      <TitleContent>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <HeaderThree title>
            {title}
          </HeaderThree>
        </motion.div>
        
        <motion.div
          style={{ overflow: "hidden" }}
          whileHover={{ scaleX: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Hr />
        </motion.div>
      </TitleContent>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <CardInfo className="card-info">
          {description}
        </CardInfo>
      </motion.div>

      <div className="card-footer">
        <TitleContent style={{ marginTop: "20px" }}>
          <motion.b
            whileHover={{ scale: 1.1, color: "#667eea" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Stack
          </motion.b>
        </TitleContent>
        
        <TagList>
          {tags.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={tagVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Tag>
                {t}
              </Tag>
            </motion.div>
          ))}
        </TagList>
      </div>

      {/* Floating particles effect */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                background: `hsl(${(i * 60) % 360}, 70%, 60%)`,
                borderRadius: "50%",
                pointerEvents: "none",
              }}
              initial={{
                x: mousePosition.x,
                y: mousePosition.y,
                opacity: 1,
                scale: 0,
              }}
              animate={{
                x: mousePosition.x + (Math.random() - 0.5) * 100,
                y: mousePosition.y + (Math.random() - 0.5) * 100,
                opacity: 0,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}

      <style jsx>{`
        @keyframes borderRotate {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        .project-card {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
