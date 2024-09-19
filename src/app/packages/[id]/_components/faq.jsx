import {
  Accordion,
  AccordionContainer,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
} from "@/components/ui/accordion";

// demo data
const data = [
  {
    id: 1,
    title: "Can I cancel my booking and get a refund?",
    desc: "Yes, you can cancel your booking. Refunds are subject to our cancellation policy, which varies based on the package and time of cancellation.",
  },
  {
    id: 2,
    title: "What documents do I need for international travel?",
    desc: "For international travel, you typically need a valid passport and sometimes a visa, depending on the destination. It's also important to check vaccination requirements.",
  },
  {
    id: 3,
    title: "Do you offer travel insurance?",
    desc: "Yes, we offer travel insurance options that cover trip cancellations, medical emergencies, lost baggage, and more. Please inquire about available plans.",
  },
  {
    id: 4,
    title: "How can I make changes to my itinerary?",
    desc: "You can make changes to your itinerary by contacting our support team. Depending on the changes and the package, there may be additional fees.",
  },
];

// Icons to render as a header icon in accordion
const Icon = () => {
  return (
    <div className="w-[20px] h-[20px] rounded-full bg-tourHub-green-dark"></div>
  );
};

const Faq = () => {
  return (
    <div>
      <h3 className="text-[20px] text-tourHub-green-dark font-bold font-inter leading-[45px] my-6">
        Faq
      </h3>
      <AccordionContainer className="grid grid-cols-1">
        <AccordionWrapper>
          <Accordion defaultValue={"item-1"} multiple={true}>
            {data.map(({ desc, id, title }) => (
              <AccordionItem key={id} value={`item-${id}`}>
                <AccordionHeader
                  className="2xl:text-base text-sm"
                  icon={<Icon />}
                >
                  {title}
                </AccordionHeader>
                <AccordionPanel className="2xl:text-base text-sm">
                  {desc}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionWrapper>
      </AccordionContainer>
    </div>
  );
};

export default Faq;
