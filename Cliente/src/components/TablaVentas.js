import React from 'react'
import BotonDangerUsuario from './BotonDangerUsuario';
import BotonWarningUsuario from './BotonWarningUsuario';
import SeleccionEstado from './SeleccionEstado';
import SeleccionMedioPago from './SeleccionMedioPago';
import { Link } from 'react-router-dom'

function TablaVentas() {
    return (
        
        <tr>
            
                <td ></td>
                <td ></td>
                <td ><SeleccionMedioPago></SeleccionMedioPago></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ><SeleccionEstado></SeleccionEstado></td>
                <td></td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <BotonWarningUsuario></BotonWarningUsuario>
                        <BotonDangerUsuario></BotonDangerUsuario>
                    </div>
                    
                </td>
        </tr>
        
    );
}

export default TablaVentas