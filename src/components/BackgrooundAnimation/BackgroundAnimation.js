.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.background-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 1.5s ease;
}

.background-gradient.light {
  background: linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%);
}

.background-gradient.dark {
  background: linear-gradient(120deg, #0c0c15 0%, #1a1a2e 100%);
}

.shapes-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.animated-shapes .shape {
  animation: float 20s ease-in-out infinite;
}

.animated-shapes .shape-1 {
  animation-delay: 0s;
}

.animated-shapes .shape-2 {
  animation-delay: -5s;
}

.animated-shapes .shape-3 {
  animation-delay: -10s;
}

.animated-shapes .shape-4 {
  animation-delay: -7s;
}

.animated-shapes .shape-5 {
  animation-delay: -12s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(5%, 3%) scale(1.1);
  }
  50% {
    transform: translate(3%, 5%) scale(0.9);
  }
  75% {
    transform: translate(-2%, 3%) scale(1.05);
  }
}

.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: particle-float 15s ease-in-out infinite both;
}

@keyframes particle-float {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-35px) translateX(-15px);
  }
  75% {
    transform: translateY(-15px) translateX(5px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

.orbs-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: orb-pulse 15s ease-in-out infinite both;
}

.orb-1 {
  animation-delay: 0s;
}

.orb-2 {
  animation-delay: -7s;
}

@keyframes orb-pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

.grid-container {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.animated-grid {
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(10%, 10%);
  }
}
