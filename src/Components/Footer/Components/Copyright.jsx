import React from 'react';
import { Link } from 'react-router-dom';
import socialProfilesData from '../../../Data/socialProfiles.json';

function Copyright() {
    return (
        <div className='copyright py-3 bg-grey-color-10'>
            <div className='container flex items-center gap-4 max-md:flex-col'>
                {/*  */}
                <p className='text-white font-medium'>@2025 Estatein. All Rights Reserved.</p>
                {/* Terms & Conditions */}
                <Link
                    to={`/`}
                    className='font-medium transition-colors sm:hover:text-purple-color-60'
                >Terms & Conditions</Link>
                {/* Social Links */}
                <ul className='flex items-center gap-3 max-md:mx-auto md:ms-auto max-md:-order-1'>
                    {
                        socialProfilesData.map((link, index) => <li key={index}>
                            <a
                                href={link.href}
                                target='_blank'
                                rel="noreferrer"
                                className='bg-grey-color-8 w-10 h-10 leading-10 text-center rounded-full block transition-colors sm:hover:bg-purple-color-60'
                            >
                                <span className='sr-only'>{link.name}</span>
                                <i className={`${link.icon} fa-fw`}></i>
                            </a>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Copyright;