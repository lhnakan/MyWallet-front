import React, { useState, useEffect } from 'react';

import { TradesContainer, Trade } from './StatementBoxForms';

// import TradesPreview from '../components/TradesPreview';

export default function StatementBox() {
    const [finalBalance, setFinalBalance] = useState(0)

    
    const product = 'Gasto Aleatorio'
    const value = 350.00
    const type = 'entrada'
    useEffect(() => {
        setFinalBalance(finalBalance + value)
    }, []); 

    return (
        <TradesContainer>
            <ul>
                <Trade type={type}>
                    <span>data</span>
                    <div>
                        <p>{product}</p>
                        <span>{value}</span>
                    </div>
                </Trade>
                <Trade>
                    <span>data</span>
                    <div>
                    <p>{product}</p>
                    <span>{value}</span>
                    </div>
                </Trade>
                {/* {statementList.map(s => <TradesPreview key={s.id} trade={s} />)} */}
            </ul>
            <div>
                <h3>SALDO</h3>
                <p>R$ {finalBalance}</p>
            </div>
        </TradesContainer>
    );
}