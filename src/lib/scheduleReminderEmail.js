import { Resend } from "resend";
import { TourReminderTemplete } from "../../react-email-starter/emails/tour-reminder";

const resend = new Resend(process.env.RESEND_SECRET_KEY);

export async function scheduleTourReminderEmail({
  to,
  packageName,
  customerName,
  guideNumber,
  pickupLocation,
  pickupTime,
  scheduledAt,
}) {
  console.log("@@timestamp", scheduledAt);
  const { data, error } = await resend.emails.send({
    from: "TourHub <monir@monirhrabby.com>",
    to: to,
    subject: "Pack Your Bags! Tomorrow is Adventure Day!",
    react: (
      <TourReminderTemplete
        packageName={packageName}
        customerName={packageName}
        guideNumber={guideNumber}
        pickupLocation={pickupLocation}
        pickupTime={pickupTime}
      />
    ),
    scheduledAt: scheduledAt,
  });

  if (error) {
    console.log(error.message);
    return;
  }

  console.log("Email scheduled for tour reminder");
  return data;
}
