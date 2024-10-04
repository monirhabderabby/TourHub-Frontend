"use client";

// Packages
import { CloudDownload } from "lucide-react";

// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generateInvoiceId } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

const InvoiceContainer = ({ bookingId }) => {
  const {} = useQuery({});
  const handleDownload = async () => {
    const html2pdf = await require("html2pdf.js");
    const element = document.querySelector("#invoice");
    html2pdf(element, {
      margin: 5,
    });
  };

  return (
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
          <Badge className="rounded-[50px] ">Paid</Badge>
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
          Invoice No: <strong>{generateInvoiceId()}</strong>
        </p>
        <p className="text-sm">
          Invoice Date: <strong>8/10/2024</strong>
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
                <td className="p-4 border">Monir Hossain</td>
              </tr>
              <tr>
                <th className="font-semibold p-4 bg-gray-50 border">Package</th>
                <td className="p-4 border">
                  Dhaka – Sylhet – Dhaka Tour Package (Non AC)
                </td>
              </tr>
              <tr>
                <th className="font-semibold p-4 bg-gray-50 border">Email</th>
                <td className="p-4 border">monirhrabby.personal@gmail.com</td>
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
                <td className="p-4 border">pi_3Q5WBzInWLAP45Na1H2FIaEY</td>
              </tr>
              <tr>
                <th className="font-semibold p-4 bg-gray-50 border">Date</th>
                <td className="p-4 border">January 1, 2012</td>
              </tr>
              <tr>
                <th className="font-semibold p-4 bg-gray-50 border">
                  Amount Due
                </th>
                <td className="p-4 border">
                  <span id="prefix">$</span>600.00
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
};

export default InvoiceContainer;
