import React, { useState } from 'react';
import { addProductoSE } from '../../services/Productos.service';
import notie from 'notie';
import 'notie/dist/notie.css';
function ModalProducto(props) {

    const {tituloModal, setTituloModal} = props;

    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [disponible, setDisponible] = useState("");

    let isDisabled = false;
    if (descripcion === "" || precio === "" || disponible === "") {
        isDisabled = true;
    } else {
        isDisabled = false;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const producto = {
            descripcion,
            precio,
            disponible: disponible === 1 ? true : false
        };
        try {
            addProductoSE(producto).then(response => {
                if (response.data.ok) {
                    notie.alert({
                        type: 'success',
                        text: response.data.mensaje,
                    });
                    setDescripcion("");
                    setPrecio("");
                    setDisponible("");
                } else {
                    notie.alert({
                        type: 'error',
                        text: response.data.mensaje,
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div class="principalBody">
            <div className="modal-header">
                <h5 className="modal-title" id="tituloModal">{tituloModal}</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <form onSubmit={handleSubmit}>
                <div classNameName="modal-body">
                    <div classNameName="row">
                        <div className="mb-3">
                            <label for="descripcion" className="form-label">Descripción:</label>
                            <input type="text" className="form-control" id="descripcion"
                                placeholder="Producto 01"
                                onChange={e => setDescripcion(e.target.value)}
                                value={descripcion} />
                        </div>
                        <div className="col">
                            <label for="precio" className="form-label">Precio:</label>
                            <input type="number" className="form-control" placeholder="100000"
                                onChange={e => setPrecio(e.target.value)}
                                value={precio}
                            />
                        </div>
                        <div className="col">
                            <label for="precio" className="form-label">Estado:</label>
                            <select className="form-select" onChange={e => setDisponible(e.target.value)}
                                value={disponible}
                            >
                                <option disabled selected value="">Seleccione</option>
                                <option value="1">Disponible</option>
                                <option value="0">No disponible</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <input type="submit" className="btn btn-primary" disabled={isDisabled} value="Guardar" />
                </div>
            </form>
        </div>

    );
}

export default ModalProducto