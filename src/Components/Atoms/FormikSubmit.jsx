import React from 'react';
import { Link } from 'react-router-dom';

function FormikSubmit({ isSubmitting }) {
    return (
        <div className='formik-submit flex md:items-center justify-between max-md:flex-col gap-y-5 col-span-12'>
            {/* Check Conditions */}
            <div className='flex items-center gap-3'>
                {/*  */}
                <label className='w-6 h-6 leading-6 text-center border border-grey-color-15 rounded-md cursor-pointer'>
                    <input
                        required
                        type='checkbox'
                        name='conditions'
                        className='hidden peer'
                    />
                    <div className='transition scale-0 peer-checked:scale-100'>
                        <i className='fa-solid fa-check fa-fw'></i>
                    </div>
                </label>
                {/* Content Text */}
                <p className='font-medium *:underline flex-1'>
                    I agree with
                    {" "}
                    <Link
                        to={``}
                        className='transition-colors sm:hover:text-purple-color-60'
                    >Terms of Use</Link>
                    {" "}
                    and
                    {" "}
                    <Link
                        to={``}
                        className='transition-colors sm:hover:text-purple-color-60'
                    >Privacy Policy</Link>
                </p>
            </div>
            {/* Submit Button */}
            <button
                type="submit"
                to={`/properties`}
                disabled={isSubmitting}
                aria-label='Submit Message'
                title='Submit Your Message'
                className='block max-md:w-full text-center font-medium py-2 px-4 rounded-md bg-purple-color-60 sm:hover:text-purple-color-60 sm:hover:bg-white transition-colors'
            >Submit your message</button>
        </div>
    )
}

export default FormikSubmit;