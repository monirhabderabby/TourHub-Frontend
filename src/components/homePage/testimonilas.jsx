import Image from "next/image";
import downImg from "../../assets/testimonial/down.png";
import testmonailImg1 from "../../assets/testimonial/man1.png";
import testmonailImg2 from "../../assets/testimonial/man2.png";
import testmonailImg3 from "../../assets/testimonial/man3.png";
import testmonailImg4 from "../../assets/testimonial/man4.png";
import testmonailImg5 from "../../assets/testimonial/man5.png";
import testmonailImg6 from "../../assets/testimonial/man6.png";
import upImg from "../../assets/testimonial/up.png";

const testimonials = [
  {
    id: 1,
    img: testmonailImg4,
    name: "Angelina Simple",
    dec: "The service exceeded my expectations. Highly recommended!",
  },
  {
    id: 2,
    img: testmonailImg2,
    name: "Robert John K.",
    dec: "Great experience, the team was professional and helpful throughout.",
  },
  {
    id: 3,
    img: testmonailImg5,
    name: "Viola Natalie",
    dec: "Fantastic quality, I’m extremely satisfied with the results!",
  },
  {
    id: 4,
    img: testmonailImg1,
    name: "Graham Suryo J",
    dec: "Very reliable and efficient. I will definitely use their services again.",
  },
  {
    id: 5,
    img: testmonailImg3,
    name: "Anggi Nani",
    dec: "A wonderful experience from start to finish. Highly appreciated!",
  },
  {
    id: 6,
    img: testmonailImg6,
    name: "Bagas G Natfi",
    dec: "Excellent service! I couldn’t have asked for better.",
  },
  {
    id: 7,
    img: testmonailImg3,
    name: "Anggi Nani",
    dec: "The team was incredibly supportive and responsive. Great work!",
  },
  {
    id: 8,
    img: testmonailImg6,
    name: "Bagas G Natfi",
    dec: "Highly professional and very easy to work with. Would recommend.",
  },
];

const Testimonilas = () => {
  return (
    <div className="pt-8">
      <div className="container font-inter">
        {/* testimonial header part*/}
        <div>
          <h3 className="text-tourHub-green-dark text-16px font-bold leading-28px text-center">
            Testmonial
          </h3>
          <h1 className="text-tourHub-title2 text-23px md:text-[29.41px] font-bold font-inter leading-[45px] text-center ">
            What they say about us
          </h1>
        </div>
        {/* testimonial card part */}
        <div className="md:pt-2 pt-7">
          <Image src={upImg} alt="upImg testimonail" className="bg-gray-100" />
        </div>
        <div className="pt-8 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="space-y-5 cursor-pointer bg-slate-50 shadow border  text-[#3D3E48] duration-150   hover:text-[#FFFFFF] shadow-[#ffff] hover:bg-[#43B97F] p-4 rounded-xl group"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.img}
                  width={40}
                  height={40}
                  alt="testimonial man img"
                  className="bg-gray-100 rounded-full"
                />
                <h3 className="text-19px font-inter font-semibold text-tourHub-green-dark leading-28px group-hover:text-white transition-colors">
                  {item.name}
                </h3>
              </div>
              <div>
                <p className="font-normal font-inter text-14px ">{item.dec}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end pt-6">
          <Image src={downImg} alt="down img" className="bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default Testimonilas;
