
import React, { useState } from 'react';

function UsuarioForm({ onAdd }) {
  const [form, setForm] = useState({ nombre: '', rol: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ nombre: '', rol: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="rol" value={form.rol} onChange={handleChange} placeholder="Rol" />
      <button type="submit">Agregar Usuario</button>
    </form>
  );
}

export default UsuarioForm;
