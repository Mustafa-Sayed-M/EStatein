import React from 'react';
import NavbarLinks from './Components/NavbarLinks';
import AppLogo from '../Atoms/AppLogo';
import ContactLink from './Components/ContactLink';
import NavbarMenuToggler from './Components/NavbarMenuToggler';
import { useNavbar } from '../../Context/NavbarContext';

function Navbar() {

    const { menuIsOpen, setMenuIsOpen } = useNavbar();

    return (
        <nav onClick={e => e.stopPropagation()} className='bg-grey-color-10 border-b border-b-grey-color-15 sticky top-0 z-50'>
            <div className='container py-3 min-h-[60px] flex items-center justify-between'>
                {/* App Logo */}
                <AppLogo />
                {/* Navbar Links */}
                <NavbarLinks />
                {/* Box Container */}
                <div className='box-container flex items-center gap-3'>
                    {/* Contact Link */}
                    <ContactLink className={'max-md:hidden'} onClick={() => menuIsOpen ? setMenuIsOpen(false) : null} />
                    {/* Navbar Menu Toggler */}
                    <NavbarMenuToggler />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;