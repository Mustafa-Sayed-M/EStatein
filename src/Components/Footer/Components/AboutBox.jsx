import React from 'react';
import AppLogo from '../../Atoms/AppLogo';

function AboutBox() {
    return (
        <div className='about-box 2xl:col-span-3 space-y-3'>
            {/* App Logo */}
            <AppLogo />
            {/* Form Subscribe */}
            <form>
                <div className='input-group ring-lime-50 relative'>
                    {/* Label */}
                    <label htmlFor='email-input' className='absolute left-3 top-1/2 -translate-y-1/2 text-grey-color-60'>
                        <i className="fa-solid fa-envelope fa-fw"></i>
                    </label>
                    {/* Input */}
                    <input
                        required
                        type='email'
                        name='email'
                        id='email-input'
                        autoComplete='on'
                        placeholder='Enter Your Email'
                        className='focus:outline-none py-4 px-10 rounded-md w-full border border-grey-color-15 bg-transparent'
                    />
                    {/* Submit */}
                    <button
                        title='Submit Email'
                        aria-label='Subscribe'
                        className='absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 leading-10 text-center text-lg'
                    >
                        <i className="fa-solid fa-paper-plane fa-fw"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AboutBox;