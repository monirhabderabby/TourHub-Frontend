import React from 'react'

const ContentSection = () => {
    return (
        <div className='container my-28 font-poppins grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-8'>
            {/* contact left part */}
            <div>
                <div className='space-y-4'>
                    <h3 className='text-27px leading-9 font-bold'>Get in touch</h3>
                    <p className='text-base font-normal leading-7'>
                        At TourHub, we are here to assist you with all your travel needs. Whether you have a question about our destinations, need support with booking, or want to learn more about our services, our team is ready to help. Reach out to us via phone, email, or our online chat for a prompt response. Your journey is important to us, and we aim to provide exceptional service at every step. Connect with us today,
                        and lets make your travel dreams a reality. We look forward to hearing from you!
                    </p>
                    {/* from contact */}
                    <div>
                        <form className='space-y-5'>
                            {/* name */}
                            <div>
                                <label className='text-base font-normal text-[#3D3E48] leading-7'>Name:</label>
                                <input type='text' className='block font-normal text-[#A8A7AB] px-4 py-3 rounded-lg border-[#A8A7AB] w-full border-2' placeholder='Input your name' />
                            </div>
                            {/* email */}
                            <div>
                                <label className='text-base text-[#3D3E48] font-normal leading-7'>Email:</label>
                                <input type='email' className='block w-full font-normal text-[#A8A7AB] px-4 py-3 rounded-lg border-[#A8A7AB] border-2' placeholder='Input your email' />
                            </div>
                            {/* Message*/}
                            <div>
                                <label className='text-base font-normal text-[#3D3E48] leading-7'>Message:</label>
                                <textarea type='email' className='block text-[#A8A7AB] rounded-lg h-24 px-4 pt-2  w-full border-2 border-[#A8A7AB]' />
                            </div>
                            {/* btn */}
                            <input type='submit' className='bg-tourHub-green-dark hover:bg-[#48755e]  border-2 transition-all duration-200  border-tourHub-green-dark  px-6 py-2 text-tourHub-white font-normal text-xl cursor-pointer rounded' value='Send' />
                        </form>
                    </div>
                </div>
            </div>
            {/* contact right part */}
            <div>
                <div className='space-y-6'>
                    {/* map */}
                    <iframe className='w-full h-64 rounded-lg' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29214.62153252018!2d90.34473863068847!3d23.753523200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1726695830128!5m2!1sen!2sbd"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    {/* contact details */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-6 justify-between'>
                        {/* one part*/}
                        <ul className='text-[#3D3E48]  space-y-5'>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold pe-2 text-base leading-7 text-[#000000]'>Address :</span>
                                JL.Cindelaras No.205A
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold pe-2 text-base leading-7 text-[#000000]'>City :</span>
                                Yogyakarta, Indonesia
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold pe-2 text-base leading-7 text-[#000000]'>Open : </span>
                                At 8AM
                            </li>
                        </ul>
                        {/* two part */}
                        <ul className='text-[#3D3E48]  space-y-5'>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold pe-2 text-base leading-7 text-[#000000]'>Phone :</span>
                                +62 1234 432 567
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold pe-2 text-base leading-7 text-[#000000]'>Email :</span>
                                info@travelaja.com
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold pe-2 text-base leading-7 text-[#000000]'>Close  : </span>
                                At 8PM
                            </li>
                        </ul>
                    </div>
                    {/* last part time */}
                    <p className='text-base font-medium leading-7 text-[#3D3E48]'>AVAILABLE  AT  9AM - 10PM</p>
                </div>
            </div>


        </div>
    )
}

export default ContentSection