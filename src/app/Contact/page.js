import AllPageBanner from '@/components/common/AllPageBanner';
import React from 'react';
import img from '../../assets/contactBanner.png'
import ContentSection from '@/components/ContactPage/content_from';

const ContactPage = () => {
    return (
        <div>
            {/*Contact Banner */}
            <AllPageBanner title='Contact Us' img={img}/>
            {/* Contact section */}
            <ContentSection/>
        </div>
    );
};

export default ContactPage;