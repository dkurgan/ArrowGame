import React from 'react';
import arrow from '../img/arrow.png';

export default function Arrow({ leftPos, arrowVisible }) {
    return (
        <img className="arrow" alt="arrow" src={arrow} style={{left: leftPos, opacity: arrowVisible}}/>
    )
}
