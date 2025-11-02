# Cube - Smart Rotational Savings & Checking

Welcome to Cube, a modern platform for rotational savings accounts where members take turns contributing money and receiving lump sum payouts after every cycle.

## 🚀 What is Cube?

Cube brings traditional community savings (also known as ROSCA - Rotating Savings and Credit Association, or "Susu") into the digital age. It's a platform where trusted groups pool their money together, and each cycle, one member receives the entire pot.

### How It Works

1. **Create or Join** a savings circle with trusted friends or family
2. **Set Terms** - agree on contribution amount, frequency, and rotation order
3. **Contribute** - make automatic contributions each cycle
4. **Receive** - when it's your turn, get the full lump sum instantly

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment Ready:** Vercel, Netlify, or any Node.js hosting

## 📦 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Cube-Site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## 🏗️ Project Structure

```
Cube-Site/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles with Tailwind
│   ├── api/                    # API proxy routes (avoid CORS)
│   │   ├── auth/signin/
│   │   │   └── route.ts        # Login proxy
│   │   └── invitations/accept/
│   │       └── route.ts        # Invitation proxy
│   ├── auth/
│   │   └── login/
│   │       └── page.tsx        # Login page
│   └── invitations/
│       └── accept/
│           └── page.tsx        # Invitation acceptance page
├── components/
│   ├── WaitlistForm.tsx        # Waitlist signup form
│   └── FeatureCard.tsx         # Feature display component
├── lib/
│   └── auth.ts                 # Authentication utilities
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Features

- ✅ Beautiful, modern landing page design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Comprehensive explanation of Cube's concept
- ✅ Interactive waitlist signup form
- ✅ Invitation acceptance page with API integration
- ✅ Authentication token management
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for rapid styling

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

### Environment Variables

For production, you may want to add:
- Email service API keys (for waitlist functionality)
- Analytics tracking IDs
- Other third-party service credentials

## 🔐 Authentication & Invitation Flow

The site includes fully functional authentication and invitation acceptance pages that integrate with your backend API.

### Login Page (`/auth/login`)

Beautiful login page with:
- Email and password authentication
- Show/hide password toggle
- Loading and error states
- Redirect support (returns user to intended page after login)
- Integration with your auth API

**API Integration:**
- **Frontend calls:** `/api/auth/signin` (Next.js proxy route)
- **Backend:** `https://cube-service-788967711773.us-central1.run.app/api/auth/signin`
- **Method:** POST
- **Body:** `{ "email": "...", "password": "..." }`
- **Response:** Expects `token` (or `authToken`/`access_token`) and `userId` (or `user_id`/`id`)
- **Storage:** Saves both token and userId to localStorage
- **Note:** Using proxy routes to avoid CORS issues

### Invitation Acceptance Flow (`/invitations/accept`)

How it works:
1. Users receive an invitation link: `https://yourdomain.com/invitations/accept?token=INVITE_TOKEN`
2. The page checks if the user is authenticated (has an auth token in localStorage)
3. If not authenticated, redirects to login page with return URL
4. After login, user is redirected back to accept the invitation
5. If authenticated, it sends a POST request to your API to accept the invitation
6. Shows success/error states with beautiful UI

**API Integration:**
- **Frontend calls:** `/api/invitations/accept` (Next.js proxy route)
- **Backend:** `https://cube-service-788967711773.us-central1.run.app/api/invitations/accept`
- **Method:** POST
- **Headers:** `Authorization: Bearer {token}`
- **Body:** `{ "inviteToken": "..." }`
- **Note:** Using proxy routes to avoid CORS issues

### Testing the Flow:

1. Go to `http://localhost:3000/auth/login`
2. Login with real credentials from your backend
3. After login, navigate to an invitation link: `/invitations/accept?token=YOUR_TOKEN`
4. Accept the invitation

### Why Proxy Routes?

We're using Next.js API routes as proxies to avoid CORS issues:
- Browser → Next.js Proxy → Backend (no CORS errors!)
- The proxy runs server-side, so it can call your backend without restrictions
- This is a production-ready pattern used by many applications
- Your backend URLs are not exposed to the client

## 📝 Customization

### Colors

Edit `tailwind.config.ts` to change the primary color scheme:

```typescript
colors: {
  primary: {
    // Your custom color palette
  },
}
```

### Content

- **Landing Page:** Edit `app/page.tsx`
- **Login Page:** Edit `app/auth/login/page.tsx`
- **Invitation Page:** Edit `app/invitations/accept/page.tsx`
- **Auth Utilities:** Edit `lib/auth.ts`
- **Metadata (SEO):** Edit `app/layout.tsx`
- **Styling:** Modify `app/globals.css` and component files

## 🔜 Next Steps

To make this a fully functional platform, you'll need to:

1. **Backend API:** Set up a backend for waitlist data collection
2. **Database:** Store user signups and waitlist information
3. **Email Service:** Integrate with SendGrid, Mailchimp, or similar
4. **Authentication:** Add user login/signup functionality
5. **Core Features:** Build the actual savings circle management system
6. **Payment Integration:** Connect with Stripe, Plaid, or banking APIs
7. **Mobile Apps:** Consider React Native or native iOS/Android apps

## 📄 License

Copyright © 2025 Cube. All rights reserved.

## 🤝 Contributing

This is a private project for Cube. For questions or suggestions, please contact the development team.

---

**Built with ❤️ for the Cube community**


