import React from 'react';
import staticsData from '../../Data/statics.json';

function Statics() {
    return (
        <div className='statics flex items-center gap-3 max-sm:flex-col *:max-sm:w-full'>
            {
                staticsData.map(({ value, label }, index) => <div className='statics-card p-3 rounded-md bg-grey-color-10 border border-grey-color-15' key={index}>
                    <h2 className='font-bold text-xl'>{value}</h2>
                    <p className='font-medium'>{label}</p>
                </div>)
            }
        </div>
    )
}

export default Statics;