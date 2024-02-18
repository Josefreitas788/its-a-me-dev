//TO DO Consertar
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';

const KeyLogger = () => {
  const router = useRouter();
  const handleKeyPress = (event: KeyboardEvent) => {
    console.log(`Tecla pressionada: ${event.key}`);
    if (event.key === "ArrowUp"){
        router.push('/aboutme');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return null; // Não renderiza nada, pois este é apenas um componente de captura de teclas
};

export default KeyLogger;
