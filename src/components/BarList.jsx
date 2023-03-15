import React from 'react';
import { Bar } from './index';
import './BarList.css';

const BarList = ({ values, swappingBars }) => {

    return (
        <>
            <div className='bar-list'>
                {values.map((value, index) => {
                    const isSwapping = swappingBars.includes(index);
                    return (
                        <Bar
                            key={index}
                            value={value}
                            isSwapping={isSwapping}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default BarList;