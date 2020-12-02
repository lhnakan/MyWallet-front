import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Container from '../assets/styles/common';
import LoginBox from '../assets/styles/LoginBox';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        alert("logando")
    }
    return(
        <Container>
            <h1>MyWallet</h1>
            <LoginBox>
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
            </LoginBox>
        </Container>
    );
}