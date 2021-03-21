import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Container from './addTransactionsForms';
import UserContext from '../../context/UserContext';

export default function Input() {
  const { config } = useContext(UserContext);
  const [cost, setCost] = useState('');
  const [item, setItem] = useState('');
  const [selectDate, setSelectDate] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function save(e) {     
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    axios.post('http://localhost:4000/api/transactions/output', { item, cost, selectDate }, config)
      .then(() => {
        history.push('/statement');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <Container>
      <h2>Nova saida</h2>
      <form onSubmit={save}>
        <input 
          type="text"
          placeholder="Valor" 
          onChange={(e) => setCost(e.target.value)} 
          value={cost}
        />
        <input 
          type="text" 
          placeholder="Descricao" 
          onChange={(e) => setItem(e.target.value)} 
          value={item}
        />
        <input 
          type="date" 
          placeholder="Data" 
          onChange={(e) => setSelectDate(e.target.value)} 
          value={selectDate}
        /> 
        <button>Salvar saida</button>
      </form>
    </Container>
  );
}
