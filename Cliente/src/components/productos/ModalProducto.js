import React, { useEffect, useState } from 'react';
import { addProductoSE } from '../../services/Productos.service';
import { getProductoByIdSE } from '../../services/Productos.service';
import notie from 'notie';
import 'notie/dist/notie.css';

function ModalProducto(props) {

    const { tituloModal, setTituloModal, idProductoEditar, setIdProductoEditar } = props;
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [disponible, setDisponible] = useState("");

    let isDisabled = false;
    let editar = 0;
    if (descripcion === "" || precio === "" || disponible === "") {
        isDisabled = true;
    } else {
        isDisabled = false;
        
    }
    //console.log(tituloModal, idProductoEditar);
    const getProductos = async function () {
        if (idProductoEditar != null && idProductoEditar != "") {
            editar = 1;
            try {
                const { data } = await getProductoByIdSE(idProductoEditar);
                setDescripcion(data.productos.descripcion);
                setPrecio(data.productos.valor_unitario);
                setDisponible(data.productos.disponible == true ? 1 : 0);
            } catch (error) {
                console.log(error);
            }
        } else {
            editar = 0;
        }
    }
    //getProductos();

    const handleSubmit = e => {
        e.preventDefault();
        const producto = {
            descripcion,
            precio,
            disponible: disponible === 1 ? true : false
        };
        if (editar != 1) {
            console.log("nuevo");
            try {
                addProductoSE(producto).then(response => {
                    if (response.data.ok) {
                        document.querySelector('.closeModalProducto').click();
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
        } else {
            console.log("editar");

        }
    }
    return (
        <div className="principalBody">
            <div className="modal-header">
                <h5 className="modal-title" id="tituloModal">{tituloModal === "" ? "Actualizar producto" : tituloModal}</h5>
                <button
                    type="button"
                    className="btn-close closeModalProducto"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripción:</label>
                            <input type="text" className="form-control" id="descripcion"
                                placeholder="Producto 01"
                                onChange={e => setDescripcion(e.target.value)}
                                value={descripcion} />
                        </div>
                        <div className="col">
                            <label htmlFor="precio" className="form-label">Precio:</label>
                            <input type="number" className="form-control" placeholder="100000"
                                onChange={e => setPrecio(e.target.value)}
                                value={precio}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="precio" className="form-label">Estado:</label>
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