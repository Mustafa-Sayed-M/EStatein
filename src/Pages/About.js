import React from 'react';
import OurAchievementsSection from '../Components/Sections/OurAchievementsSection/OurAchievementsSection';
import HowItWorkSection from '../Components/Sections/HowItWorkSection/HowItWork';
import OurTeamSection from '../Components/Sections/OurTeamSection/OurTeamSection';
import OurClientsSection from '../Components/Sections/OurClientsSection/OurClientsSection';
import AboutHeader from '../Components/Headers/AboutHeader/AboutHeader';

function About() {
    return (
        <div className='about-page'>
            {/* Header */}
            <AboutHeader />
            {/* Our Achievements Section */}
            <OurAchievementsSection />
            {/* How It Work Section */}
            <HowItWorkSection />
            {/* Our Team Section */}
            <OurTeamSection />
            {/* Our Clients Section */}
            <OurClientsSection />
        </div>
    )
}

export default About;