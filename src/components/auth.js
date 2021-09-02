import React,{useState,useEffect} from 'react';
import API from '../api-service';
import {useCookies} from 'react-cookie';

function Auth(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [token,setToken] = useCookies(['auth-token'])
    const [isLoginView,setIsLoginView] = useState(true)
    
    useEffect(()=>{
        console.log(token);
        if (token['auth-token']) window.location.href = '/home'
    },[token])

    const loginClicked = (res)=>{
        API.loginUser({name:username,password})
        .then(resp => setToken('auth-token', resp.token))
        .catch(error => console.log(error))
    }

    const registerClicked = () => {
        API.registerUser({name:username,password})
        .then(resp => loginClicked(resp))
        .catch(error => console.log(error) )
    }
    const fetchAllUsers=  () => {
        API.allUsers()
        .then(resp => resp)
        .catch(error => console.log(error) )
    }

    const isDisabled=username.length ===0 || password.length===0;
    return (
        <div className='App'>
            <header className='App-header'>
                { isLoginView ? <h1>Login</h1>:
                <h1> Register </h1> }
            </header>
            <div className='login-container'>
                <label htmlFor='username'> username </label><br/>
                <input id='username' type='text' placeholder='username' value={username}
                    onChange = {evt => setUsername(evt.target.value)}
                /><br/>
     
                <label htmlFor='password' >Password</label>
                <input id='password' type="password"
                    placeholder='password'
                    value={password}
                    onChange={evt => setPassword (evt.target.value)}/><br/>
                { isLoginView ?
                    <button onClick = {loginClicked} disabled = {isDisabled}>Login</button>:
                    <button onClick = {registerClicked} disabled = {isDisabled}>Register</button>
                }

                { isLoginView ?
                    <p onClick={()=>setIsLoginView(false)}> You don't have an account? Register here</p>:
                    <p onClick={()=>setIsLoginView(true)}> You already have an account? Login here</p>
                }
                <button onClick = {fetchAllUsers} >Fetch Users</button>:

            </div>
        </div>
    )
}

export default Auth;