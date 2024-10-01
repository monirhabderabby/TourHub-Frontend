import AboutOurDetails from '@/components/aboutPage/about_ourDetails';
import IconTourSec from '@/components/aboutPage/icon_tour';
import OurTeam from '@/components/aboutPage/our_team';
import WhyChoiceSection from '@/components/aboutPage/why_choice';
import AllPageBanner from '@/components/common/AllPageBanner';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='mt-12'>
            {/*-- About Banner section  --*/}
            <AllPageBanner title='About us' img={'https://utfs.io/f/cagsdt8RzebYgzpzYWByDGqOIRk62QLnd3tT4sAgSBrFucm7'}/>
            {/*---about  why choice section-- */}
            <WhyChoiceSection/>
            {/*--- about our details section--- */}
            <AboutOurDetails/>
            {/*-- our Team member section- */}
            <OurTeam/>
            {/* --icon tour section -- */}
            <IconTourSec/>
            
        </div>
    );
};

export default AboutPage;