# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# VowsVibesAssignment

A modern, responsive jewelry e-commerce web app built with React, Vite, and Tailwind CSS. Features include authentication (Clerk), cart management, product detail pages, Razorpay payment integration, and beautiful UI/UX for both desktop and mobile.

## Features

- **Responsive Design**: Seamless experience on desktop and mobile devices.
- **Authentication**: Login/Register with Clerk.
- **Product Catalog**: Browse collections, categories, hot picks, gifts, and more.
- **Dynamic Product Detail Pages**: Each product has its own detail page with reviews, offers, and features.
- **Cart Functionality**: Add/remove items, view cart, and persist cart state across refreshes.
- **Razorpay Integration**: Secure checkout and payment flow.
- **Shimmer Loading**: Smooth loading experience for product details.
- **Toast Notifications**: User feedback for cart actions and payments.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Authentication**: Clerk
- **Payments**: Razorpay
- **Routing**: React Router
- **Notifications**: React Toastify

## Getting Started

### Prerequisites

- Node.js & npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in `src/` with:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Running the App

```bash
npm run dev
```

### Razorpay Integration

- Add Razorpay checkout script to `index.html`:

```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

- Backend required for secure order creation (see `/api/create-order` example in code).

## Folder Structure

```
src/
	components/
		CartPage.jsx
		ImageCarousel.jsx
		Nav.jsx
		ProductCard.jsx
		ProductCarousel.jsx
		ProductDetail.jsx
		ShimmerDetailPage.jsx
	pages/
		ProductDetailPage.jsx
	index.css
	App.jsx
	main.jsx
public/
	...images & assets
```

## Screenshots

_Add screenshots of desktop and mobile views here._

## License

MIT

---

**Made with ❤️ by vivek-650**
