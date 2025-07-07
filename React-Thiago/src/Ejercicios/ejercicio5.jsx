import React, { useState, useEffect } from 'react';

function SaludoPersonalizado() {
  const [nombre, setNombre] = useState('');
  const [saludo, setSaludo] = useState('');

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const saludar = () => {
    setSaludo(`Hola, ${nombre} `);
  };

  useEffect(() => {
    if (saludo) {
      console.log('Saludo actualizado');
    }
  }, [saludo]);

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={manejarCambio}
        placeholder="Escribí tu nombre"
      />
      <button onClick={saludar}>Saludar</button>
      <p>{saludo}</p>
    </div>
  );
}

export default SaludoPersonalizado;
