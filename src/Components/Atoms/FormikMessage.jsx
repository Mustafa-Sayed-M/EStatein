import React from 'react';

function FormikMessage() {
    return (
        <div className='book-message col-span-12'>
            <label htmlFor='message' className='font-medium block mb-2'>Message</label>
            <textarea
                style={{
                    resize: 'none'
                }}
                id='message'
                name='message'
                placeholder='Enter your message here...'
                className='focus:outline-none w-full rounded-md bg-grey-color-10 border border-grey-color-15 p-3 min-h-[180px]'
            ></textarea>
        </div>
    )
}

export default FormikMessage;