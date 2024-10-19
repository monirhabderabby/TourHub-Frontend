# TourHub Project

## Environment Configuration

To set up the TourHub project, you need to configure the environment variables correctly. Below is the list of necessary environment variables for the project to function properly.

### Environment Variables

Create a `.env.local` file in the root directory and copy the following variables into it:

```bash
# EDGE STORE (https://edgestore.dev/)
EDGE_STORE_ACCESS_KEY=pYrrrf0TN2AROAhA7KsPuPsEUn31Np5i
EDGE_STORE_SECRET_KEY=L93xnoHsPgskbths0WEf6Gkbo613vJO5nHzXCPkWYYkGwPSS

# CLERK ([Authentication Service](https://clerk.com/))
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your clerk publishable key>
CLERK_SECRET_KEY=<your clerk secret key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/wizard

# Backend Server URL
NEXT_PUBLIC_SERVER_URL=https://tour-hub-backend.vercel.app

# Frontend App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe (https://dashboard.stripe.com/login)
STRIPE_API_KEY=<your stripe api key>
STRIPE_WEBHOOK_SECRET=<your stripe webhook secret>

# Resend (Email Service)
RESEND_SECRET_KEY=<your resend secret key>

# Crisp Chat (Live Chat Service)
CRISP_WEBSITE_ID=<crisp chat id>

# Super Admin
NEXT_PUBLIC_SUPER_ADMIN=<your clerk user id>

# EmailJS (For Email Notifications)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLISH_KEY=
```

---

## Admin Credentials

To access the admin panel in TourHub, use the following credentials:

- **Admin Email**: `farukfmd1999@gmail.com`
- **Admin Password**: `@admin.9090`

These credentials will allow you to log in as an admin to manage tour packages, bookings, and customer reviews within the platform.

---

## Setup Instructions

Once you've configured the environment variables and admin credentials, follow these steps to run the project:

1. **Clone the Repository:**
   ```bash
   https://github.com/monirhabderabby/TourHub-Frontend.git
   cd tourhub
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm run dev
   ```

4. **Access the App:**
   Open your browser and navigate to `http://localhost:3000`.

