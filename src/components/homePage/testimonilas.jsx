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
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
  {
    id: 2,
    img: testmonailImg2,
    name: "Robert John K.",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
  {
    id: 3,
    img: testmonailImg5,
    name: "Viola Natalie",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
  {
    id: 4,
    img: testmonailImg1,
    name: "Graham Suryo J",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
  {
    id: 5,
    img: testmonailImg3,
    name: "Anggi Nani",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
  {
    id: 6,
    img: testmonailImg6,
    name: "Bagas G Natfi",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
];

const Testimonilas = () => {
  return (
    <div className="pt-8">
      <div className="container font-poppins  md:px-0 px-2 mx-auto">
        {/* testimonial header part*/}
        <div className="flex flex-col items-center space-y-1">
          <p className="text-xl  font-bold text-[#295943]">Testimonial</p>
          <h3 className="text-3xl  text-[#3D3E48] font-bold">
            What they say about us
          </h3>
        </div>
        {/* testimonial card part */}
        <div className="md:pt-2 pt-7">
          <Image src={upImg} alt="upImg testimonail" />
        </div>
        <div className="pt-8 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="space-y-5 cursor-pointer bg-slate-50 shadow border  text-[#3D3E48] transition-all duration-300  hover:shadow-xl hover:text-[#FFFFFF] shadow-[#ffff] hover:bg-[#43B97F] p-4 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <Image src={item.img} alt="testimonial man img" />
                <h3 className="text-xl font-bold ">{item.name}</h3>
              </div>
              <div>
                <p className="font-semibold xl:w-[359px]">{item.dec}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end pt-6">
          <Image src={downImg} alt="down img" />
        </div>
      </div>
    </div>
  );
};

export default Testimonilas;
