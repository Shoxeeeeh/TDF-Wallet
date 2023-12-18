import React, { useState } from "react";
import '../Login/Login.css'
import { LoginResponse } from "../../helpers/loginEndpoint";
import { types } from "../../types/types";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";

function Login (){
    
    const {isLogged ,dispatch} = useContext(AuthContext);
    console.log(isLogged);

    const [userError, setUserError] = useState(false);

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })
    
    const handlerInputChange = (e) => {
        setUserLogin({
            ...userLogin,
                [e.target.name]: e.target.value,
        })
    }

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        LoginResponse(userLogin).then(data => localStorage.setItem('isLogged', JSON.stringify(data),dispatch({type:types.login, payload:{data:data}}))).catch(setUserError(true))

    }


return(

<div>
    <div>
        <h1>Bienvenido a TDF Wallet!</h1>
    </div>
    <div className="container">
        <div className="formulario">
                <h2>Ingrese a su cuenta!</h2>
                <form onSubmit={handleSubmitLogin} className="formLogin">
                    <div>
                        <label>Ingrese su correo aqui!</label>
                        <input type="text" placeholder="Example: abc@gmail.com" name="email" value={userLogin.email} onChange={handlerInputChange}/>
                        <br />
                        <label>Ingrese su constraseña aqui!</label>
                        <input type="password" name="password" value={userLogin.password} onChange={handlerInputChange}/>
                    </div>
                    <div className="buttonSpace">
                        <button>Iniciar sesion!</button>
                    </div>
                    {userError ? <h2 style={{color: "red"}}>Credenciales incorrectas!</h2> : null }
                    <div>
                        <label>no tiene una cuenta?</label>
                        <a href="">cree una aqui!</a>
                    </div>
                </form>    
        </div>
    </div>
</div>
);

}

export default Login