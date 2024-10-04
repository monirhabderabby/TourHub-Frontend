import InvoiceContainer from "@/components/common/invoice/invoice";

const Invoice = ({ params }) => {
  const id = params?.bookingId;

  return <InvoiceContainer bookingId={id} />;
};

export default Invoice;
