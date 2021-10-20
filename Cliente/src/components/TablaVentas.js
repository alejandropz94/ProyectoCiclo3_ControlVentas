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
                <td>{venta.codigo_venta}</td>
                <td >ddddd</td>
                <td >Dato</td>
                <td >{venta.fecha_venta}</td>
                <td >Dato</td>
                <td >Dato</td>
                <td >Dato</td>
                <td >Dato</td>
                <td>Dato</td>
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