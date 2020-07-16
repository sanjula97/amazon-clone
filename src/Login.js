import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {

    const login = e => {
        e.preventDefault();
        //do the login
    }

    return (
        <div className="login">
           <Link to="/">
                <img 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" 
                    className="login__logo"
                    alt="logo"/>
           </Link> 

           <div className="login__container">
               <h1>Sign in</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type="email"/>
                   <h5>Password</h5>
                   <input type="password"/>
                   <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
               </form>

               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

               <button onClick={register} className="login__registerButton">Create your amazon account</button>
           </div>
        </div>
    )
}

export default Login
