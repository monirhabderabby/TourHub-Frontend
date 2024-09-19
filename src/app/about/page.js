import WhyChoiceSection from '@/components/aboutPage/why_choice';
import AllPageBanner from '@/components/common/AllPageBanner';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            {/* About Banner section  */}
            <AllPageBanner title='About us' img={'https://utfs.io/f/cagsdt8RzebYGx8EtfHeLUDGd35RurE6hV9fvjSxCJlPAi8N'}/>
            {/*about  why choice section */}
            <WhyChoiceSection/>
        </div>
    );
};

export default AboutPage;