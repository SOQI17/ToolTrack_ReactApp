
import React from 'react';

function HerramientaList({ herramientas, onDelete }) {
  return (
    <ul>
      {herramientas.map((h) => (
        <li key={h._id}>
          {h.nombre} - {h.codigo} - {h.estado}
          <button onClick={() => onDelete(h._id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default HerramientaList;
