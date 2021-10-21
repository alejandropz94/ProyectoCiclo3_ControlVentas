import axios from 'axios'

export const getVentasSE = async function () {
    try {
        return await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/getVentas',
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const addVentaSE = async function(venta) {
    try {
        return await axios({
            method: 'POST',
            url: 'http://localhost:4000/api/addVenta',
            data: venta,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const deleteVentaSE = async function (id) {
    try {
        return await axios({
            method: 'DELETE',
            url: 'https://localhost:4000/api/deleteVenta',
            data: id,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}