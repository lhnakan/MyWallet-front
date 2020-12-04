import React, { useState, useEffect, useContext } from 'react';
import FinancialContext from '../../context/FinancialContext';
import { TradesContainer } from './StatementBoxForms';

import TradesPreview from '../TradesPreview';

export default function StatementBox() {    
    const { statementList } = useContext(FinancialContext);

    let finalBalance = 0;
    let total = 0;
    statementList.forEach(s => {
        const price = s.cost.split(' ')[1]
        const formatPrice = parseFloat(price.replace(',', '.'))
        if(s.type === "input") {
            total += formatPrice
        } else {
            total -= formatPrice
        }
        finalBalance = total.toFixed(2).replace('.', ',')
    });
    return (
        <TradesContainer>
            <ul>
                {statementList.map(s => <TradesPreview key={s.id} trade={s}/>)}               
            </ul>
            <div>
                <h3>SALDO</h3>
                <p>R$ {finalBalance}</p>
            </div>
        </TradesContainer>
    );
}