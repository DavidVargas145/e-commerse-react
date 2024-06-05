import React from 'react'

export const ItemDetail = ({ producto }) => {
    return (
        <div>
            <img src={producto.imagen} />
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p></div>
    )
}
