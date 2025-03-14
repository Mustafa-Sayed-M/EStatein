import React from 'react';
import ContactInfoCard from './Components/ContactInfoCard';
import contactInfoData from '../../../Data/contactInfo.json';

function ContactInfoSection() {
    return (
        <section className='contact-info-section p-3 bg-grey-color-8 border-y border-y-grey-color-15' id='contact-info'>
            <div className='container'>
                <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-3'>
                    {
                        contactInfoData.slice(0, 3).map((contactInfo, index) => <ContactInfoCard key={index} contactInfoData={contactInfo} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ContactInfoSection;