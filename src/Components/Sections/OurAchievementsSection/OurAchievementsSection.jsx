import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import achievementsData from '../../../Data/achievements.json';
import AchievementCard from './Components/AchievementCard';

function OurAchievementsSection() {
    return (
        <section className='achievements-section' id='achievements'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Our Achievements`}
                    description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.`}
                />
                {/* Achievements Cards Grid */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {
                        achievementsData.map((achievement, index) => <AchievementCard achievementData={achievement} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default OurAchievementsSection;