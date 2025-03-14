import React from 'react';
import { Link } from 'react-router-dom';

function FaqCard({ faqData: { question, answer } }) {
    return (
        <div className='faq-card bg-grey-color-8 border border-grey-color-15 rounded-md p-5 min-h-[235px] flex flex-col justify-between'>
            {/* Question */}
            <h3 className='font-semibold text-lg mb-3'>{question}</h3>
            {/* Answer */}
            <p className='mb-3'>{answer}</p>
            {/* Learn More */}
            <Link
                to={``}
                className='block py-2 px-4 rounded-md bg-grey-color-10 border border-grey-color-15 w-fit transition-colors sm:hover:bg-grey-color-15'
            >Learn More</Link>
        </div>
    )
}

export default FaqCard;