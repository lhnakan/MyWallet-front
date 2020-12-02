import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../assets/styles/common';
import LoginBox from '../assets/styles/LoginBox';

export default function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    function saveNewUser(){
        alert("registrado")
    }
    
    return(
        <Container>
            <h1>MyWallet</h1>
            <LoginBox>
                <form onSubmit={saveNewUser}>
                    <input 
                        type='text'
                        placeholder='Nome' 
                        onChange={e => setUserName(e.target.value)} 
                        value={userName} 
                    />
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
                    <input 
                        type='password' 
                        placeholder='Senha' 
                        onChange={e => setPasswordConfirmation(e.target.value)} 
                        value={passwordConfirmation}  
                    />
                    <button>Entrar</button>
                </form>
                <Link to={'/'} >Ja tem uma conta? Entre agora!</Link>
            </LoginBox>
        </Container>
    );
}