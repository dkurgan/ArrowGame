import React from 'react';

export default function ({ leftPos, arrowVisible }) {
    return (
        <div className="arrow" style={{left: leftPos, opacity: arrowVisible}}/>
    )
}