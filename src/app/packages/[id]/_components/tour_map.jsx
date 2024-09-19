const TourMap = () => {
  return (
    <div>
      <h2 className="text-[30px] font-bold leading-[45px] text-tourHub-green-dark">
        Tour Map
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2503785306644!2d55.272621511242555!3d25.194777527619614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682a2f6410cb%3A0x761fc23c83376fa4!2sBurj%20Khalifa%20Lake!5e0!3m2!1sen!2sbd!4v1726748820020!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default TourMap;
