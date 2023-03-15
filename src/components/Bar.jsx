import React from 'react';
import './Bar.css';

const Bar = ({ value, isSwapping }) => {

    const className = `bar${isSwapping ? ' bar--swapping' : ''}`;

    return (
        <div className={className} style={{ height: `${value}px` }}></div>
    );
}

export default Bar;