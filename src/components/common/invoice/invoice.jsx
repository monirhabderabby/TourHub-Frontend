"use client";

// Packages
import { AlertCircle, CloudDownload, Loader2 } from "lucide-react";

// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const InvoiceContainer = ({ invoiceId }) => {
  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    queryKey: ["invoice", invoiceId],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/invoice/${invoiceId}`
      ).then((res) => res.json()),
  });

  const handleDownload = async () => {
    const html2pdf = await require("html2pdf.js");
    const element = document.querySelector("#invoice");
    html2pdf(element, {
      margin: 5,
    });
  };

  let content;

  if (isLoading) {
    content = (
      <div className="w-full min-h-[400px] flex justify-center items-center">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="h-[400px] md:h-[calc(100vh-50vh)] w-full flex justify-center gap-x-2 items-center">
        <div className="flex flex-col justify-center items-center">
          <AlertCircle className="h-6 w-6 text-red-500" />
          <p className="font-inter text-16px text-red-500">
            <TextEffect per="char" preset="fade">
              Somethign
            </TextEffect>
          </p>
        </div>
      </div>
    );
  } else if (response?.success) {
    const {
      paymentStatus,
      invoiceId,
      email,
      amount,
      transactionId,
      createdAt,
      packageName,
      name,
    } = response?.data || {};
    content = (
      <section
        id="invoice"
        className="p-4  bg-white border rounded-8px border-input"
      >
        {/* Header Section */}
        <div className="flex justify-between items-center font-inter">
          <div className="flex items-center gap-x-3">
            <h1 className="text-tourHub-green-dark text-28px font-bold">
              Invoice
            </h1>
            <Badge className="rounded-[50px] select-none">
              {paymentStatus}
            </Badge>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-x-2"
            data-html2canvas-ignore
            onClick={handleDownload}
            size="sm"
          >
            <CloudDownload className="w-4 h-4" /> Download
          </Button>
        </div>

        {/* Company Info */}
        <div className="mt-4">
          <p className="text-sm">TourHub</p>
          <p className="text-sm">1234 Main Street, Dhaka, Bangladesh</p>
          <p className="text-sm">Email: info@tourhub.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
        </div>

        {/* Invoice Info */}
        <div className="mt-6">
          <p className="text-sm">
            Invoice No: <strong>{invoiceId}</strong>
          </p>
          <p className="text-sm">
            Invoice Date: <strong>{moment(createdAt).format("L")}</strong>
          </p>
        </div>

        {/* Billing Details */}
        <div className="mt-12">
          <h4 className="font-medium text-lg">Billing to</h4>
          <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-2 mt-4">
            {/* First Table */}
            <table className="w-full text-left border-separate border-spacing-2 space-y-4 bg-transparent shadow-sm text-14px">
              <tbody>
                <tr>
                  <th className="font-semibold p-4 bg-gray-50 border">Name</th>
                  <td className="p-4 border">{name}</td>
                </tr>
                <tr>
                  <th className="font-semibold p-4 bg-gray-50 border">
                    Package
                  </th>
                  <td className="p-4 border">{packageName}</td>
                </tr>
                <tr>
                  <th className="font-semibold p-4 bg-gray-50 border">Email</th>
                  <td className="p-4 border">{email}</td>
                </tr>
              </tbody>
            </table>

            {/* Second Table */}
            <table className="w-full text-left border-separate border-spacing-2 space-y-4 bg-transparent shadow-sm text-14px">
              <tbody>
                <tr>
                  <th className="font-semibold p-4 bg-gray-50 border">
                    Transaction ID
                  </th>
                  <td className="p-4 border">{transactionId}</td>
                </tr>
                <tr>
                  <th className="font-semibold p-4 bg-gray-50 border">Date</th>
                  <td className="p-4 border">
                    {moment(createdAt).format("LL")}
                  </td>
                </tr>
                <tr>
                  <th className="font-semibold p-4 bg-gray-50 border">
                    Amount
                  </th>
                  <td className="p-4 border">
                    <span id="prefix">$</span>
                    {amount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-12 pt-4 border-t">
          <p className="text-sm">
            Thank you for your business! If you have any questions about this
            invoice, please contact us at info@tourhub.com or +880 1234 567890.
          </p>
          <p className="text-sm">
            Payment terms: Full payment received. No further action required.
          </p>
        </div>
      </section>
    );
  }

  return content;
};

export default InvoiceContainer;
