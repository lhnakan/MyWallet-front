import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginService from '../services/LoginService';

import UserContext from '../context/UserContext';
import Container from '../assets/styles/loginStyles/Container';

export default function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  if (user) {
    history.push('/statement');
  }

  async function login(e) {     
    e.preventDefault();

    if (loading) return;

    if (!email || !password) {
      setWarning('Por favor insira e-mail e senha');
      return;
    }
    
    setLoading(true);

    const body = { email, password };

    const data = await LoginService.signIn(body);

    if (data.success) {
      setUser(data.success);
      history.push('/statement');
    } else if (data.response.status === 401) {
      setWarning('E-mail ou senha incorretos');
    } else {
      setWarning('Erro no servidor, por favor tente novamente mais tarde');
    }

    setLoading(false);
  }

  return (
    <Container>
      <h1>MyWallet</h1>
            
      <form onSubmit={login}>
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

        <span>{warning}</span>

        <button type="submit">Entrar</button>
      </form>

      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
            
    </Container>
  );
}
