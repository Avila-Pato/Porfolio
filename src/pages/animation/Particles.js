import React from 'react';
import styles from '/src/styles/Particles.module.css';

const Particles = ({ position, particleKey }) => {
  if (!position || typeof position.x === 'undefined' || typeof position.y === 'undefined') {
    return null; 
  }

  return (
    <div
      className={styles.particlesContainer}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {[...Array(20)].map((_, index) => {
        const moveX = `${Math.random() * 200 - 400}px`;
        const moveY = `${Math.random() * 500 - 200}px`;

        return (
          <div
            key={`${particleKey}-${index}`}
            className={styles.particle}
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

export default Particles; // Exportación por defecto
