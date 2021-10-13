import React from 'react'

function ModalBody() {
    return (
        <div classNameName="modal-body">
        <div classNameName="row">
            <form action="" method="post">
                <div className="mb-3">
                    <label for="descripcion" className="form-label">Descripción:</label>
                    <input type="text" className="form-control" id="descripcion"
                        placeholder="Producto 0000"/>
                </div>
                <div className="col">
                    <label for="precio" className="form-label">Precio:</label>
                    <input type="number" className="form-control" placeholder="100000"/>
                </div>
                <div className="col">
                    <label for="precio" className="form-label">Estado:</label>
                    <select className="form-select">
                        <option disabled selected>Seleccione</option>
                        <option value="1">Disponible</option>
                        <option value="0">No disponible</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
    );
}

export default ModalBody