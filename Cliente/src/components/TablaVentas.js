import React, { useEffect, useState } from 'react'
import ActualizarVenta from './ActualizarVenta';
import EliminarVenta from './EliminarVenta';
import {getVentasSE} from '../services/Ventas.service';

function TablaVentas() {
    useEffect(() => {
        getVentas();
    }, []);

    const [ventas, setVentas] = useState([]);
    const getVentas = async function () {
        try {
            const { data } = await getVentasSE();
            console.log(data.model);
            setVentas(data.model);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        ventas.map((venta, index) => 
        <tr key={venta._id}>
                <td>{venta._id}</td>
                <td >{venta.id_producto}</td>
                <td >{venta.medio_pago}</td>
                <td >{venta.fecha_venta}</td>
                <td >{venta.cliente}</td>
                <td >{venta.ide_cliente}</td>
                <td >{venta.vendedor}</td>
                <td >{venta.estado}</td>
                <td>{venta.valor_total}</td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <ActualizarVenta></ActualizarVenta>
                        <EliminarVenta></EliminarVenta>
                    </div>
                    
                </td>
        </tr>
        ));
    
}

export default TablaVentas