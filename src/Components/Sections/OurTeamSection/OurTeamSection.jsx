import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import teamData from '../../../Data/team.json'
import TeamCard from './Components/TeamCard';

function OurTeamSection() {
    return (
        <section className='team-section' id='team'>
            <div className='container space-y-10'>
                {/* Section Header */}
                <SectionHeader
                    title={`Meet the Estatein Team`}
                    description={`At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.`}
                />
                {/* Team Cards Grid */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                    {
                        teamData.map((teamItem, index) => <TeamCard teamData={teamItem} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default OurTeamSection;