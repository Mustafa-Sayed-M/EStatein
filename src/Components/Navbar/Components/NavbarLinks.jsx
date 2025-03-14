import React from 'react';
import linksData from '../../../Data/navbar-links.json'
import { NavLink } from 'react-router-dom';
import ContactLink from './ContactLink';
import { useNavbar } from '../../../Context/NavbarContext';

function NavbarLinks() {

    const { menuIsOpen, setMenuIsOpen } = useNavbar();

    const handleClick = () => {
        if (menuIsOpen) setMenuIsOpen(false);
    }

    return (
        <div className={`navbar-links max-lg:absolute max-lg:w-full max-lg:left-0 max-lg:top-full max-lg:bg-grey-color-8 max-lg:border-b max-lg:border-b-grey-color-15 
            transition-all duration-300 ease-in-out overflow-hidden
            ${menuIsOpen ? 'max-md:max-h-[300px] max-lg:max-h-[220px] max-lg:opacity-100' : 'max-lg:max-h-0'}`}
        >
            <div className='max-lg:container overflow-hidden'>
                <ul className={`flex items-center gap-2 max-lg:flex-col max-lg:py-3 transition-all duration-300 ease-in-out`}>
                    {
                        linksData.map((link, index) => (
                            <li key={index} className='max-lg:w-full'>
                                <NavLink
                                    to={link.to}
                                    onClick={handleClick}
                                    className={({ isActive }) => `${isActive ? 'max-lg:bg-grey-color-10 lg:bg-grey-color-8 border-grey-color-15' : 'max-lg:sm:hover:bg-grey-color-10 lg:sm:hover:bg-grey-color-8 bg-transparent border-transparent'} block py-2 px-4 rounded-md border transition`}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li className='max-lg:w-full'>
                        <ContactLink className={'md:hidden'} onClick={() => setMenuIsOpen(false)} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavbarLinks;