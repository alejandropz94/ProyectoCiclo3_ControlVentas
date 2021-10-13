import React from 'react'
import '../Style/estilos.css'
import CuerpoTablaUsuario from './CuerpoTablaUsuario';
import EncabezadoTablaUsuario from './EncabezadoTablaUsuario';
import SeleccionOpcion from './SelecccionOpcion';


function Cuerpo () {
    return (
        
        <div className = "col-xl-10 col-md-10">
          <br />
          <br />
          <h2 id="titulo">Gestión de Usuarios y Roles</h2>
          <br />
          <br />
          <br />
          <div className="row justify-content-md-center">
            <div className ="col col-lg-10">
              <div className ="row">
                <div className ="col-auto">
                  <button className ="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#modalUsuario"
                    onclick="document.getElementById('tituloModal').innerHTML = 'Registrar Usuario'">
                    Ingresar
                  </button>
                </div>
              </div>
              <table className="table table-striped">
                <EncabezadoTablaUsuario></EncabezadoTablaUsuario>
                <tbody>
                  <CuerpoTablaUsuario></CuerpoTablaUsuario>
                  <CuerpoTablaUsuario></CuerpoTablaUsuario>
                  <CuerpoTablaUsuario></CuerpoTablaUsuario>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
    );
}

export default Cuerpo