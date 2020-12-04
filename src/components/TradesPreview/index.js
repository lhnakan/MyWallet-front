import React, { useContext, useEffect, useState } from 'react';

import FinancialContext from '../../context/FinancialContext';
import Trade from './TradesPreviewForms';

export default function TradesPreview(props) {
    const { cost, date, item, type } = props.trade;
    
    const day = date[8]+date[9];
    const month = date[5]+date[6];

    return (
        <Trade type={type}>
            <span>{day}/{month}</span>
            <div>
                <p>{item}</p>
                <span>{cost}</span>
            </div>
        </Trade>

    );
}