import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import UserContext from '../../context/UserContext';
import FinancialContext from '../../context/FinancialContext';
import BalanceContainer from "./WalletStatementForms";
import Header from '../../components/Header';
import StatementBox from '../../components/StatementBox';


export default function WalletStatement() {
    const { config } = useContext(UserContext);
    const { statementList, setStatementList } = useContext(FinancialContext)
    
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    
    useEffect (() => {
        axios.get('http://localhost:3000/api/transactions', config)
            .then(r => {
                setStatementList(r.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    

    return (
        <BalanceContainer>
            <Header />
                        
            {statementList ? <StatementBox /> : <div><span>Nao ha registros de entrada ou saida</span></div>}
            
            <footer>
                <Link to={'/add-received'}>
                    <button>
                        <AiOutlinePlusCircle size='25px' />
                        Nova entrada
                    </button>
                </Link>
                <Link to={'/add-spent'}>
                    <button>
                        <AiOutlineMinusCircle size='25px' />
                        Nova saida
                    </button>
                </Link>
            </footer>
            
        </BalanceContainer>
    );
}