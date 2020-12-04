import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import Container from '../assets/styles/loginStyles/Container';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const history = useHistory();

    function saveNewUser() {   
        const newUser = {
            username, 
            email, 
            password,
            passwordConfirmation
        }    

        axios.post('http://localhost:3000/api/users/sign-up', newUser)
            .then((r) => {
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })            
    }
    
    return(
        <Container>
            <h1>MyWallet</h1>
            
            <form onSubmit={saveNewUser}>
                <input 
                    type='text'
                    placeholder='Nome' 
                    onChange={e => setUsername(e.target.value)} 
                    value={username} 
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
                    placeholder='Confirme a senha' 
                    onChange={e => setPasswordConfirmation(e.target.value)} 
                    value={passwordConfirmation}  
                />
                <button>Entrar</button>
            </form>

            <Link to={'/'} >Ja tem uma conta? Entre agora!</Link>
           
        </Container>
    );
}