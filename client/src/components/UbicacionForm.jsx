
import React, { useState } from 'react';

function UbicacionForm({ onAdd }) {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ nombre });
    setNombre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ubicación" />
      <button type="submit">Agregar Ubicación</button>
    </form>
  );
}

export default UbicacionForm;
