import React from 'react';
import { Link } from 'react-router-dom';

function LinksBox({ keyItem, values }) {
    return (
        <div className='links-box'>
            <h3 className="font-medium text-grey-color-60 mb-2">{keyItem}</h3>
            <ul>
                {values.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.href}
                            className='block py-1 font-medium transition-colors sm:hover:text-purple-color-60'
                        >{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksBox;