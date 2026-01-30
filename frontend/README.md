# CodeLabs Frontend

Interactive learning experiences inspired by Google Codelabs. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Dark/Light theme toggle with Google's color palette
- 📱 Fully responsive design with mobile-friendly sidebar
- 📚 Session history stored in localStorage
- 🎯 Step-by-step navigation through learning materials
- ✨ Markdown rendering with syntax highlighting

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.development
```

### Environment Variables

The application uses different API endpoints for development and production:

- **Development** (`.env.development`):
  ```
  VITE_API_URL=http://localhost:8080
  ```

- **Production** (`.env.production`):
  ```
  VITE_API_URL=https://codelab.noxturne.my.id
  ```

> **Note**: Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client.

### Running the Application

**Development mode:**
```bash
npm run dev
```

**Production build:**
```bash
npm run build
npm run preview
```

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Markdown** - Markdown rendering
- **next-themes** - Theme management
- **Radix UI** - Accessible UI components
- **Lucide React** - Icons
