import React, { useEffect, useState } from 'react'
import EliminarProducto from './EliminarProducto';
import EditarProducto from './EditarProducto';
import { getProductosSE } from '../../services/Productos.service';

function CuerpoTablaUsuario(props) {
    const { textoBuscar, setTextoBuscar } = props;
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

    return (
        productos.filter(function (item) {
            if (item.descripcion === undefined) {
                item.descripcion = "";
            }
            if (textoBuscar === "" || item.descripcion.includes(textoBuscar) || item._id.includes(textoBuscar)) {
                return true;
            }
        }).map((producto, index) => (
            <tr key={producto._id}>
                <td>{producto._id}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.valor_unitario}</td>
                <td>{producto.disponible ? "Sí" : "No"}</td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <EditarProducto></EditarProducto>
                        <EliminarProducto id={producto._id}></EliminarProducto>
                    </div>

                </td>
            </tr>
        ))
    );
}

export default CuerpoTablaUsuario
