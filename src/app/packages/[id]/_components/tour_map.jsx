const TourMap = ({ embededSrc }) => {
  if (!embededSrc) {
    return null;
  } else {
    return (
      <div>
        <h2 className="text-[30px] font-bold leading-[45px] text-tourHub-green-dark">
          Tour Map
        </h2>
        <iframe
          src={embededSrc}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
};

export default TourMap;
