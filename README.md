# RESELLER NATION

A modern designer shoes reseller store built with React.

## Features

- 🛍️ Clean product grid with dark theme
- 👟 Designer shoes catalog (Balenciaga Tracks, Balenciaga Runners, Bottega Orbit)
- 📱 CashApp payment integration ($omarvargas922)
- ✨ Smooth scrolling to payment section
- 📱 Fully responsive design

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running the App

```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Products

- **Balenciaga Tracks** - €40 (Sizes 6-10, Comes with box)
- **Balenciaga Runners** - €40 (Sizes 6-10, Comes with box)
- **Bottega Orbit** - €40 (Sizes 6-10, Comes with box)

## How It Works

1. Browse designer shoes in the grid
2. Click on a shoe to select it
3. Scroll down to see the payment section
4. Send payment to **$omarvargas922** via CashApp
5. Include the product details in your payment note

## Customization

### Add Your Logo

Replace the placeholder in `PaymentSection.js` with your CASAPP logo:

```jsx
<img src="/your-logo.png" alt="CashApp Logo" />
```

### Add QR Code

When ready, add your CashApp QR code:

```jsx
<img src="/your-qr-code.png" alt="CashApp QR" />
```

### Update Products

Edit the `shoes` array in `App.js` to add, remove, or modify products.

## Deployment

This app can be deployed to:
- Vercel (recommended for React apps)
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT
