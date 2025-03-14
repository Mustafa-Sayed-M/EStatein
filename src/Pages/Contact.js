import React from 'react';
import SharedHeader from '../Components/Headers/SharedHeader';
import ContactSection from '../Components/Sections/ContactSection/ContactSection';
import OurOfficeLocationsSection from '../Components/Sections/OurOfficeLocationsSection/OurOfficeLocationsSection';
import ContactInfoSection from '../Components/Sections/ContactInfoSection/ContactInfoSection';

function Contact() {
    return (
        <div className='contact-page'>
            {/* Header */}
            <SharedHeader
                title={`Get in Touch with Estatein`}
                description={`Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.`}
            >
                <ContactInfoSection />
            </SharedHeader>
            {/* Contact Section */}
            <ContactSection />
            {/* Our Office Locations Section */}
            <OurOfficeLocationsSection />
        </div>
    )
}

export default Contact;