import React from 'react';

export default function Arrow({ leftPos, arrowVisible }) {
    return (
        <div className="arrow" style={{left: leftPos, opacity: arrowVisible}}/>
    )
}