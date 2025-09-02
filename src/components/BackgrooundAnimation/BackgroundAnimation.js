import React from 'react';
import { useDarkMode } from "next-dark-mode";

const BackgroundAnimation = () => {
  const { darkModeActive } = useDarkMode();
  
  const primaryColor = darkModeActive ? "#fff" : "#17181F";
  const secondaryColor = darkModeActive ? "rgba(255,255,255,0.7)" : "rgba(23,24,31,0.7)";
  const accentColor = darkModeActive ? "#6366F1" : "#4F46E5";
  const glowColor = darkModeActive ? "rgba(99, 102, 241, 0.15)" : "rgba(79, 70, 229, 0.1)";

  return (
    <div className="hero-image">
      <svg
        className="BgAnimation__svg"
        viewBox="0 0 602 602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle grid pattern in background */}
        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path 
            d="M 20 0 L 0 0 0 20" 
            fill="none" 
            stroke={darkModeActive ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"} 
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
        
        {/* Main geometric shapes with gradient fills */}
        <g opacity={darkModeActive ? "0.2" : "0.15"}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
            stroke={primaryColor}
            strokeWidth="0.7"
            id="path_0"
          />
          <path
            d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
            stroke={primaryColor}
            strokeWidth="0.7"
            id="path_1"
          />
          <path
            d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
            stroke={primaryColor}
            strokeWidth="0.7"
            id="path_2"
          />
        </g>

        {/* Floating particles with varying animations */}
        {[...Array(15)].map((_, i) => {
          const size = 0.8 + Math.random() * 1.5;
          const duration = 15 + Math.random() * 20;
          const delay = Math.random() * 5;
          
          return (
            <circle
              key={`particle-${i}`}
              cx={Math.random() * 600}
              cy={Math.random() * 600}
              r={size}
              fill={i % 3 === 0 ? accentColor : primaryColor}
              opacity={0.3 + Math.random() * 0.4}
            >
              <animate
                attributeName="cx"
                values={`${Math.random() * 600};${Math.random() * 600};${Math.random() * 600}`}
                dur={`${duration}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${Math.random() * 600};${Math.random() * 600};${Math.random() * 600}`}
                dur={`${duration + 5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${size};${size * 1.5};${size}`}
                dur={`${3 + Math.random() * 4}s`}
                repeatCount="indefinite"
                begin={`${delay}s`}
              />
              <animate
                attributeName="opacity"
                values={`${0.3 + Math.random() * 0.4};${0.6 + Math.random() * 0.3};${0.3 + Math.random() * 0.4}`}
                dur={`${4 + Math.random() * 3}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* Animated orbs following paths with glow effects */}
        <g filter="url(#glow)">
          <circle
            cx="295.027"
            cy="193.118"
            r="3"
            fill={accentColor}
            opacity="0.8"
          >
            <animateMotion dur="20s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_2" />
            </animateMotion>
            <animate
              attributeName="r"
              values="2;4;2"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="476.525"
            cy="363.313"
            r="2.5"
            fill={primaryColor}
            opacity="0.7"
          >
            <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_0" />
            </animateMotion>
            <animate
              attributeName="fill"
              values={`${primaryColor};${accentColor};${primaryColor}`}
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="333.324"
            cy="382.691"
            r="3.5"
            fill={accentColor}
            opacity="0.9"
          >
            <animateMotion dur="22s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#path_1" />
            </animateMotion>
          </circle>
        </g>

        {/* Connecting lines between moving elements */}
        <path
          d="M295.027,193.118 L476.525,363.313"
          stroke={accentColor}
          strokeWidth="0.5"
          strokeDasharray="3,3"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Central pulsating element */}
        <circle cx="301" cy="301" r="80" fill="url(#centralGradient)" opacity="0.1">
          <animate
            attributeName="r"
            values="70;90;70"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.05;0.15;0.05"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Subtle wave patterns */}
        <path
          d="M100,300 Q250,250 400,300 T700,300"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.1"
        >
          <animate
            attributeName="d"
            values="M100,300 Q250,250 400,300 T700,300;M100,320 Q250,270 400,320 T700,320;M100,300 Q250,250 400,300 T700,300"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M100,350 Q250,400 400,350 T700,350"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.1"
        >
          <animate
            attributeName="d"
            values="M100,350 Q250,400 400,350 T700,350;M100,330 Q250,380 400,330 T700,330;M100,350 Q250,400 400,350 T700,350"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        <defs>
          {/* Glow filter */}
          <filter id="glow" height="300%" width="300%" x="-75%" y="-75%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>

          {/* Central gradient */}
          <radialGradient
            id="centralGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor={accentColor} stopOpacity="1" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
          </radialGradient>

          {/* Additional gradients */}
          <linearGradient
            id="paint3_linear"
            x1="295.043"
            y1="193.116"
            x2="269.975"
            y2="218.154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundAnimation;
