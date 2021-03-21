import React from 'react';

import Trade from './TradesPreviewForms';

export default function TradesPreview({ trade }) {
  const {
    cost, date, month, item, type, 
  } = trade;

  return (
    <Trade type={type}>
      <span>
        {date}
        /
        {month}
      </span>
      <div>
        <p>{item}</p>
        <span>{cost}</span>
      </div>
    </Trade>
  );
}
