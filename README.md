# TourHub Project

## Overview

**TourHub** is a comprehensive travel booking platform that enables users to explore, book, and manage tour packages. The project is built using modern web technologies, providing a seamless and interactive experience for both travelers and administrators. It includes features like package booking, payment processing, user authentication, and a responsive chat system to handle user queries. TourHub is designed to cater to users on both desktop and mobile devices, ensuring a smooth and efficient experience.

## Features

- **User Authentication**: Integrated with Clerk for user sign-up, sign-in, and session management.
- **Stripe Payments**: Secure and seamless payment processing using Stripe API.
- **Package Management**: Browse and book travel packages with a user-friendly interface.
- **Admin Dashboard**: Administrators can manage tour packages, track bookings, and monitor user activity.
- **Crisp Chat**: Integrated live chat support for user queries.
- **Email Notifications**: Automated email notifications for bookings, confirmations, and updates using EmailJS.
- **Edge Store**: Secure file storage for images, documents, and other resources.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS for a fast and responsive user interface.
- **Backend**: REST API hosted on Vercel, integrated with Clerk for user management and Stripe for payment handling.
- **Database**: Prisma with MongoDB for handling data and transactions.
- **Authentication**: Clerk provides a secure authentication system.
- **Payment Gateway**: Stripe API for processing payments.
- **Email Services**: EmailJS for sending automated emails.
- **Live Chat**: Crisp chat for real-time communication between users and support staff.

## Environment Variables

To run this project, ensure the following environment variables are properly configured:

```bash
# EDGE STORE
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/wizard

# SERVER BASE URL
NEXT_PUBLIC_SERVER_URL=

# APP URL
NEXT_PUBLIC_APP_URL=

# STRIPE
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

# RESEND
RESEND_SECRET_KEY=

# CRISP CHAT
CRISP_WEBSITE_ID=

# SUPER ADMIN
NEXT_PUBLIC_SUPER_ADMIN=

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLISH_KEY=
```

Make sure to add these variables to your `.env.local` file for local development. These values will ensure the smooth functioning of various services like authentication, payment processing, chat support, and email notifications.

## Admin Credentials

You can log into the admin dashboard with the following credentials:
- **Email**: `farukfmd1999@gmail.com`
- **Password**: `@admin.9090.`

## Installation and Setup

1. Clone the repository:
   ```bash
   https://github.com/monirhabderabby/TourHub-Frontend.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables by creating a `.env.local` file in the root directory and adding your variables.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Contributing

We welcome contributions to improve TourHub! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 

## Contact

For support or inquiries, please reach out to:
- **Email**: `your_support_email`

---

This README provides an overview of the TourHub project, including its features, technology stack, setup instructions, and admin credentials. Remember to keep your environment variables secure when deploying the project!
