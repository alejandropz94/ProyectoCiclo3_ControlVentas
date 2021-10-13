import React from 'react'
import '../Style/estilos.css'
import BotonIngresarUsuario from './BotonIngresarUsuario';
import CuerpoTablaUsuario from './CuerpoTablaUsuario';
import EncabezadoTablaUsuario from './EncabezadoTablaUsuario';
import SeleccionOpcion from './SelecccionOpcion';
import { Link } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import ModalBody from './ModalBody';


function Cuerpo () {
    return (
      <Fragment>
        <div className = "col-xl-10 col-md-10">
          <h1 className="text-center mt-5 mb-5 pb-4">Gestión de Usuarios y Roles</h1>
            <div className="row justify-content-md-center">
                <div className ="col col-lg-10">
                  <div className ="row">
                    <div className ="col-auto">
                      <BotonIngresarUsuario></BotonIngresarUsuario>
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
        {/* Modal Fade */}
        <div  className="modal fade"
              id="modalUsuario"
              tabindex="-1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              >
          <div className="modal-dialog">
            <div className="modal-content">
                <ModalHeader></ModalHeader>
                <ModalBody></ModalBody>
                <ModalFooter></ModalFooter>
            </div>
          </div>
        </div>
      </Fragment>
        
    );
}

export default Cuerpo