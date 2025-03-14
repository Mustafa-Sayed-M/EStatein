import React from 'react';
import { useNavbar } from '../../../Context/NavbarContext';

function NavbarMenuToggler() {

    const { menuIsOpen, setMenuIsOpen } = useNavbar();

    const handleClick = (e) => {
        e.stopPropagation();
        setMenuIsOpen(!menuIsOpen);
    };

    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.navbar')) setMenuIsOpen(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [setMenuIsOpen]);

    return (
        <button
            type='button'
            onClick={handleClick}
            aria-label='Navbar Menu Toggler'
            title={menuIsOpen ? 'Close' : 'Open'}
            className='lg:hidden flex flex-col gap-y-2 items-end w-10'
        >
            <span style={{ transformOrigin: 'right center' }} className={`h-0.5 rounded-sm bg-white w-full block transition  ${menuIsOpen ? '-rotate-[30deg]' : ''}`}></span>
            <span className={`h-0.5 rounded-sm bg-white w-full block transition  ${menuIsOpen ? 'scale-0 opacity-0' : ''}`}></span>
            <span style={{ transformOrigin: 'right center' }} className={`h-0.5 rounded-sm bg-white w-full block transition ${menuIsOpen ? 'scale-x-100 rotate-[30deg]' : 'scale-x-75'}`}></span>
        </button>
    )
}

export default NavbarMenuToggler;