import React from 'react';
import { useDarkMode } from "next-dark-mode";

const BackgroundAnimation = () => {
  const { darkModeActive } = useDarkMode();
  
  const primaryColor = darkModeActive ? "#fff" : "#17181F";
  const secondaryColor = darkModeActive ? "rgba(255,255,255,0.5)" : "rgba(23,24,31,0.5)";
  const accentColor = darkModeActive ? "#6366F1" : "#4F46E5";
  const gradientStart = darkModeActive ? "rgba(99, 102, 241, 0.3)" : "rgba(79, 70, 229, 0.2)";
  const gradientEnd = darkModeActive ? "rgba(99, 102, 241, 0.1)" : "rgba(79, 70, 229, 0.05)";

  return (
    <div className="hero-image">
      <svg
        className="BgAnimation__svg"
        viewBox="0 0 602 602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background gradient */}
        <rect width="602" height="602" fill={`url(#backgroundGradient)`} />
        
        {/* Floating blobs/organic shapes */}
        <g filter="url(#blobFilter)">
          <path
            d="M450 200C475 180 500 220 480 250C460 280 420 290 390 270C360 250 350 210 370 180C390 150 425 140 450 170C475 200 425 220 450 200Z"
            fill={gradientStart}
            opacity="0.7"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M450 200C475 180 500 220 480 250C460 280 420 290 390 270C360 250 350 210 370 180C390 150 425 140 450 170C475 200 425 220 450 200Z;
                      M440 190C465 170 490 210 470 240C450 270 410 280 380 260C350 240 340 200 360 170C380 140 415 130 440 160C465 190 415 210 440 190Z;
                      M460 210C485 190 510 230 490 260C470 290 430 300 400 280C370 260 360 220 380 190C400 160 435 150 460 180C485 210 435 230 460 210Z;
                      M450 200C475 180 500 220 480 250C460 280 420 290 390 270C360 250 350 210 370 180C390 150 425 140 450 170C475 200 425 220 450 200Z"
            />
          </path>

          <path
            d="M150 400C125 380 100 420 120 450C140 480 180 490 210 470C240 450 250 410 230 380C210 350 175 340 150 370C125 400 175 420 150 400Z"
            fill={gradientEnd}
            opacity="0.6"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="M150 400C125 380 100 420 120 450C140 480 180 490 210 470C240 450 250 410 230 380C210 350 175 340 150 370C125 400 175 420 150 400Z;
                      M140 390C115 370 90 410 110 440C130 470 170 480 200 460C230 440 240 400 220 370C200 340 165 330 140 360C115 390 165 410 140 390Z;
                      M160 410C135 390 110 430 130 460C150 490 190 500 220 480C250 460 260 420 240 390C220 360 185 350 160 380C135 410 185 430 160 410Z;
                      M150 400C125 380 100 420 120 450C140 480 180 490 210 470C240 450 250 410 230 380C210 350 175 340 150 370C125 400 175 420 150 400Z"
            />
          </path>
        </g>

        {/* Wave patterns */}
        <g opacity="0.4">
          <path
            d="M0 350 Q150 300 300 350 T600 350"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="M0 350 Q150 300 300 350 T600 350;
                      M0 340 Q150 290 300 340 T600 340;
                      M0 360 Q150 310 300 360 T600 360;
                      M0 350 Q150 300 300 350 T600 350"
            />
          </path>

          <path
            d="M0 450 Q150 400 300 450 T600 450"
            stroke={primaryColor}
            strokeWidth="1.5"
            fill="none"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="M0 450 Q150 400 300 450 T600 450;
                      M0 440 Q150 390 300 440 T600 440;
                      M0 460 Q150 410 300 460 T600 460;
                      M0 450 Q150 400 300 450 T600 450"
            />
          </path>

          <path
            d="M0 250 Q150 200 300 250 T600 250"
            stroke={secondaryColor}
            strokeWidth="1"
            fill="none"
          >
            <animate
              attributeName="d"
              dur="18s"
              repeatCount="indefinite"
              values="M0 250 Q150 200 300 250 T600 250;
                      M0 240 Q150 190 300 240 T600 240;
                      M0 260 Q150 210 300 260 T600 260;
                      M0 250 Q150 200 300 250 T600 250"
            />
          </path>
        </g>

        {/* Geometric patterns - Hexagons */}
        <g opacity="0.2" stroke={primaryColor} strokeWidth="0.5">
          {[...Array(6)].map((_, i) => (
            <path
              key={`hex-${i}`}
              d={`M${300 + Math.cos(i * Math.PI / 3) * 100} ${300 + Math.sin(i * Math.PI / 3) * 100} 
                  L${300 + Math.cos((i + 1) * Math.PI / 3) * 100} ${300 + Math.sin((i + 1) * Math.PI / 3) * 100}`}
            >
              <animate
                attributeName="stroke"
                values={`${primaryColor};${accentColor};${primaryColor}`}
                dur="8s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </g>

        {/* Floating particles with trails */}
        {[...Array(8)].map((_, i) => {
          const size = 1 + Math.random() * 2;
          const duration = 10 + Math.random() * 15;
          const delay = Math.random() * 3;
          
          return (
            <g key={`particle-${i}`}>
              <circle
                cx={100 + Math.random() * 400}
                cy={100 + Math.random() * 400}
                r={size}
                fill={accentColor}
                opacity="0.8"
              >
                <animate
                  attributeName="cx"
                  values={`${100 + Math.random() * 400};${100 + Math.random() * 400};${100 + Math.random() * 400}`}
                  dur={`${duration}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values={`${100 + Math.random() * 400};${100 + Math.random() * 400};${100 + Math.random() * 400}`}
                  dur={`${duration + 2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values={`${size};${size * 1.5};${size}`}
                  dur={`${4}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={100 + Math.random() * 400}
                cy={100 + Math.random() * 400}
                r={size * 0.6}
                fill={primaryColor}
                opacity="0.4"
              >
                <animate
                  attributeName="cx"
                  values={`${100 + Math.random() * 400};${100 + Math.random() * 400};${100 + Math.random() * 400}`}
                  dur={`${duration}s`}
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                />
                <animate
                  attributeName="cy"
                  values={`${100 + Math.random() * 400};${100 + Math.random() * 400};${100 + Math.random() * 400}`}
                  dur={`${duration + 2}s`}
                  repeatCount="indefinite"
                  begin={`${delay}s`}
                />
              </circle>
            </g>
          );
        })}

        {/* Central focus element */}
        <circle cx="301" cy="301" r="60" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.3">
          <animate
            attributeName="r"
            values="50;70;50"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.2;0.4;0.2"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Concentric circles */}
        {[20, 40, 80, 120].map((radius, i) => (
          <circle
            key={`circle-${i}`}
            cx="301"
            cy="301"
            r={radius}
            fill="none"
            stroke={primaryColor}
            strokeWidth="0.5"
            opacity="0.1"
          >
            <animate
              attributeName="r"
              values={`${radius};${radius + 10};${radius}`}
              dur={`${8 + i * 2}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <defs>
          {/* Background gradient */}
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={darkModeActive ? "#0F172A" : "#F8FAFC"} />
            <stop offset="100%" stopColor={darkModeActive ? "#1E293B" : "#F1F5F9"} />
          </linearGradient>

          {/* Blob filter */}
          <filter id="blobFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          {/* Accent gradients */}
          <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundAnimation;
