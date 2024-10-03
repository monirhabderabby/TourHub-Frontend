import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

export const TourReminderTemplete = ({
  customerName,
  packageName,
  pickupLocation,
  pickupTime,
  guideNumber,
}) => {
  return (
    <Html>
      <Head />
      <Preview>
        Reminder: Your Cox's Bazar – Dhaka tour is tomorrow! Be prepared with
        essentials, arrive on time, and get ready for an exciting journey.
        Contact us for any assistance.
      </Preview>
      <Tailwind>
        <Body className="font-inter mt-[200px]  bg-[#F6FAFF]">
          <Container className="bg-tourHub-green-dark text-white flex h-[100px] justify-center items-center rounded-t-[8px] ">
            <Text className="text-[27px] font-medium font-inter">TourHub</Text>
          </Container>

          <Container className="shadow-md font-inter rounded-b-[8px]">
            <Text className="font-inter font-medium px-5">Dear Abdullah,</Text>
            <Text className="text-tourHub-title px-5">
              I hope this email finds you well. This is a friendly reminder that
              your <strong>Cox's Bazar – Dhaka Tour Package</strong> is
              scheduled for tomorrow!
            </Text>
            <Text className="px-5">
              <strong className="text-tourHub-green-dark">
                Guide Information:
              </strong>
            </Text>
            <Text className="text-tourHub-title px-5">
              -{" "}
              <strong className="text-tourHub-green-dark ">
                Pickup Location:
              </strong>{" "}
              Tongi, Gazipur <br />-{" "}
              <strong className="text-tourHub-green-dark">Pickup Time:</strong>{" "}
              [Insert Time] <br />-{" "}
              <strong className="text-tourHub-green-dark">Tour Package:</strong>{" "}
              Cox's Bazar – Dhaka Tour Package <br />-{" "}
              <strong className="text-tourHub-green-dark">
                Contact Number:
              </strong>{" "}
              01961275391
            </Text>
            <Text className="text-tourHub-title px-5">
              To ensure a smooth and enjoyable experience, here are a few
              suggestions to help you get ready:
            </Text>
            <Text className="text-tourHub-title px-5">
              1.{" "}
              <strong className="text-tourHub-green-dark">
                Pack Essentials:
              </strong>{" "}
              Comfortable clothing, sunscreen, and any personal items you may
              need. <br />
              2.{" "}
              <strong className="text-tourHub-green-dark">
                Carry Valid ID:
              </strong>{" "}
              Have your ID ready for verification. <br />
              3.{" "}
              <strong className="text-tourHub-green-dark">
                Be On Time:
              </strong>{" "}
              Arrive at the pickup location 10 minutes before the scheduled
              time. <br />
              4.{" "}
              <strong className="text-tourHub-green-dark">
                Prepare for the Weather:
              </strong>{" "}
              Check the weather forecast and pack accordingly. <br />
              5.{" "}
              <strong className="text-tourHub-green-dark">
                Snacks and Water:
              </strong>{" "}
              Feel free to bring any additional snacks or drinks for the
              journey.
            </Text>
            <Text className="text-tourHub-title px-5">
              We're excited to have you on board and look forward to a memorable
              trip together! If you have any questions or need assistance, feel
              free to reach out at{" "}
              <Link href="tel:01961275391">01961275391</Link>.
            </Text>
            <Text className="text-tourHub-title2 px-5">
              Best regards, <br />
              Monir Hossain <br />
              TourHub , Manager <br />
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// Styles
const mainStyle = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  backgroundColor: "#f4f4f4",
  marginTop: "100px",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};
