import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const login = (event) => {
        event.preventDefault();
        //do the login
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //loged in,redirect to home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();
        //register
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //create user,login,redirect to the home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
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
                   <input 
                        value={email} 
                        onChange={event => setEmail(event.target.value)} 
                        type="email"/>
                   <h5>Password</h5>
                   <input 
                        value={password} 
                        onChange={event => setPassword(event.target.value)} 
                        type="password"/>
                   <button onClick={login}  type="submit" className="login__signInButton">Sign in</button>
               </form>

               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

               <button onClick={register} className="login__registerButton">Create your amazon account</button>
           </div>
        </div>
    )
}

export default Login
