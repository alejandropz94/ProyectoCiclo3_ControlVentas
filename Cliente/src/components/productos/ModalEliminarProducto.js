import React from 'react'

function ModalEliminarProducto() {
    return (
        <div>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Confirmar acción</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ¿Está seguro de eliminar el producto
                Descripción: Producto 001 ?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    );
}

export default ModalEliminarProducto