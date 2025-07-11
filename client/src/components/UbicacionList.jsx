
import React from 'react';

function UbicacionList({ ubicaciones, onDelete }) {
  return (
    <ul>
      {ubicaciones.map((u) => (
        <li key={u._id}>
          {u.nombre}
          <button onClick={() => onDelete(u._id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default UbicacionList;
