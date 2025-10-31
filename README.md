# GenMatter Ceramics & Art Store

This website acts as an online store and catalogue of my ceramic works. It is connected to my social medias, phone number and email for enquiries. I am able to upload images and text about my practice and the processes involving every piece of art that I choose to share.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/       # React components
  │   ├── Header.tsx
  │   ├── Navigation.tsx
  │   ├── Catalogue.tsx
  │   ├── About.tsx
  │   └── Contact.tsx
  ├── utils/           # Utility functions
  │   └── storage.ts   # localStorage helpers
  ├── types.ts         # TypeScript type definitions
  ├── App.tsx          # Main app component
  ├── App.css          # App styles
  ├── main.tsx         # Entry point
  └── index.css        # Global styles
```

## Features

- **Catalogue Section**: Upload and manage images of ceramic works (stored in browser localStorage)
- **About Section**: Write and save information about your practice and philosophy
- **Contact Section**: Links to email and social media profiles

## Development

The project uses:
- TypeScript for type safety
- React hooks for state management
- localStorage for data persistence (for demo purposes; a real implementation would use a backend)
