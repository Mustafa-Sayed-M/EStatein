import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {

    const [isClosed, setIsClosed] = React.useState(() => window.localStorage.getItem('top-bar-isClosed') === 'true');

    if (isClosed) return;

    const handleClick = () => {
        window.localStorage.setItem('top-bar-isClosed', true);
        setIsClosed(true);
    }

    return (
        <div
            style={{
                backgroundSize: `cover`,
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/top-bar-bg.png)`
            }}
            className='top-bar border-b border-b-grey-color-15'
        >
            <div className='container py-2 min-h-[50px] flex items-center gap-3 max-md:flex-col-reverse'>
                <div className='flex-1 text-center'>
                    <span>✨Discover Your Dream Property with Estatein</span>
                    <Link
                        to={`/`}
                        className='underline ms-2 transition-colors sm:hover:text-purple-color-60 font-medium'
                    >Learn More</Link>
                </div>
                <button
                    title={'Hide'}
                    onClick={handleClick}
                    aria-label='Top Bar Closer'
                    className='ms-auto w-8 h-8 leading-8 text-center rounded-full bg-white/10 transition-colors sm:hover:bg-white/5'
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    )
}

export default TopBar;