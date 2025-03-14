import React from 'react';
import strategicMarketingData from '../../../Data/strategicMarketing.json';
import ServiceCard from '../Components/ServiceCard';
import { Link } from 'react-router-dom';

function StrategicMarketingSection() {
    return (
        <section className='strategic-marketing-section py-10' id='strategic-marketing'>
            <div className='container'>
                {/* Content Grid */}
                <div className='content-grid grid lg:grid-cols-3 gap-5'>
                    {/* Text Content */}
                    <div className='text-content'>
                        {/* Title */}
                        <h2 className='font-semibold text-3xl mb-2 leading-snug'>Smart Investments, Informed Decisions</h2>
                        {/* Description */}
                        <p>Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
                        {/*  */}
                        <div
                            style={{
                                backgroundPosition: `center`,
                                backgroundSize: `cover`,
                                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/card-bg.webp)`
                            }}
                            className='p-5 rounded-md border border-grey-color-15 mt-7 bg-grey-color-10'
                        >
                            <h3 className='mb-2 font-semibold text-xl'>Unlock Your Investment Potential</h3>
                            <p className='mb-3'>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                            <Link
                                to={'Learn More'}
                                className='block py-2 px-4 text-center rounded-md bg-grey-color-8 border border-grey-color-15 transition-colors sm:hover:bg-grey-color-15'
                            >Learn More</Link>
                        </div>
                    </div>
                    {/* Cards */}
                    <div className='cards bg-grey-color-10 rounded-md p-3 grid sm:grid-cols-2 gap-3 lg:col-span-2'>
                        {
                            strategicMarketingData.map((strategicMarketingItem, index) => <ServiceCard key={index} serviceCData={strategicMarketingItem} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StrategicMarketingSection;