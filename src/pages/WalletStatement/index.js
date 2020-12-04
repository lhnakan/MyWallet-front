import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import UserContext from '../../context/UserContext';
import BalanceContainer from "./WalletStatementForms";
import Header from '../../components/Header';
import StatementBox from '../../components/StatementBox';

export default function WalletStatement() {
    const { config, statementList, setStatementList } = useContext(UserContext);
    
    useEffect (() => {
        axios.get('https://mywallet-lucasn.herokuapp.com/api/transactions', config)
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
                        
            {statementList 
                ? <StatementBox /> 
                : <div><span>Nao ha registros de entrada ou saida</span></div>
            }
            
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