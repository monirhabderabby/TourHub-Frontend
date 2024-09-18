import Image from "next/image";
import Background from "../../assets/Background.png";

const BannerPage = () => {
  return (
    <section className="  relative  bg-cover bg-center bg-no-repeat lg:h-[80vh]  z-10 pb-12  ">
      <Image src={Background} alt="Picture of the author" className="h-[100vh]"/>
      <div className=" absolute  text-white top-28 sm:top-1/3 z-10 flex flex-col justify-center items-center">
        <h1 className=" md:text-6xl text-center text-3xl">
          Explore the world with a smile
        </h1>
        <p className="  text-center md:px-56 py-2 md:leading-7 px-12 leading-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo
        </p>
        <div className=" bg-white text-gray-800 md:w-[510px]  py-2 md:mt-12  md:text-xs mt-10
         text-[8px] rounded-lg w-[350px] ">
          <div className=" flex justify-center items-center">
            <div className="  pl-5 flex gap-2"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> <p>City or Destination</p></div>
            <p className=" border border-r-2 ml-4 h-6 "></p>
            <p className="  pl-5">Date of stay</p>
            <p className=" border border-r-2 ml-4 h-6"></p>
            <p className="  pl-5">Person</p>
            <div className=" ml-6">
              <button className=" bg-[#5ac28f]  text-white rounded-md  px-3 py-2 flex gap-1">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>  <p>Find Trip Now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
