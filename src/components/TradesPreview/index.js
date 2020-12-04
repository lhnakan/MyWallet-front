import React from 'react';

import Trade from './TradesPreviewForms';

export default function TradesPreview(props) {
    const { cost, date, month, item, type } = props.trade;

    return (
        <Trade type={type}>
            <span>{date}/{month}</span>
            <div>
                <p>{item}</p>
                <span>{cost}</span>
            </div>
        </Trade>

    );
}