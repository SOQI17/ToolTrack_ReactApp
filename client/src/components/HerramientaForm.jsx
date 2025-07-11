
import React, { useState } from 'react';

function HerramientaForm({ onAdd }) {
  const [form, setForm] = useState({ nombre: '', codigo: '', estado: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ nombre: '', codigo: '', estado: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="codigo" value={form.codigo} onChange={handleChange} placeholder="Código" />
      <input name="estado" value={form.estado} onChange={handleChange} placeholder="Estado" />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default HerramientaForm;
