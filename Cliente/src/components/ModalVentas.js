import React from 'react'

/*import React, { useEffect, useState } from 'react';
import { addVentaSE } from '../../services/Ventas.service';
import { getVentaByIdSE } from '../../services/Ventas.service';
import notie from 'notie';
import 'notie/dist/notie.css';

function ModalVenta(props) {

    const { tituloModal, setTituloModal, idVentaEditar, setIdVentaEditar } = props;
    const [codigo_venta, setCodigo_venta] = useState("");
    const [id_producto, setId_producto] = useState("");
    const [fecha_venta, setFecha_venta] = useState("");
    const [cliente, setCliente] = useState("");
    const [ide_cliente, setIde_cliente] = useState("");
    const [vendedor, setVendedor] = useState("");
    const [estado, seteEstado] = useState("");
    const [valor_total, setValor_total] = useState("");


    let isDisabled = false;
    let editar = 0;
    if (codigo_venta === "" || id_producto === "" || fecha_venta === ""
     || cliente === "" || ide_cliente === "" || vendedor === ""|| estado === ""|| valor_total === "") {
        isDisabled = true;
    } else {
        isDisabled = false;
    }   
        */

function ModalVentas() {
    return (
        <div className="modal-body">
            <div className="row">
                <div className="row mt-2">
                    <label for="#codigo" className="form-label">Codigo Venta</label>
                    <input type="number"
                            className="form-control"
                            id="#codigo"
                            placeholder=""/>
                </div>
                <div className="row mt-2">
                    <label for="ID Producto" className="form-label">ID Producto</label >
                    <input type="text"
                            className="form-control"
                            id="ID Producto"
                            placeholder=""/>
                </div>
                <div className="row mt-2">
                    <label for="Medio de Pago" className="form-label">Medio de Pago</label>
                    <select className="form-select" aria-label="Default select example" id="Medio de Pago">
                        <option selected>Seleccione</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta de Credito</option>
                    </select>                         
                </div>
                <div className="row mt-2">
                    <label for="Fecha de Venta" className="form-label">Fecha de Venta</label >
                    <input type="text"
                            className="form-control"
                            id="Fecha de Venta"
                            placeholder="dd/mm/aaaa"/>
                </div>
                <div className="row mt-2">
                    <label for="Cliente" className="form-label">Cliente</label >
                    <input type="text"
                            className="form-control"
                            id="Nombre cliente"
                            placeholder=""/>
                </div>
                <div className="row mt-2">
                    <label for="ID Cliente" className="form-label">ID Cliente</label >
                    <input type="text"
                            className="form-control"
                            id="ID cliente"
                            placeholder=""/>
                </div>
                <div className="row mt-2">
                    <label for="Vendedor" className="form-label">Vendedor</label >
                    <input type="text"
                            className="form-control"
                            id="Nombre vendedor"
                            placeholder=""/>
                </div>
                <div className="row mt-2">
                    <label for="Estado" className="form-label">Estado</label>
                    <select className="form-select" aria-label="Default select example" id="estado">
                        <option selected>Seleccione</option>
                        <option value="efectivo">Procesado</option>
                        <option value="tarjeta">Cancelado</option>
                        <option value="tarjeta">Entregado</option>
                    </select>                         
                </div>
                <div className="row mt-2">
                    <label for="Valor Total" className="form-label">Valor Total</label >
                    <input type="text"
                            className="form-control"
                            id="Valor Total"
                            placeholder=""/>
                </div>
            </div>
        </div>
    );
}

export default ModalVentas