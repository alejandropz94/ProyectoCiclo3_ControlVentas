import React from 'react'
import '../Style/estilos.css';
import BotonIngresarVenta from './BotonIngresarVenta';
import TablaVentas from './TablaVentas';
import EncabezadoTablaVentas from './EncabezadoTablaVentas';

import { Fragment } from 'react/cjs/react.production.min';
import ModalTitle from './ModalTitle';
import ModalFooter from './ModalFooter';
import ModalVentas from './ModalVentas';
import ModalEliminarVenta from './ModalEliminarVenta';

function Ventas () {
    return (
      <Fragment>
        <div className = "col-xl-10 col-md-10">
          <h1 className="text-center mt-5 mb-5 pb-4">Gestión de Ventas</h1>
            <div className="row justify-content-md-center">
                <div className ="col col-lg-10">
                  <div className ="row">
                    <div className ="col-auto">
                      <BotonIngresarVenta></BotonIngresarVenta>
                    </div>
                  </div>
                  <table className="table table-striped">
                    <EncabezadoTablaVentas></EncabezadoTablaVentas>
                    <tbody>
                      <TablaVentas></TablaVentas>
                    </tbody>
                  </table>
                </div>
              </div>
        </div>
        {/* Modal Fade */}
        <div  className="modal fade"
              id="ModalVentas"
              tabindex="-1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              >
          <div className="modal-dialog">
            <div className="modal-content">
                <ModalTitle></ModalTitle>
                <ModalVentas></ModalVentas>                
            </div>
          </div>
        </div>
        <div className="modal fade"
        id="ModalEliminar"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalEliminarVenta></ModalEliminarVenta>
          </div>
        </div>
      </div>
      </Fragment>
        
    );
}

export default Ventas
