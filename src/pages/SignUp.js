import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginService from '../services/LoginService';
import Container from '../assets/styles/loginStyles/Container';
import UserContext from '../context/UserContext';

export default function SignUp() {
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  if (user) {
    history.push('/statement');
  }

  async function saveNewUser(e) {
    e.preventDefault();

    if (loading) return;

    if (!username || !email || !password) {
      setWarning('Por favor preencha todos os campos');
      return;
    }

    if (password !== passwordConfirmation) {
      setWarning('Senhas diferentes, verifique o valor digitado');
      return;
    }

    setLoading(true);

    const newUser = {
      username, 
      email, 
      password,
      passwordConfirmation,
    };

    const data = await LoginService.signUp(newUser);

    if (data.success) {
      history.push('/');
    } else if (data.response.status === 409) {
      setWarning('E-mail já cadastrado');
    } else {
      setWarning('Erro no servidor, por favor tente novamente mais tarde');
    }

    setLoading(false);     
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

        <span>{warning}</span>

        <button type="submit">Entrar</button>
      </form>

      <Link to="/">Ja tem uma conta? Entre agora!</Link>
    </Container>
  );
}
