import React from 'react';

function Budget() {
    return (
        <div className='budget col-span-12 xl:col-span-6'>
            <label htmlFor='budget' className='font-medium block mb-2'>Budget</label>
            <select
                id='budget'
                name='budget'
                className='focus:outline-none w-full rounded-md appearance-none bg-grey-color-10 border border-grey-color-15 p-3 text-grey-color-40 cursor-pointer'
            >
                <option value={''}>Select Budget</option>
            </select>
        </div>
    )
}

export default Budget;