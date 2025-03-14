import React from 'react';
import AboutBox from './Components/AboutBox';
import footerLinksData from '../../Data/footerLinks.json';
import LinksBox from './Components/LinksBox';
import Copyright from './Components/Copyright';

function Footer() {
    return (
        <footer>
            <div className='container py-10'>
                {/* Content Grid */}
                <div className='content-grid grid grid-cols-1 2xl:grid-cols-12 gap-x-4 gap-y-7'>
                    {/* About */}
                    <AboutBox />
                    {/* Links */}
                    <div className='links grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 2xl:col-span-9'>
                        {Object.entries(footerLinksData).map(([key, values]) => <LinksBox key={key} keyItem={key} values={values} />)}
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <Copyright />
        </footer>
    )
}

export default Footer;