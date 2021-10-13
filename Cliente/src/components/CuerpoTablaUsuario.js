import React from 'react'
import BotonDangerUsuario from './BotonDangerUsuario';
import BotonWarningUsuario from './BotonWarningUsuario';
import SeleccionOpcion from './SelecccionOpcion';
import { Link } from 'react-router-dom'

function CuerpoTablaUsuario() {
    return (
        
        <tr>
            
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td><SeleccionOpcion></SeleccionOpcion></td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <BotonWarningUsuario></BotonWarningUsuario>
                        <BotonDangerUsuario></BotonDangerUsuario>
                    </div>
                    
                </td>
        </tr>
        
    );
}

export default CuerpoTablaUsuario
