import React, { useState } from 'react';

function CapturaTexto() {
  const [texto, setTexto] = useState('');

  const manejarCambio = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={manejarCambio} placeholder="Escribí algo..." />
      <p>Texto ingresado: {texto}</p>
    </div>
  );
}

export default CapturaTexto;
