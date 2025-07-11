
import React from 'react';

function MovimientoList({ movimientos, onDelete }) {
  return (
    <ul>
      {movimientos.map((m) => (
        <li key={m._id}>
          {m.tipo} - {m.responsable} - {m.fecha} - {m.ubicacion}
          <button onClick={() => onDelete(m._id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default MovimientoList;
