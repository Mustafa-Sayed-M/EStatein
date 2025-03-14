import React from 'react';

function ContactMethod() {
    return (
        <div className='contact-method col-span-12 xl:col-span-6'>
            <label htmlFor='phone-method' className='font-medium block mb-2'>Preferred Contact Method</label>
            {/* Methods */}
            <div className='methods-container flex max-sm:flex-col max-sm:*:w-full items-center gap-3 *:flex-1 *:rounded-md *:bg-grey-color-10 *:border *:border-grey-color-15'>
                {/* Phone Number Method */}
                <div className='phone-number-method relative'>
                    {/* Label */}
                    <label htmlFor='phone-method' className='absolute top-1/2 -translate-y-1/2 left-3 text-grey-color-60'>
                        <i className="fa-solid fa-phone fa-fw"></i>
                    </label>
                    {/* Input */}
                    <input
                        type='tel'
                        name='phone-method'
                        id='phone-method'
                        placeholder='Enter phone number'
                        className='focus:outline-none bg-transparent w-full py-3 pr-4 pl-10 rounded-md'
                    />
                    {/* Radio */}
                    <label className='absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 appearance-none border-2 border-purple-color-60 rounded-full cursor-pointer p-0.5'>
                        {/* Radio Input */}
                        <input
                            defaultChecked
                            type='radio'
                            name='contact-method'
                            className='hidden peer'
                        />
                        {/*  */}
                        <div className='w-full h-full bg-purple-color-60 opacity-0 scale-0 transition rounded-full peer-checked:opacity-100 peer-checked:scale-100'></div>
                    </label>
                </div>
                {/* Email Address Method */}
                <div className='email-address-method relative'>
                    {/* Label */}
                    <label htmlFor='email-method' className='absolute top-1/2 -translate-y-1/2 left-3 text-grey-color-60'>
                        <i className="fa-solid fa-envelope fa-fw"></i>
                    </label>
                    {/* Input */}
                    <input
                        type='email'
                        id='email-method'
                        name='email-method'
                        placeholder='Enter email address'
                        className='focus:outline-none bg-transparent w-full py-3 pr-4 pl-10 rounded-md'
                    />
                    {/* Radio */}
                    <label className='absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5 appearance-none border-2 border-purple-color-60 rounded-full cursor-pointer p-0.5'>
                        {/* Radio Input */}
                        <input
                            type='radio'
                            name='contact-method'
                            className='hidden peer'
                        />
                        {/*  */}
                        <div className='w-full h-full bg-purple-color-60 opacity-0 scale-0 transition rounded-full peer-checked:opacity-100 peer-checked:scale-100'></div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default ContactMethod;