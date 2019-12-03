import React from "react";

function Login() {
    return (
        <div className="container">
            <div className="register">
                <h2>Login</h2>
                <div className=" register-top">
                    <form className="formLogin">
                        <div>
                            <span>Login</span>
                            <input type="text" /> 
                        </div>
                        <div>
                            <span>Senha</span>
                            <input type="text" /> 
                        </div>
                        <div>
                            <input type="submit" value="Submit" /> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;