import React from 'react'
import Mision from '../assets/img/Mision.png'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import '../Style/estilos.css'

const Login = () => {

    const responseGoogle = async (resp) => {
        console.log(resp);

        let response = await axios({
            method: 'POST',
            url: 'http://localhost:4000/api/auth/google/login',
            headers: {
                'Authorization': `Bearer ${resp.tokenId}`
            }
        });
        if (response.data.Token) {
            sessionStorage.setItem("token", response.data.Token);
            sessionStorage.setItem("nombre", response.data.nombre);
            window.location.href = "/productos";
        }


    }

    return (
        <div className="contlogin text-center">
            <div className="container log pt-5 pb-5">
                <form>
                    <img
                        src={Mision}
                        alt="logo"
                        className="img-login mb-3"
                    ></img>
                    <h1 className="h3 mb-5 fw-normal">Iniciar Sesion</h1>
                    <div className="">
                        <div className="">
                            <GoogleLogin
                                clientId="967651126086-dqt99i1fln6e5ute6rtnk8dn2tn94l4b.apps.googleusercontent.com"
                                buttonText="Iniciar Sesion"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                    <p className="mt-5 mb-3 text-muted">©MinTic 2021</p>
                </form>
            </div>
        </div>
    )
}

export default Login