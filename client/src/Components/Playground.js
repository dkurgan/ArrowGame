import React from 'react';
import Archer from './Archer';
import Arrow from './Arrow';
import Target from './Target';

export default function Playground({arrowX, arrowVisible}) {
    return (
        <div className="playground" >
            <Archer />
            <Target />
            <Arrow leftPos={arrowX} arrowVisible={ arrowVisible}/>
        </div>
    )
}