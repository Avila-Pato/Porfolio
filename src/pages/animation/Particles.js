import React from 'react';
import styles from '/src/styles/Particles.module.css';

const Particles = ({ position, particleKey }) => {
  if (!position || typeof position.x === 'undefined' || typeof position.y === 'undefined')  {
    return null; 
  }

  return (
    <div
      className={styles.particlesContainer}
      style={{
        left: `${position.x - 60}px`,
        top: `${position.y- 90}px`,
      }}
    >
      {[...Array(20)].map((_, index) => {
        const moveX = `${Math.random() * 400 - 200}px`; // Ajustado para un mejor centrado
        const moveY = `${Math.random() * 400 - 200}px`; // Ajustado para un mejor centrado
  
        return (
          <div
            key={`${particleKey}-${index}`}
            className={`${styles.particle} ${styles.particleAnimation}`}
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 50}px`,
              top: `${Math.random() * 50}px`,
              '--move-x': moveX,
              '--move-y': moveY,
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;
