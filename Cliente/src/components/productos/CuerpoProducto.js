import React from 'react'
import '../../Style/estilos.css'
import HeaderTablaProducto from './HeaderTablaProducto';
import { Fragment } from 'react/cjs/react.production.min';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import FilaTabla from './FilaTabla';
import ModalEliminarProducto from './ModalEliminarProducto';

function Cuerpo() {
  return (
    <Fragment>
      <div className="col-xl-10 col-md-10">
        <h1 className="text-center mt-5 mb-5 pb-4">Gestión de Productos</h1>
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <div className="row">
              <div className="col-auto">
                <button
                  className="btn btn-success mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#modalProducto"
                >
                  Crear Producto
                </button>
              </div>
              <div class="col-auto offset-md-5 offset-lg-5">
                <input type="text" class="form-control" id="campoBuscar" placeholder="ID o descripción" />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Buscar</button>
              </div>
            </div>
            <table className="table table-striped">
              <HeaderTablaProducto></HeaderTablaProducto>
              <tbody>
                <FilaTabla></FilaTabla>
                <FilaTabla></FilaTabla>
                <FilaTabla></FilaTabla>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal Fade */}
      <div className="modal fade"
        id="modalProducto"
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
      <div className="modal fade"
        id="modalEliminar"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalEliminarProducto></ModalEliminarProducto>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default Cuerpo