import React, { useState, useEffect } from 'react';
import RegistrarHerramienta from './components/HerramientaForm';
import HerramientaList from './components/HerramientaList';
import MovimientoForm from './components/MovimientoForm';
import MovimientoList from './components/MovimientoList';

function App() {
    const [vista, setVista] = useState('inicio');
    const [herramientas, setHerramientas] = useState([]);
    const [movimientos, setMovimientos] = useState([]);

    const fondo = {
        background: 'linear-gradient(180deg, #005a9e, #88c0ff)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        padding: '20px'
    };

    const panel = {
        backgroundColor: '#ffffffcc',
        borderRadius: '20px',
        padding: '40px',
        width: '90%',
        maxWidth: '600px',
        textAlign: 'center',
        color: '#003366',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
    };

    const button = {
        backgroundColor: '#0078D7',
        color: '#fff',
        border: 'none',
        borderRadius: '12px',
        padding: '15px 25px',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
    };

    const cargarHerramientas = () => {
        fetch('http://localhost:4000/api/herramientas')
            .then(res => res.json())
            .then(data => setHerramientas(data));
    };

    const cargarMovimientos = () => {
        fetch('http://localhost:4000/api/movimientos')
            .then(res => res.json())
            .then(data => setMovimientos(data));
    };

    useEffect(() => {
        cargarHerramientas();
        cargarMovimientos();
    }, []);

    return (
        <div style={fondo}>
            <div style={panel}>
                <img src="/orimec-logo.png" alt="ORIMEC" style={{ width: '200px', marginBottom: '20px' }} />
                <h2>ToolTrack – Control de Herramientas</h2>

                {vista === 'inicio' && (
                    <>
                        <button style={button} onClick={() => setVista('registrar')}>Registrar herramienta</button>
                        <button style={button} onClick={() => setVista('registrarMovimiento')}>Registrar movimiento</button>
                        <button style={button} onClick={() => setVista('movimientos')}>Ver movimientos recientes</button>
                        <button style={button} onClick={() => alert('Exportar aún no implementado')}>Descargar registro</button>
                        <button style={button} onClick={() => setVista('inventario')}>Ver inventario</button>
                    </>
                )}

                {vista === 'registrar' && (
                    <>
                        <h3>Registrar herramienta</h3>
                        <RegistrarHerramienta
                            onAdd={async (nuevaHerramienta) => {
                                await fetch('http://localhost:4000/api/herramientas', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(nuevaHerramienta)
                                });
                                alert("Herramienta registrada");
                                cargarHerramientas();
                            }}
                        />
                        <button style={button} onClick={() => setVista('inicio')}>Volver</button>
                    </>
                )}

                {vista === 'registrarMovimiento' && (
                    <>
                        <h3>Registrar movimiento</h3>
                        <MovimientoForm
                            herramientas={herramientas}
                            onAdd={async (nuevoMovimiento) => {
                                await fetch('http://localhost:4000/api/movimientos', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(nuevoMovimiento)
                                });
                                alert('Movimiento registrado');
                                cargarMovimientos();
                            }}
                        />
                        <button style={button} onClick={() => setVista('inicio')}>Volver</button>
                    </>
                )}

                {vista === 'movimientos' && (
                    <>
                        <h3>Movimientos recientes</h3>
                        <MovimientoList movimientos={movimientos} />
                        <button style={button} onClick={() => setVista('inicio')}>Volver</button>
                    </>
                )}

                {vista === 'inventario' && (
                    <>
                        <h3>Inventario</h3>
                        <HerramientaList herramientas={herramientas} />
                        <button style={button} onClick={() => setVista('inicio')}>Volver</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
