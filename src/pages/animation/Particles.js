import React from 'react';
import styles from '/src/styles/Particles.module.css';

const Particles = ({ position, key }) => {
  // Genera un array de 20 partículas
  return (
    <div
      className={styles.particlesContainer}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {[...Array(20)].map((_, index) => {
        // Genera una dirección aleatoria para el movimiento de cada partícula
        const moveX = `${Math.random() * 200 - 400}px`; // Movimiento horizontal aleatorio (-100px a 100px)
        const moveY = `${Math.random() * 500 - 200}px`; // Movimiento vertical aleatorio (-100px a 100px)

        return (
          <div
            key={`${key}-${index}`}
            className={styles.particle}
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 50}px`,
              top: `${Math.random() * 50}px`,
              '--move-x': moveX, // Define la dirección de movimiento horizontal
              '--move-y': moveY, // Define la dirección de movimiento vertical
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;
