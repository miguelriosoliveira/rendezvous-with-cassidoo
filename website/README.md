# Rendezvous with Cassidoo - Website

A web application showcasing interview questions and their TypeScript solutions from the [Rendezvous with Cassidoo](https://cassidoo.co/) newsletter.

## Features

- **Browse Questions**: View all 117+ interview questions organized by year
- **Search & Filter**: Search questions by name, description, or number, and filter by year
- **Question Details**: Read the full question description with formatted markdown, example code, and complete TypeScript solutions
- **Syntax Highlighting**: Code blocks are highlighted with proper syntax coloring
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **GitHub Integration**: Links to view full source code and tests on GitHub

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Markdown** - Markdown rendering with syntax highlighting
- **React Syntax Highlighter** - Code block highlighting

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm

### Installation

```bash
cd website
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173/rendezvous-with-cassidoo`

### Building

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Project Structure

```
src/
├── pages/          # Page components (Home, Questions, QuestionDetail)
├── data/           # Generated questions data
├── types/          # TypeScript type definitions
└── styles/         # CSS stylesheets
```

## Data Generation

Questions data is automatically generated from the source code repository:

```bash
pnpm generate-data
```

This script reads all question folders, extracts the README content, and generates the `src/data/questions.json` file used by the app.

## License

MIT
