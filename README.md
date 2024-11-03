# Coinbase API Market Data Tracker

A Next.js application that tracks real-time market data for various cryptocurrency pairs using the Coinbase API.

## Features

- Real-time cryptocurrency price tracking
- Support for multiple token pairs
- Easy configuration through environment variables
- Built with Next.js and TypeScript
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Coinbase API credentials

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/coinbase-market-tracker.git
cd coinbase-market-tracker
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Coinbase API credentials:
```env
NEXT_PUBLIC_CB_NAME=your_coinbase_api_key
NEXT_PUBLIC_CB_PRIVATEKEY=your_coinbase_private_key
```

Coinbase instructions: https://docs.cdp.coinbase.com/advanced-trade/docs/getting-started

## Configuration

### Token Pairs
You can customize which token pairs to track by modifying the `tokenList` object inside the Wrapper.tsx file:

```typescript
const tokenList = {
  0: "BTC-USDC",
  1: "ETH-USDC",
  2: "SOL-USDC",
  3: "UNI-USDC",
  4: "AERO-USDC",
  5: "LTC-USDC",
};
```

To add new pairs:
1. Add a new entry to the `tokenList` object
2. Use the format: `"TOKEN-USDC"`
3. Increment the numeric key

## Usage

1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
coinbase-market-tracker/
├── app/
│   ├── api/
│   │   └── coinbase/tokenPrice/
│   │       └── tokenPrice/
│   │           └── route.ts
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── app-sidebar.tsx
│   ├── CoinCard.tsx
│   ├── Navbar.tsx
│   ├── theme-provider.tsx
│   ├── Toggle.tsx
│   └── CoinCard.tsx
├── lib/
│   ├── rest/
│   ├── types/
│   ├── constans.ts
│   ├── jwt.ts
│   └── utils.ts
├── public/
├── .env
└── README.md
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CB_NAME` | Your Coinbase API key |
| `NEXT_PUBLIC_CB_PRIVATEKEY` | Your Coinbase API private key |

## API Reference

The application uses the Coinbase API to fetch market data. The main endpoints used are:

- GET `/api/coinbase/products/{pair}` - Fetches current market data for a specific trading pair

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Coinbase API Documentation](https://docs.cloud.coinbase.com/exchange/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
