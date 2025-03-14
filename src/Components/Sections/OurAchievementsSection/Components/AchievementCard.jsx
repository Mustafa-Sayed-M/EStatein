import React from 'react';

function AchievementCard({ achievementData: { title, description } }) {
    return (
        <div className='achievement-card p-5 rounded-md border border-grey-color-15 outline outline-8 outline-grey-color-10'>
            {/* Title */}
            <h3 className='font-semibold mb-2 text-xl'>{title}</h3>
            {/* Description */}
            <p>{description}</p>
        </div>
    )
}

export default AchievementCard;