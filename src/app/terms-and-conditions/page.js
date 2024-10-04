import termsImg from "../../assets/privacy-1.jpg";

export default function TermsAndConditionsPage() {
    return (
        <div>
            {/* page banner */}
            <div
                className="mt-[60px] h-[200px] md:h-[300px] xl:h-[400px] flex justify-center items-center bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${termsImg.src})` }}
            >
                <h4 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold">
                    Terms & Conditions
                </h4>
            </div>
            <div className="bg-white py-10 px-5 md:px-20 lg:px-40">
                <div className="container mx-auto max-w-screen-lg">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Terms and Conditions
                    </h1>

                    <p className="text-sm text-gray-500 mb-8">
                        Last Updated: October 2024
                    </p>

                    {/* Introduction */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Introduction
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to{" "}
                            <span className="font-semibold">TourHub</span>.
                            These Terms and Conditions govern your use of our
                            website and services. By accessing or using our
                            platform, you agree to comply with and be bound by
                            these terms. Please read them carefully before using
                            our services.
                        </p>
                    </section>

                    {/* User Accounts */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            User Accounts
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            To access certain features of our website, including
                            booking tours and managing bookings, you may be
                            required to create an account. You can create an
                            account using Google, or by using an email/password
                            combination.
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                You are responsible for maintaining the
                                confidentiality of your login information and
                                for all activities that occur under your
                                account.
                            </li>
                            <li>
                                If you suspect any unauthorized use of your
                                account, please contact us immediately.
                            </li>
                            <li>
                                TourHub reserves the right to suspend or
                                terminate accounts that violate these terms or
                                for any other reason at our discretion.
                            </li>
                        </ul>
                    </section>

                    {/* Tour Booking & Payments */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Tour Booking & Payments
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            By booking a tour on TourHub, you agree to the
                            following:
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                All bookings are subject to availability. Prices
                                are subject to change without notice.
                            </li>
                            <li>
                                Once a booking is confirmed, you will receive a
                                booking confirmation via email along with an
                                invoice for your payment.
                            </li>
                            <li>
                                We use{" "}
                                <span className="font-semibold">Stripe</span>{" "}
                                for secure payment processing. By making a
                                payment, you agree to Stripe’s Terms and
                                Conditions and authorize TourHub to process
                                payments on your behalf.
                            </li>
                            <li>
                                Cancellations or modifications to bookings may
                                be subject to additional fees, as outlined in
                                our Cancellation Policy.
                            </li>
                        </ul>
                    </section>

                    {/* User Responsibilities */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            User Responsibilities
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            As a user of TourHub, you agree to the following
                            responsibilities:
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                You will use our platform and services only for
                                lawful purposes and in accordance with these
                                Terms and Conditions.
                            </li>
                            <li>
                                You will not use our website for any fraudulent
                                or malicious activity, including unauthorized
                                access to user accounts or our systems.
                            </li>
                            <li>
                                You agree not to upload, distribute, or transmit
                                any harmful or inappropriate content through our
                                website, including viruses or malware.
                            </li>
                        </ul>
                    </section>

                    {/* Cancellations & Refunds */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Cancellations & Refunds
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            TourHub reserves the right to cancel or modify
                            bookings under certain conditions:
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                Users can cancel their bookings based on our
                                cancellation policy. Any refunds will be
                                processed according to the terms mentioned at
                                the time of booking.
                            </li>
                            <li>
                                If TourHub cancels a booking due to unforeseen
                                circumstances, we will issue a full refund to
                                the user.
                            </li>
                            <li>
                                Any modifications to your booking must be
                                communicated to us as soon as possible and may
                                incur additional fees.
                            </li>
                        </ul>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            To the fullest extent permitted by law, TourHub and
                            its partners, service providers, and affiliates are
                            not liable for any direct, indirect, incidental,
                            special, or consequential damages resulting from
                            your use of the website or booking of services.
                        </p>
                        <p className="text-gray-700 mt-3">
                            This includes, but is not limited to, damages for
                            loss of profits, data, goodwill, or other intangible
                            losses.
                        </p>
                    </section>

                    {/* Privacy Policy */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Privacy Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Your privacy is important to us. Please review our{" "}
                            <a
                                href="/privacy-policy"
                                className="text-blue-500 underline"
                            >
                                Privacy Policy
                            </a>{" "}
                            to understand how we collect, use, and protect your
                            personal information.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Changes to These Terms
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to modify these Terms and
                            Conditions at any time. Any changes will be posted
                            on this page, and your continued use of the website
                            constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Governing Law
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms and Conditions are governed by and
                            construed in accordance with the laws of TourLand.
                            Any disputes arising from the use of the website or
                            related to bookings will be subject to the exclusive
                            jurisdiction of the courts in Adventure City,
                            TourLand.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Contact Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions or concerns regarding
                            these Terms and Conditions, please contact us at:
                        </p>
                        <p className="mt-3 text-gray-800 font-semibold">
                            Email: support@tourhub.com <br />
                            Address: 123 Travel Lane, Adventure City, TourLand
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
