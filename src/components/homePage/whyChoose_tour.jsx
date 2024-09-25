import { HiOutlineTicket } from "react-icons/hi2";
import { IoDiamondOutline } from "react-icons/io5";
import { PiHandHeartFill } from "react-icons/pi";
import { TfiMedall } from "react-icons/tfi";

const chooseData = [
  {
    id: 1,
    img: <HiOutlineTicket />,
    title: "Ultimate flexibility",
    dec: "You're in control, with freecancellation and payment options tosatisfy any plan or budget.",
  },
  {
    id: 2,
    img: <PiHandHeartFill />,
    title: "Memorable experiences",
    dec: "Browse and book tours and activitiesso incredible, you'll want to tell yourfriends.",
  },
  {
    id: 3,
    img: <IoDiamondOutline />,
    title: "Quality at our core",
    dec: "High-quality standards. Millions of reviews. A tourz company.",
  },
  {
    id: 4,
    img: <TfiMedall />,
    title: "Award-winning support",
    dec: "New price? New plan? No problem.We're here to help, 24/7.",
  },
];

const WhyChooseTour = () => {
  return (
    <div className="container">
      <div>
        <h1 className="text-tourHub-title2 text-23px md:text-[29.41px] font-bold font-inter leading-[45px] text-center md:text-start ">
          Why choose Tourz
        </h1>
        {/* choose card section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-5">
          {chooseData.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col  font-inter  shadow shadow-slate-50 p-4 items-center md:items-start"
              >
                <p className="text-6xl text-tourHub-green-light">{item.img}</p>
                <h3 className="pt-6 font-inter text-[17.72px] font-medium text-tourHub-title2 leading-27px pb-2">
                  {item.title}
                </h3>
                <p className="text-14px font-inter text-ellipsis text-tourHub-title2 leading-28px w-[266px] font-normal text-center md:text-start">
                  {item.dec}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTour;
