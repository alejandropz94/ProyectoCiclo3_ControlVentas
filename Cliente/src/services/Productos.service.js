import axios from 'axios'

export const getProductosSE = async function () {
    try {
        return await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/getProductos'
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const addProductoSE = async function(producto) {
    try {
        return await axios({
            method: 'POST',
            url: 'http://localhost:4000/api/addProducto',
            data: producto,
            headers: {'Access-Control-Allow-Origin' : '*'}
        });
    } catch(error) {
        console.log(error);
    }
}

export const deleteProductoSE = async function (id) {
    try {
        return await axios({
            method: 'DELETE',
            url: 'http://localhost:4000/api/deleteProducto',
            data: id
        });
    } catch(error) {
        console.log(error);
    }
}

export const getProductoByIdSE = async function (id) {
    try {
        return await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/getProductoById/'+id+''
        });
    } catch (error) {
        throw new Error(error);
    }
}