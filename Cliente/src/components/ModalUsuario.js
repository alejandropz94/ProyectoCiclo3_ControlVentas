import React, { useEffect, useState } from 'react';
import { addUsuarioSE } from '../services/Usuarios.service';
import { getUsuarioByIdSE } from '../services/Usuarios.service';
import notie from 'notie';
import 'notie/dist/notie.css';

function ModalUsuario(props) {

    const { tituloModal, setTituloModal, idUsuarioEditar, setIdUsuarioEditar } = props;
    const [documento, setDocumento] = useState("");
    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState("");
    const [estado, setEstado] = useState("");

    let isDisabled = false;
    let editar = 0;
    
    //console.log(tituloModal, idProductoEditar);
    const getUsuarios = async function () {
        if (idUsuarioEditar != null && idUsuarioEditar != "") {
            editar = 1;
            try {
                const { data } = await getUsuarioByIdSE(idUsuarioEditar);
                setDocumento(data.usuarios.documento);
                setNombre(data.usuarios.nombre);
                setRol (data.usuarios.rol);
                setEstado (data.usuarios.estado);
                
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
        const usuario = {
            documento,
            nombre,
            rol,
            estado
        };
        if (editar != 1) {
            console.log("nuevo");
            try {
                addUsuarioSE(usuario).then(response => {
                    if (response.data.ok) {
                        document.querySelector('.closeModalUsuario').click();
                        notie.alert({
                            type: 'success',
                            text: response.data.mensaje,
                        });
                        setDocumento("");
                        setNombre("");
                        
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
                <h5 className="modal-title" id="tituloModal">{tituloModal === "" ? "Crear nuevo usuario" : tituloModal}</h5>
                <button
                    type="button"
                    className="btn-close closeModalUsuario"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="documento" className="form-label">Documento</label>
                            <input type="number" className="form-control" id="documento"
                                placeholder="Digite el número de documento"
                                onChange={e => setDocumento(e.target.value)}
                                value={documento} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido:</label>
                            <input type="text" className="form-control" placeholder="Digite su nombre"
                                onChange={e => setNombre(e.target.value)}
                                value={nombre}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rol" className="form-label">Rol:</label>
                            <input type="text" className="form-control" placeholder="Digite el rol"
                                onChange={e => setRol(e.target.value)}
                                value={rol}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estado" className="form-label">Estado:</label>
                            
                            <select class="form-select" onChange={e => setEstado(e.target.value)}
                                value={estado}>
                                  <option disabled selected>Seleccione</option>
                                  <option >Autorizado</option>
                                  <option >Pendiente</option>
                                  <option >No autorizado</option>
                                </select>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <input type="submit" className="btn btn-primary" disabled={isDisabled} value="Crear" />
                </div>
            </form>
        </div>

    );
}

export default ModalUsuario