import { Resend } from "resend";
import { PaymentTemplete } from "../../react-email-starter/emails/payment";

const resend = new Resend(process.env.RESEND_SECRET_KEY);

export async function sendPaymentSuccessEmail({
  to,
  packageName,
  price,
  transactionId,
}) {
  const { data, error } = await resend.emails.send({
    from: "TourHub <monir@monirhrabby.com>",
    to: to,
    subject: "Your Payment Was Successful – Get Ready for Your Adventure!",
    react: (
      <PaymentTemplete
        packageName={packageName}
        price={price}
        transactionId={transactionId}
      />
    ),
  });

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
