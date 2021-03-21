import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import Container from '../assets/styles/loginStyles/Container';
import UserContext from '../context/UserContext';

export default function SignUp() {
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  if (user) {
    history.push('/statement');
  }

  function saveNewUser(e) {   
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const newUser = {
      username, 
      email, 
      password,
      passwordConfirmation,
    };    

    axios.post('http://localhost:4000/api/users/sign-up', newUser)
      .then(() => {
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });            
  }
    
  return (
    <Container>
      <h1>MyWallet</h1>
            
      <form onSubmit={saveNewUser}>
        <input 
          type="text"
          placeholder="Nome" 
          onChange={(e) => setUsername(e.target.value)} 
          value={username}
        />
        <input 
          type="email"
          placeholder="E-mail" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
        <input 
          type="password" 
          placeholder="Confirme a senha" 
          onChange={(e) => setPasswordConfirmation(e.target.value)} 
          value={passwordConfirmation}
        />
        <button>Entrar</button>
      </form>

      <Link to="/">Ja tem uma conta? Entre agora!</Link>
           
    </Container>
  );
}
