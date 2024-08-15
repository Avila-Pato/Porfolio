import React, { useState, useEffect } from 'react';
import styles from './ScatterText.module.css';

const ScatterText = ({ children }) => {
  const [isScattered, setIsScattered] = useState(false);

  const handleClick = () => {
    setIsScattered(true);
    setTimeout(() => setIsScattered(false), 2000); // Ajusta el tiempo según la duración de la animación
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.scatterButton}>
        Dispersar Texto
      </button>
      <div className={`${styles.textContainer} ${isScattered ? styles.scatter : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ScatterText;
