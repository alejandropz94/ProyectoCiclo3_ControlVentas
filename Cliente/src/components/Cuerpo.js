import React from 'react'
import '../Style/estilos.css'
import TopHeader from './TopHeader';


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
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">N° Cédula</th>
                    <th scope="col">Nombre y Apellido</th>
                    <th scope="col">Rol</th>
                    <th scope="col" id="estado">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>1110552354</td>
                    <td>Juan Martinez</td>
                    <td>Vendedor</td>
                    <td>
                      <select className="form-select">
                        <option disabled selected>Seleccione</option>
                        <option value=" 0">Autorizado</option>
                        <option value="0">Pendiente</option>
                        <option value=" 0">No autorizado</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>40768952</td>
                    <td>Priscila Maldonado</td>
                    <td>Vendedora</td>
                    <td>
                      <select className="form-select">
                        <option disabled selected>Seleccione</option>
                        <option value=" 0">Autorizado</option>
                        <option value="0">Pendiente</option>
                        <option value=" 0">No autorizado</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>9245698</td>
                    <td>Antonia Martinez</td>
                    <td>Vendedora</td>
                    <td>
                      <select className="form-select">
                        <option disabled selected>Seleccione</option>
                        <option value=" 0">Autorizado</option>
                        <option value="0">Pendiente</option>
                        <option value=" 0">No autorizado</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
    );
}

export default Cuerpo