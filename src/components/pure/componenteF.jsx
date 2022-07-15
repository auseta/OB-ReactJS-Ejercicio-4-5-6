import React, { useEffect, useState } from 'react';

export const ComponenteF = () => {

    const state = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martin",
        apellidos: "San Jose"
    }

    const [datos, setDatos] = useState(state);

    const updateTime = () => {
        setDatos(
            {
                ...datos,
                edad: datos.edad + 1,
                fecha: new Date()
            }
        )
    }

    useEffect(() => {
        const timerID = setInterval(() => {
            updateTime()
        }, 1000);
        return () => {
            clearInterval(timerID)
        };
    });


    return (
        <div>
            <h2>
                Hora actual: { datos.fecha.toLocaleTimeString() }
            </h2>
            <h3>
                {datos.nombre} {datos.apellidos}
            </h3>
            <h1>Edad: { datos.edad }</h1>
        </div>
    );
}
