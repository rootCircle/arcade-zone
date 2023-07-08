import { useEffect, useState } from 'react'

import ErrorStyle from '../../css/Error404.module.css'
import StarsCanvas from '../../components/Stars';

function Error404() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 150;

    const generateRandomValue = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const initializeParticles = () => {
      const initializedParticles = [];

      for (let i = 0; i < particleCount; i++) {
        const x = generateRandomValue(0, window.innerWidth);
        const y = generateRandomValue(0, window.innerHeight);
        const speed = generateRandomValue(5, 15);

        const particle = {
          x,
          y,
          speed,
        };

        initializedParticles.push(particle);
      }

      setParticles(initializedParticles);
    };

    initializeParticles();
  }, []);

  const renderParticles = () => {
    return particles.map((particle, index) => {
      const particleStyle = {
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        animationDuration: `${particle.speed}s`,
      };

      return (
        <div key={index} className={ErrorStyle["particle"]} style={particleStyle}></div>
      );
    });
  };

  return (<>
    <div className={ErrorStyle["container"]}>
      <StarsCanvas/>
      {/* <div className={ErrorStyle["particle-container"]}>{renderParticles()}</div> */}
      <div className={ErrorStyle["error-text"]}>
        404 - There is nothing to see here<br/>
        This page does not exist</div>
    </div>
  </>
  );
};

export default Error404;