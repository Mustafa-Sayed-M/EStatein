import React from 'react';
import { Link } from 'react-router-dom';
import { useNavbar } from '../../Context/NavbarContext';

function AppLogo() {

    const { menuIsOpen, setMenuIsOpen } = useNavbar();

    const handleClick = () => {
        if (menuIsOpen) setMenuIsOpen(false);
    }

    return (
        <Link to={`/`} onClick={handleClick}>
            <picture>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                    alt='App Logo'
                    width={120}
                    height={120}
                />
            </picture>
        </Link>
    )
}

export default AppLogo;