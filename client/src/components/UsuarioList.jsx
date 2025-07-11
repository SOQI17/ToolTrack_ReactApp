
import React from 'react';

function UsuarioList({ usuarios, onDelete }) {
  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u._id}>
          {u.nombre} - {u.rol}
          <button onClick={() => onDelete(u._id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default UsuarioList;
