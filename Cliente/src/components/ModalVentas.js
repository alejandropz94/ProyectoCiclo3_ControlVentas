import React, { useEffect, useState } from 'react';
import { addVentaSE } from '../services/Ventas.service';
import notie from 'notie';
import 'notie/dist/notie.css';
import { getProductosSE } from '../services/Productos.service';



/*import React, { useEffect, useState } from 'react';
import { addVentaSE } from '../../services/Ventas.service';
import { getVentaByIdSE } from '../../services/Ventas.service';
import notie from 'notie';
import 'notie/dist/notie.css';
*/
function ModalVenta(props) {

    const { tituloModal, setTituloModal, idVentaEditar, setIdVentaEditar } = props;
    const [codigo_venta, setCodigo_venta] = useState("");
    const [id_producto, setId_producto] = useState("");
    const [fecha_venta, setFecha_venta] = useState("");
    const [cliente, setCliente] = useState("");
    const [ide_cliente, setIde_cliente] = useState("");
    const [vendedor, setVendedor] = useState("");
    const [estado, setEstado] = useState("");
    const [valor_total, setValor_total] = useState("");
    const [medio_pago, setMedio_pago] = useState("");

/*
    let isDisabled = false;
    let editar = 0;
    if (codigo_venta === "" || id_producto === "" || fecha_venta === ""
     || cliente === "" || ide_cliente === "" || vendedor === ""|| estado === ""|| valor_total === "") {
        isDisabled = true;
    } else {
        isDisabled = false;
    }   */
    useEffect(() => {
        getProductos();
    }, []);

    const [productos, setProductos] = useState([]);
    const getProductos = async function () {
        try {
            const { data } = await getProductosSE();
            setProductos(data.productos);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        const venta = {
            
            id_producto,
            medio_pago,
            fecha_venta,
            cliente,
            ide_cliente,
            vendedor,
            estado,
            valor_total            
        };
        console.log(venta);
            try {
                addVentaSE(venta).then(response => {
                    if (response.data.ok) {
                        //document.querySelector('.closeModalVenta').click();
                        notie.alert({
                            type: 'success',
                            text: response.data.mensaje,
                        });
                        
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
        <div className="modal-body">
            <form onSubmit={handleSubmit}>           
            <div className="row">
                
                <div className="row mt-2">
                    <label for="ID Producto" className="form-label">Producto</label >
                    <select className="form-select"onChange={e => setId_producto(e.target.value)}
                            value={id_producto} aria-label="Default select example" id="Medio de Pago">
                        <option selected>Seleccione</option>
                        {
                            productos.map((producto,index )=> (
                                <option value="producto._id">{producto.descripcion}</option>
                                                       
                            
                                                       

                            ))



                        }


                        
                    </select>
                </div>
                <div className="row mt-2">
                    <label for="Medio de Pago" className="form-label">Medio de Pago</label>
                    <select className="form-select"onChange={e => setMedio_pago(e.target.value)}
                            value={medio_pago} aria-label="Default select example" id="Medio de Pago">
                        <option selected>Seleccione</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta de Credito</option>
                    </select>                         
                </div>
                <div className="row mt-2">
                    <label for="Fecha de Venta" className="form-label">Fecha de Venta</label >
                    <input type="date"
                            className="form-control"
                            id="Fecha de Venta"
                            placeholder="dd/mm/aaaa"onChange={e => setFecha_venta(e.target.value)}
                            value={fecha_venta}/>
                </div>
                <div className="row mt-2">
                    <label for="Cliente" className="form-label">Cliente</label >
                    <input type="text"
                            className="form-control"
                            id="Nombre cliente"
                            placeholder=""onChange={e => setCliente(e.target.value)}
                            value={cliente}/>
                </div>
                <div className="row mt-2">
                    <label for="ID Cliente" className="form-label">ID Cliente</label >
                    <input type="text"
                            className="form-control"
                            id="ID cliente"
                            placeholder=""onChange={e => setIde_cliente(e.target.value)}
                            value={ide_cliente}/>
                </div>
                <div className="row mt-2">
                    <label for="Vendedor" className="form-label">Vendedor</label >
                    <input type="text"
                            className="form-control"
                            id="Nombre vendedor"
                            placeholder=""onChange={e => setVendedor(e.target.value)}
                            value={vendedor}/>
                </div>
                <div className="row mt-2">
                    <label for="Estado" className="form-label">Estado</label>
                    <select className="form-select" onChange={e => setEstado(e.target.value)}
                                value={estado} aria-label="Default select example" id="estado">
                        
                        <option selected>Seleccione</option>
                        <option value="efectivo">Procesado</option>
                        <option value="tarjeta">Cancelado</option>
                        <option value="tarjeta">Entregado</option>
                    </select>                         
                </div>
                <div className="row mt-2">
                    <label for="Valor Total" className="form-label">Valor Total</label >
                    <input type="number"
                            className="form-control"
                            id="Valor Total"
                            placeholder=""
                            onChange={e => setValor_total(e.target.value)}
                                value={valor_total}
                            
                            />
                </div>
                <div className="modal-footer">
            <button  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <input type="submit" className="btn btn-primary"  value="Guardar" />
        </div>
            </div>
            </form>
        </div>
    );
}

export default ModalVenta