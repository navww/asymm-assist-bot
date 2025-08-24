# Asymm Assist Bot

A brief description of your project, what it does, and who it's for.

## ✨ Features

*   **Feature 1:** Detailed description of the first feature.
*   **Feature 2:** Detailed description of the second feature.
*   **Feature 3:** Detailed description of the third feature.

## 🚀 Technologies Used

This project is built with the following technologies:

-   [Next.js](https://nextjs.org/) - React framework for production.
-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
-   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   [Shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
-   [Supabase](https://supabase.io/) - The open source Firebase alternative.

## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (version 18 or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/navww/asymm-assist-bot.git
    cd asymm-assist-bot
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary environment variables. You can start by copying the example file:
    ```sh
    cp .env.example .env.local
    ```
    Then, fill in your Supabase credentials in `.env.local`.

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

Here is an overview of the project's directory structure:

```
asymm-assist-bot/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Reusable UI components
│   │   ├── tools/        # Specific tool components
│   │   └── ui/           # Shadcn UI components
│   ├── hooks/            # Custom React hooks
│   ├── integrations/     # Third-party service integrations (e.g., Supabase)
│   └── lib/              # Utility functions
├── .env.local            # Local environment variables
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
