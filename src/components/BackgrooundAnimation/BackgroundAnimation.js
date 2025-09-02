import React from 'react';
import { useDarkMode } from "next-dark-mode";

const BackgroundAnimation = () => {
  const { darkModeActive } = useDarkMode();
  
  const primaryColor = darkModeActive ? "#fff" : "#17181F";
  const secondaryColor = darkModeActive ? "rgba(255,255,255,0.7)" : "rgba(23,24,31,0.7)";
  const accentColor = darkModeActive ? "#6366F1" : "#4F46E5"; // Adding a subtle color accent

  return (
    <div className="hero-image">
      <svg
        className="BgAnimation__svg"
        viewBox="0 0 602 602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main geometric shapes with enhanced opacity effect */}
        <g opacity={darkModeActive ? "0.18" : "0.12"}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
            stroke={primaryColor}
            strokeWidth="0.5"
            id="path_0"
          />
          <path
            d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
            stroke={primaryColor}
            strokeWidth="0.5"
            id="path_1"
          />
          <path
            d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
            stroke={primaryColor}
            strokeWidth="0.5"
            id="path_2"
          />
        </g>

        {/* Pulsing dots with varying sizes and speeds */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <circle
            key={`dot-${i}`}
            cx="301"
            cy="301"
            r={2 + i * 0.5}
            fill={accentColor}
            opacity="0.4"
          >
            <animate
              attributeName="r"
              values={`${2 + i * 0.5};${4 + i * 0.8};${2 + i * 0.5}`}
              dur={`${5 + i * 2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur={`${7 + i * 1.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Animated elements following paths */}
        <ellipse
          cx="295.027"
          cy="193.118"
          transform="translate(-295.027 -193.118)"
          rx="1.5"
          ry="1.5"
          fill={secondaryColor}
        >
          <animateMotion dur="15s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_2" />
          </animateMotion>
          <animate
            attributeName="rx"
            values="1.5;2.5;1.5"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="1.5;2.5;1.5"
            dur="3s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse
          cx="476.525"
          cy="363.313"
          rx="1.5"
          ry="1.5"
          transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
          fill={secondaryColor}
        >
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_0" />
          </animateMotion>
          <animate
            attributeName="fill"
            values={`${secondaryColor};${accentColor};${secondaryColor}`}
            dur="8s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse
          cx="333.324"
          cy="382.691"
          rx="1.5"
          ry="1.5"
          transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
          fill={secondaryColor}
        >
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#path_1" />
          </animateMotion>
        </ellipse>

        {/* Additional animated elements for more visual interest */}
        <circle cx="100" cy="100" r="2" fill={accentColor} opacity="0.6">
          <animate
            attributeName="cx"
            values="100;500;100"
            dur="20s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="100;500;100"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="500" cy="500" r="1.5" fill={primaryColor} opacity="0.4">
          <animate
            attributeName="cx"
            values="500;100;500"
            dur="25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="500;100;500"
            dur="18s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Subtle glow effect in the center */}
        <circle cx="301" cy="301" r="150" fill="url(#centerGlow)" opacity="0.05" />

        <defs>
          {/* Glow effect gradient */}
          <radialGradient
            id="centerGlow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(200)"
          >
            <stop offset="0.3" stopColor={accentColor} />
            <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
          </radialGradient>

          {/* Additional gradients for depth */}
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

          <linearGradient
            id="paint4_linear"
            x1="476.529"
            y1="363.31"
            x2="451.461"
            y2="338.272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={primaryColor} />
            <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="paint5_linear"
            x1="382.168"
            y1="155.027"
            x2="357.1"
            y2="129.989"
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
