import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import UserContext from '../context/UserContext';

import Container from '../assets/styles/loginStyles/Container';

export default function SignIn() {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function login(e) {     
        e.preventDefault();

        if (loading) return;
        setLoading(true);

        axios.post('https://mywallet-lucasn.herokuapp.com/api/users/sign-in', {email, password})
            .then(r => {
                setUser(r.data);               
                history.push('/statement');
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
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