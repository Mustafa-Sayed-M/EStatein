import { ErrorMessage } from 'formik';
import React from 'react';

function FormikInput({ label, ...attributes }) {
    return (
        <div className='formik-input col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3'>
            {/* Label */}
            <label htmlFor={attributes.id} className='font-medium block mb-2'>{label}</label>
            {/* Input */}
            <input
                {...attributes}
                className='w-full p-3 rounded-md border border-grey-color-15 bg-grey-color-10'
            />
            {/* Error */}
            <ErrorMessage name={attributes.name} component={'div'} className='text-red-500 mt-2' />
        </div>
    )
}

export default FormikInput;