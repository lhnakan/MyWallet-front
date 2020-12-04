import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';



import Container from "./addTransactionsForms";
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

        axios.post('https://mywallet-lucasn.herokuapp.com/api/transactions/input', {item, cost, selectDate}, config)
            .then(() => {
                history.push('/statement');
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }

    return (
        <Container>
            <h2>Nova entrada</h2>
            <form onSubmit={save}>
                <input 
                    type='text'
                    placeholder='Valor' 
                    onChange={e => setCost(e.target.value)} 
                    value={cost} 
                />
                <input 
                    type='text' 
                    placeholder='Descricao' 
                    onChange={e => setItem(e.target.value)} 
                    value={item}
                />
                <input 
                    type='date' 
                    placeholder='Data' 
                    onChange={e => setSelectDate(e.target.value)} 
                    value={selectDate}
                />                
                <button>Salvar entrada</button>
            </form>
        </Container>
    )
}