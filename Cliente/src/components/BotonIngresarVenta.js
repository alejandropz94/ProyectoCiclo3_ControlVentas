import React from 'react'
import { Link } from 'react-router-dom'

function BotonIngresarVenta() {
    return (
        
        <button 
            className ="btn btn-success mb-3" 
            data-bs-toggle="modal" 
            data-bs-target="#modalUsuario"
            >
            Ingresar
        </button>
        
    );
}

export default BotonIngresarVenta