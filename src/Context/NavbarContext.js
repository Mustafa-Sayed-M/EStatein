import React from 'react';

const NavbarContext = React.createContext();

export const NavbarContextProvider = ({ children }) => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    return (
        <NavbarContext.Provider value={{
            menuIsOpen, setMenuIsOpen
        }}>
            {children}
        </NavbarContext.Provider>
    )
};

export const useNavbar = () => React.useContext(NavbarContext);