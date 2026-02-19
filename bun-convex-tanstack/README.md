# bun-convex-tanstack

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines React, TanStack Router, Convex, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **TanStack Router** - File-based routing with full type safety
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Convex** - Reactive backend-as-a-service platform
- **Authentication** - Better-Auth
- **Biome** - Linting and formatting
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Convex Setup

This project uses Convex as a backend. You'll need to set up Convex before running the app.

Follow the prompts to create a new Convex project and connect it to your application:

```bash
bun run setup
# Start without an account (run Convex locally)
# Choose a name: bun-convex-tanstack
# Continue?: Y
```

Then, set the convex env vars.

```bash
cd apps/api
bun convex env set BETTER_AUTH_SECRET=$(openssl rand -base64 32)
bun convex env set SITE_URL http://localhost:3001
# Get your Google Generative AI API key from the [Google AI Studio](https://aistudio.google.com/app/apikey)
# bun convex env set GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key
cd -
```

Then, run the API:

```bash
bun run dev:api
```

And the web app:

```bash
bun run dev:web
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
Your app will connect to the Convex cloud backend automatically.

## Git Hooks and Formatting

- Format and lint fix: `bun run check`

## Project Structure

```
bun-convex-tanstack/
├── apps/
│   ├── api/         # Convex backend functions and schema
│   ├── web/         # Frontend application (React + TanStack Router)
├── packages/
│   ├── config/      # TypeScript config
│   ├── env/         # Environment
```

## Available Scripts

- `bun run build`: Build all applications
- `bun run check-types`: Check TypeScript types across all apps
- `bun run check`: Run Biome formatting and linting
- `bun run dev:setup`: Setup and configure your Convex project
- `bun run dev:web`: Start only the web application
- `bun run dev`: Start all applications in development mode
