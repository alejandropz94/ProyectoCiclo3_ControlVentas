import axios from 'axios'

export const getUsuariosSE = async function () {
    try {
        return await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/getUsuarios'
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
            headers: {'Access-Control-Allow-Origin' : '*'}
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
            data: id
        });
    } catch(error) {
        console.log(error);
    }
}

export const getUsuarioByIdSE = async function (id) {
    try {
        return await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/getUsuarioById/'+id+''
        });
    } catch (error) {
        throw new Error(error);
    }
}