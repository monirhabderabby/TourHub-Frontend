import InvoiceContainer from "@/components/common/invoice/invoice";

const Invoice = ({ params }) => {
  const id = params?.invoiceId;

  return <InvoiceContainer invoiceId={id} />;
};

export default Invoice;
