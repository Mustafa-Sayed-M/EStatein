import { ErrorMessage } from 'formik';
import React from 'react';

function FormikSelect({ label, options, ...attributes }) {
    return (
        <div className='formik-select col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3'>
            {/* Label */}
            <label htmlFor={attributes.id} className='font-medium block mb-2'>{label}</label>
            {/* Input */}
            <select
                {...attributes}
                className='w-full p-3 rounded-md bg-grey-color-10 border border-grey-color-15 appearance-none cursor-pointer text-grey-color-60'
            >
                {
                    options.map((option, index) => <option
                        key={index}
                        value={option.value}
                    >
                        {option.label}
                    </option>)
                }
            </select>
            {/* Error */}
            <ErrorMessage name={attributes.name} component={'div'} className='text-red-500 mt-2' />
        </div>
    )
}

export default FormikSelect;