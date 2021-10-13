import React from 'react'
import ActualizarVenta from './ActualizarVenta';
import EliminarVenta from './EliminarVenta';
import SeleccionEstado from './SeleccionEstado';
import SeleccionMedioPago from './SeleccionMedioPago';
import { Link } from 'react-router-dom'

function TablaVentas() {
    return (
        
        <tr>
            
                <td >Dato</td>
                <td >Dato</td>
                <td >Dato</td>
                <td >Dato</td>
                <td >Dato</td>
                <td >Dato</td>
                <td >Dato</td>
                <td >Dato</td>
                <td>Dato</td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <ActualizarVenta></ActualizarVenta>
                        <EliminarVenta></EliminarVenta>
                    </div>
                    
                </td>
        </tr>
        
    );
}

export default TablaVentas