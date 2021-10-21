import axios from 'axios'

export const getUsuariosSE = async function () {
    try {
        return await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/getUsuarios',
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const addUsuarioSE = async function(usuario) {
    try {
        return await axios({
            method: 'POST',
            url: 'http://localhost:4000/api/addUsuario',
            data: usuario,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const deleteUsuarioSE = async function (id) {
    try {
        return await axios({
            method: 'DELETE',
            url: 'http://localhost:4000/api/deleteUsuario',
            data: id,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const getUsuarioByIdSE = async function (id) {
    try {
        return await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/getUsuarioById/'+id+'',
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}