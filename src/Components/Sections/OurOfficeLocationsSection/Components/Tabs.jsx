import React from 'react';

function Tabs({ typeView, setTypeView }) {
    return (
        <div className='tabs flex items-center max-sm:flex-col max-sm:w-full *:max-sm:w-full gap-2 p-3 rounded-md bg-grey-color-10 w-fit *:py-2 *:px-4 *:min-w-28 *:rounded-md *:border *:border-grey-color-15'>
            <button
                title=''
                type='button'
                aria-label='All'
                onClick={() => setTypeView('ALL')}
                className={`transition-colors ${typeView === 'ALL' ? 'bg-grey-color-8' : 'sm:hover:bg-grey-color-8'}`}
            >
                All
            </button>
            <button
                title=''
                type='button'
                aria-label='All'
                onClick={() => setTypeView('HEADQUARTER')}
                className={`transition-colors ${typeView === 'HEADQUARTER' ? 'bg-grey-color-8' : 'sm:hover:bg-grey-color-8'}`}
            >
                Headquarters
            </button>
            <button
                title=''
                type='button'
                aria-label='All'
                onClick={() => setTypeView('REGIONAL')}
                className={`transition-colors ${typeView === 'REGIONAL' ? 'bg-grey-color-8' : 'sm:hover:bg-grey-color-8'}`}
            >
                Regional
            </button>
        </div>
    )
}

export default Tabs;