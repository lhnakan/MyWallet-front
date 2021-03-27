import React, { useState, useEffect } from 'react';
import TradesContainer from './StatementBoxForms';

import TradesPreview from '../TradesPreview';

export default function StatementBox({ statementList }) {
  const [finalBalance, setFinalBalance] = useState('0,00');
  const [status, setStatus] = useState('positive');

  useEffect(() => {
    let total = 0;

    statementList.forEach((s) => {
      const price = s.cost.split(' ')[1];
      const formatPrice = parseFloat(price.replace(',', '.'));
      if (s.type === 'input') {
        total += formatPrice;
      } else {
        total -= formatPrice;
      }
    });
    if (total < 0) setStatus('negative');

    const updatedTotal = total.toFixed(2).replace('.', ',');

    setFinalBalance(updatedTotal);
  }, [statementList]);

  return (
    <TradesContainer status={status}>
      <ul>
        {statementList.map((s) => <TradesPreview key={s.id} trade={s} />)}               
      </ul>
      <div>
        <h3>SALDO</h3>
        <span>
          R$
          {finalBalance}
        </span>
      </div>
    </TradesContainer>
  );
}
