import React, { useEffect, useState } from 'react'
import BotonDangerUsuario from './BotonDangerUsuario';
import BotonWarningUsuario from './BotonWarningUsuario';
import SeleccionOpcion from './SelecccionOpcion';
import { Link } from 'react-router-dom'
import {getUsuariosSE} from '../services/Usuarios.service';


function CuerpoTablaUsuario() {
    useEffect(() => {
        getUsuarios();
    }, []);

    const [usuarios, setUsuarios] = useState([]);
    const getUsuarios = async function () {
        try {
            const { data } = await getUsuariosSE();
            console.log(data.model);
            setUsuarios(data.model);
        } catch (error) {
            console.log(error);
        }
    }
    return (

        usuarios.map((usuario, index) => 
        <tr key={usuario._id}>        
                    
                <td ></td>
                <td >{usuario.documento}</td>
                <td >{usuario.nombre}</td>
                <td >{usuario.rol}</td>
                <td >{usuario.estado}</td>
                
                <td>
                    <div className="btn-group btn-group-sm">
                        <BotonWarningUsuario></BotonWarningUsuario>
                        <BotonDangerUsuario></BotonDangerUsuario>
                    </div>
                    
                </td>
        </tr>
        
    ));
}

export default CuerpoTablaUsuario
