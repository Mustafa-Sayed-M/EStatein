import React from 'react';

function TeamCard({ teamData: { name, position, image } }) {
    return (
        <div className='team-card p-5 rounded-md border border-grey-color-15'>
            {/* Image Container */}
            <div className='image-container mb-10 relative'>
                {/* Image */}
                <picture>
                    <img
                        src={`${process.env.PUBLIC_URL}${image}`}
                        alt={name}
                        width={0}
                        height={0}
                        className='w-auto h-auto rounded-md aspect-[1/1] object-cover'
                    />
                </picture>
                {/* Twitter Link */}
                <a
                    target='_blank'
                    href={'https://x.com/sh3dowone1'}
                    rel="noreferrer"
                    title='Go to Twitter Profile'
                    className='block py-2 px-4 rounded-full bg-purple-color-60 absolute left-1/2 -translate-x-1/2 bottom-0 -mb-5 transition-colors sm:hover:bg-white sm:hover:text-purple-color-60 text-lg'
                >
                    <span className='sr-only'>Twitter Link</span>
                    <i className='fa-brands fa-twitter fa-fw'></i>
                </a>
            </div>
            {/* Text Info */}
            <div className='text-info text-center space-y-1 mb-3'>
                {/* Name */}
                <h3 className='font-semibold'>{name}</h3>
                {/* Position */}
                <p className='line-clamp-1'>{position}</p>
            </div>
            {/* Send Message */}
            <form className='relative'>
                {/* Input */}
                <input
                    required
                    type='text'
                    name='message'
                    id='input-message'
                    defaultValue={'Say Hello 👋'}
                    placeholder='Enter your message'
                    className='focus:outline-none bg-transparent rounded-full py-4 px-3 border border-grey-color-15 w-full'
                />
                {/* Submit */}
                <button
                    aria-label='Submit Message'
                    title='Send Message'
                    className='absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 leading-10 text-center bg-purple-color-60 rounded-full transition-colors sm:hover:bg-white sm:hover:text-purple-color-60'
                >
                    <i className="fa-solid fa-paper-plane fa-fw"></i>
                </button>
            </form>
        </div>
    )
}

export default TeamCard;