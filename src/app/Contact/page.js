import AllPageBanner from '@/components/common/AllPageBanner';
import React from 'react';
// import img from '../../assets/contactBanner.png'
import ContentSection from '@/components/ContactPage/content_from';

const ContactPage = () => {
    return (
        <div className='mt-14'>
            {/*Contact Banner */}
            <AllPageBanner title='Contact Us' img={'https://utfs.io/f/cagsdt8RzebYiaGz4fvIvbuULOoR83xEG7kZ4sFP5Mh1JXY9'}/>
            {/* Contact section */}
            <ContentSection/>
        </div>
    );
};

export default ContactPage;