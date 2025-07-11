import React, { useState, useEffect } from 'react';

const MovimientoForm = ({ onAdd }) => {
    const [form, setForm] = useState({
        herramienta: '',
        responsable: '',
        fecha: '',
        hora: '',
        ubicacion: '',
        tipo: '',
        estado: ''
    });

    const [herramientas, setHerramientas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/herramientas')
            .then((res) => res.json())
            .then((data) => setHerramientas(data))
            .catch((err) => console.error('Error al cargar herramientas:', err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
        setForm({
            herramienta: '',
            responsable: '',
            fecha: '',
            hora: '',
            ubicacion: '',
            tipo: '',
            estado: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <select
                value={form.herramienta}
                onChange={(e) => setForm({ ...form, herramienta: e.target.value })}
            >
                <option value="">Seleccione herramienta</option>
                {herramientas.map((h) => (
                    <option key={h._id} value={h._id}>
                        {h.nombre} ({h.codigo})
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Responsable"
                value={form.responsable}
                onChange={(e) => setForm({ ...form, responsable: e.target.value })}
            />
            <input
                type="date"
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
            />
            <input
                type="time"
                value={form.hora}
                onChange={(e) => setForm({ ...form, hora: e.target.value })}
            />
            <input
                type="text"
                placeholder="Ubicación"
                value={form.ubicacion}
                onChange={(e) => setForm({ ...form, ubicacion: e.target.value })}
            />
            <select
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
            >
                <option value="">Ingreso o Egreso</option>
                <option value="ingreso">Ingreso</option>
                <option value="egreso">Egreso</option>
            </select>
            <input
                type="text"
                placeholder="Estado"
                value={form.estado}
                onChange={(e) => setForm({ ...form, estado: e.target.value })}
            />
            <button type="submit">Registrar Movimiento</button>
        </form>
    );
};

export default MovimientoForm;
