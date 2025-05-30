# agriSense Mobile Frontend

This repository contains the mobile frontend for the agriSense project. The application is designed to provide users with an intuitive interface for interacting with agriSense services, focusing on agricultural data collection, monitoring, and visualization.

## Features

- User authentication and onboarding
- Dashboard for real-time agricultural data
- Sensor data visualization
- Field and crop management tools
- Notifications and alerts

## Tech Stack

- **React Native** (Expo)
- **TypeScript**
- **Redux** for state management
- **REST API** integration

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
git clone https://github.com/<your-org>/agriSense_Mobile_Frontend.git
cd agriSense_Mobile_Frontend
npm install
```

### Running the App

```bash
expo start
```

Scan the QR code with the Expo Go app on your mobile device.

## Project Structure
```
.
├── App.tsx
├── app/                # App entry and navigation (Expo Router)
│   ├── _layout.tsx
│   ├── index.tsx
│   └── ...             # Other screens and routes
├── assets/             # Images, fonts, and static assets
├── components/         # Reusable UI components
├── constants/          # App-wide constants
├── hooks/              # Custom React hooks
├── redux/              # Redux store, slices, and actions
├── services/           # API and service layer
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.