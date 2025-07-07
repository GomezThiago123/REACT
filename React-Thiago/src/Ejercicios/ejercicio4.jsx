import React, { useState, useEffect } from 'react';

function SimuladorCarga() {
  const [estado, setEstado] = useState("Cargando...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setEstado("Listo");
    }, 3000);

    // Limpieza opcional (buena práctica)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h3>{estado}</h3>
    </div>
  );
}

export default SimuladorCarga;
