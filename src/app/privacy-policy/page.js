import privacyImg from "../../assets/privacy-1.jpg";

export default function PrivacyPolicyPage() {
    return (
        <div>
            {/* page banner */}
            <div
                className="mt-[60px] h-[200px] md:h-[300px] xl:h-[400px] flex justify-center items-center bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${privacyImg.src})` }}
            >
                <h4 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold">
                    Privacy Policy
                </h4>
            </div>
            <div className="bg-white py-10 px-5 md:px-20 lg:px-40 ">
                <div className="container mx-auto max-w-screen-lg">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">
                        Privacy Policy
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
                            <span className="font-semibold">TourHub</span>, your
                            trusted travel partner. This Privacy Policy explains
                            how we handle your personal data when you use our
                            services, including booking tours, creating
                            accounts, and making payments. By using our
                            platform, you agree to the collection, use, and
                            sharing of your personal information as described in
                            this policy.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Information We Collect
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We collect various types of information in order to
                            provide and improve our services:
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Personal Information:
                                </span>{" "}
                                When you create an account using Google or
                                email/password, we collect your name, email
                                address, and contact details.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Booking Details:
                                </span>{" "}
                                When you book a tour package, we collect
                                information about your selected package, travel
                                dates, and other related details.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Payment Information:
                                </span>{" "}
                                We use Stripe for processing payments. Stripe
                                handles your payment details, and we do not
                                store your credit card information.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Usage Data:
                                </span>{" "}
                                We collect data about how you use our website,
                                including your interactions with our tour
                                packages, browsing history, and preferences.
                            </li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            How We Use Your Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            The information we collect is used for various
                            purposes:
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                To provide and maintain our services, such as
                                booking tours and processing payments.
                            </li>
                            <li>
                                To manage your account, including verifying your
                                identity and allowing you to view your booking
                                history and invoices.
                            </li>
                            <li>
                                To communicate with you about your bookings,
                                invoices, and updates regarding your travel
                                plans.
                            </li>
                            <li>
                                To improve the website experience by analyzing
                                usage trends and feedback.
                            </li>
                            <li>
                                To comply with legal obligations, such as
                                processing payments securely and ensuring data
                                privacy.
                            </li>
                        </ul>
                    </section>

                    {/* Sharing Your Information */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Sharing Your Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We respect your privacy and ensure that your
                            information is only shared with third parties in the
                            following situations:
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                <span className="font-semibold">
                                    Payment Processing:
                                </span>{" "}
                                We share your payment information with Stripe
                                for the purpose of completing your transactions
                                securely.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Service Providers:
                                </span>{" "}
                                We may share your data with service providers
                                who help us with things like website hosting,
                                analytics, and customer support.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Legal Compliance:
                                </span>{" "}
                                We may share your information if required by law
                                or to protect the rights and safety of TourHub
                                and its users.
                            </li>
                        </ul>
                    </section>

                    {/* Your Data Protection Rights */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Your Data Protection Rights
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            As a user of TourHub, you have the following rights
                            regarding your personal data:
                        </p>
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                The right to access - You can request copies of
                                your personal data.
                            </li>
                            <li>
                                The right to rectify - You can request
                                corrections to your information if it&apos;s
                                inaccurate or incomplete.
                            </li>
                            <li>
                                The right to erase - You can request that we
                                delete your personal data under certain
                                conditions.
                            </li>
                            <li>
                                The right to restrict processing - You can
                                request that we limit the use of your data.
                            </li>
                            <li>
                                The right to object - You can object to the
                                processing of your data in certain
                                circumstances.
                            </li>
                        </ul>
                        <p className="text-gray-700 mt-3">
                            To exercise any of these rights, please contact us
                            at privacy@tourhub.com.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">Cookies</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We use cookies to enhance your browsing experience.
                            Cookies are small data files stored on your device
                            that help us remember your preferences, analyze
                            website usage, and improve our services. You can
                            adjust your browser settings to decline cookies,
                            though this may affect the functionality of certain
                            features on our website.
                        </p>
                    </section>

                    {/* Security of Your Information */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Security of Your Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We take the security of your personal data
                            seriously. We implement appropriate technical and
                            organizational measures to protect your information
                            from unauthorized access, alteration, disclosure, or
                            destruction. However, no internet-based service is
                            100% secure, so we cannot guarantee absolute
                            security.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Changes to This Privacy Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time
                            to reflect changes in our practices or legal
                            obligations. Any updates will be posted on this
                            page, and we will notify you of any significant
                            changes.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">
                            Contact Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions or concerns about this
                            Privacy Policy or how we handle your personal
                            information, please contact us at:
                        </p>
                        <p className="mt-3 text-gray-800 font-semibold">
                            Email: privacy@tourhub.com <br />
                            Address: 123 Travel Lane, Adventure City, TourLand
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
