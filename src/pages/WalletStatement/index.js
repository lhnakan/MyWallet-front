import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import UserContext from '../../context/UserContext';
import BalanceContainer from "./WalletStatementForms";

import StatementBox from '../../components/StatementBox';

export default function WalletStatement() {
    const { userName } = useContext(UserContext);

    const [statementList, setStatementList] = useState(true);

    

    return (
        <BalanceContainer>
            <header>
                <h2>Ola, {userName}</h2>
                <IoExitOutline size='26px' />
            </header>
            
            {statementList ? <StatementBox /> : <div><span>Nao ha registros de entrada ou saida</span></div>}
            
            <footer>
                <button>
                    <AiOutlinePlusCircle size='25px' />
                    Nova entrada
                </button>
                <button>
                    <AiOutlineMinusCircle size='25px' />
                    Nova saida
                </button>
            </footer>
            
        </BalanceContainer>
    );
}