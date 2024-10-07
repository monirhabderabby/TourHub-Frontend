import { svgIcons } from "@/data/svgIcon";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("./ContactForm"), {
  ssr: false,
});

const ContentSection = () => {
  return (
    <div>
      <section className="relative py-20 md:py-[140px]">
        <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
        <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-green-100 dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
        <div className="container px-4 md:px-8">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title mb-12 lg:mb-[150px]">
                  <span className="mb-6 block text-base font-medium text-tourHub-green-light ">
                    CONTACT US
                  </span>
                  <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                    Let&apos;s talk about your problem.
                  </h2>
                </div>
                <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      {svgIcons.Map}
                    </div>
                    <div>
                      <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                        Our Location
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        1234 Main Street, Uttara, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex w-[330px] max-w-full">
                    <div className="mr-6 text-[32px] text-primary">
                      {svgIcons.MailIcon}
                    </div>
                    <div>
                      <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                        How Can We Help?
                      </h5>
                      <p className="text-base text-body-color dark:text-dark-6">
                        info@tourhub.com
                      </p>
                      <p className="mt-1 text-base text-body-color dark:text-dark-6">
                        contact@tourhub.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-3 lg:w-5/12 xl:w-4/12">
              <div className=" rounded-lg bg-white px-4 py-10 shadow-[0px_10px_20px_0px_rgba(92,115,160,0.07)]  dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
                <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                  Send us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
