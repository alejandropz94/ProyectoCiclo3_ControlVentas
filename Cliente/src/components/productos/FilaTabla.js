import React from 'react'
import EliminarProducto from './EliminarProducto';
import EditarProducto from './EditarProducto';

function CuerpoTablaUsuario() {
    return (

        <tr>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>Dato</td>
            <td>
                <div className="btn-group btn-group-sm">
                    <EditarProducto></EditarProducto>
                    <EliminarProducto></EliminarProducto>
                </div>

            </td>
        </tr>

    );
}

export default CuerpoTablaUsuario
