import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import UserContext from '../context/UserContext';

import Container from '../assets/styles/loginStyles/Container';

export default function SignIn() {
    const { setUserName } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function login() {
        
        setUserName('Fulano')
        alert("logando")
        history.push('/statement')
    }
    return(
        <Container>
            <h1>MyWallet</h1>
            
            <form onSubmit={login}>
                <input 
                    type='email'
                    placeholder='E-mail' 
                    onChange={e => setEmail(e.target.value)} 
                    value={email} 
                />
                <input 
                    type='password' 
                    placeholder='Senha' 
                    onChange={e => setPassword(e.target.value)} 
                    value={password}  
                />
                <button>Entrar</button>
            </form>

            <Link to={'/sign-up'} >Primeira vez? Cadastre-se!</Link>
            
        </Container>
    );
}