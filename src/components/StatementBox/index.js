import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { TradesContainer } from './StatementBoxForms';

import TradesPreview from '../TradesPreview';

export default function StatementBox() {    
    const { statementList } = useContext(UserContext);

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
        <TradesContainer total={total}>
            <ul>
                {statementList.map(s => <TradesPreview key={s.id} trade={s}/>)}               
            </ul>
            <div>
                <h3>SALDO</h3>
                <span>R$ {finalBalance}</span>
            </div>
        </TradesContainer>
    );
}