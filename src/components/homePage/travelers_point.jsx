"use client";
// Packagess
import { motion } from "framer-motion";
import Image from "next/image";

// Data for displaying key statistics
const data = [
  {
    id: 1,
    title: "Holiday Package",
    value: "100+",
  },
  {
    id: 2,
    title: "Hotels",
    value: "172",
  },
  {
    id: 3,
    title: "Elite Transportation",
    value: "68",
  },
  {
    id: 4,
    title: "we help to find your dream place",
    value: "32M+",
  },
];

// Image configuration for the left-side visuals
const images = [
  {
    id: 1,
    src: "https://utfs.io/f/0H3br7tpgSGKxl8LN7cGl9AxRWepUys3dKL8QaOVMHSnXZ1G",
    width: 448,
    height: 274,
    className: "rounded-95px border-[10px] border-white",
    alt: "Bali",
  },
  {
    id: 2,
    src: "https://utfs.io/f/0H3br7tpgSGKxl8LN7cGl9AxRWepUys3dKL8QaOVMHSnXZ1G",
    width: 332,
    height: 200,
    className: "rounded-95px border-[10px] border-white relative -left-12",
    alt: "Bali",
  },
  {
    id: 3,
    src: "https://utfs.io/f/0H3br7tpgSGKxl8LN7cGl9AxRWepUys3dKL8QaOVMHSnXZ1G",
    width: 311,
    height: 180,
    className:
      "rounded-95px border-[10px] border-white relative hidden lg:block lg:-top-[120px] -left-[100px] object-cover",
  },
];

const TravelersPoint = () => {
  return (
    <section className="container">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        {/* Left-side image gallery with animations */}
        <div className="relative md:flex items-end hidden">
          {images.map((item) => (
            <motion.div
              initial={{
                opacity: 0.9,
                filter: "blur(1px)",
                y: 20,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.5,
                  delay: item.id * 0.2,
                },
                y: 0,
              }}
              key={item.id}
            >
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                className={item.className}
              />
            </motion.div>
          ))}
        </div>
        {/* Right-side content with text and statistics */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-tourHub-green-dark text-16px font-bold leading-28px">
              Travelers Point
            </h3>
            <h1 className="text-tourHub-title text-27px leading-33px font-bold">
              We help to find your dream place
            </h1>
            <p className="text-16px font-normal leading-28px text-tourHub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-y-8">
            {data.map((item) => (
              <div key={item.id}>
                <h1 className="text-tourHub-green-dark text-27px leading-33px font-bold">
                  {item.value}
                </h1>
                <p className="text-16px leading-28px font-normal text-tourHub-title">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelersPoint;
