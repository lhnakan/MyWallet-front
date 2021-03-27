import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import StatementService from '../../services/StatementService';
import UserContext from '../../context/UserContext';
import BalanceContainer from './WalletStatementForms';
import Header from '../../components/Header';
import StatementBox from '../../components/StatementBox';

export default function WalletStatement() {
  const { user } = useContext(UserContext);
  const [statementList, setStatementList] = useState();
    
  useEffect(async () => {
    if (user) {
      const data = await StatementService.getAll(user.token);

      if (data.success) {
        setStatementList(data.success);
      } else {
        alert('Erro ao carregar extrato da conta, tente novamente mais tarde');
      }
    }
  }, []);

  return (
    <BalanceContainer>
      <Header />
                        
      {statementList 
        ? <StatementBox statementList={statementList} /> 
        : <div><span>Nao ha registros de entrada ou saida</span></div>}
            
      <footer>
        <Link to="/add-received">
          <button type="submit">
            <AiOutlinePlusCircle size="25px" />
            Nova entrada
          </button>
        </Link>
        <Link to="/add-spent">
          <button type="submit">
            <AiOutlineMinusCircle size="25px" />
            Nova saida
          </button>
        </Link>
      </footer>
            
    </BalanceContainer>
  );
}
