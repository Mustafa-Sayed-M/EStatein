import React from 'react';
import { NavLink } from 'react-router-dom';

function ContactLink({ className, ...attributes }) {
    return (
        <NavLink
            {...attributes}
            to={`/contact`}
            className={({ isActive }) => `${isActive ? 'bg-purple-color-60 border-transparent' : 'sm:hover:bg-purple-color-60 sm:hover:border-transparent bg-grey-color-8 border-grey-color-15'} block py-2 px-4 rounded-md border transition ${className}`}
        >Contact</NavLink>
    )
}

export default ContactLink;