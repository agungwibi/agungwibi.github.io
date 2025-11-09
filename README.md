# Agung Wibisono's Personal Website

![agungwibi.github.io](https://img.shields.io/github/deployments/agungwibi/agungwibi.github.io/production?label=Website&logo=vercel&style=flat-square)
[![GitHub last commit](https://img.shields.io/github/last-commit/agungwibi/agungwibi.github.io/source?style=flat-square)](https://github.com/agungwibi/agungwibi.github.io/commits/source)
[![GitHub repo size](https://img.shields.io/github/repo-size/agungwibi/agungwibi.github.io?style=flat-square)](https://github.com/agungwibi/agungwibi.github.io)

This repository contains the source code for my personal portfolio website, live at [**agungwibi.github.io**](https://agungwibi.github.io).

This site is built to showcase my projects, professional experience, and technical skills as I transition from embedded engineering to full-stack development.

## 🚀 Tech Stack

This project is built with a modern, component-based tech stack:

* **Framework:** [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Routing:** [React Router](https://reactrouter.com/)
* **Deployment:** [GitHub Pages](https://pages.github.com/)

## ⚙️ How This Repository Works

This repository uses a two-branch system for development and deployment:

* **`source` branch:** This is the main development branch. All source code (React, TypeScript, components) lives here. All pull requests should be made against this branch.
* **`main` branch:** This is a **deployment-only** branch. It contains *only* the final, static build output (`index.html`, CSS, JS) from the `source` branch. The `gh-pages` package automatically pushes to this branch, which is what GitHub Pages serves.

**Please do not manually commit to the `main` branch.**

## 💻 Running the Project Locally

To run this site on your local machine:

1.  **Clone the `source` branch:**
    ```bash
    git clone -b source [https://github.com/agungwibi/agungwibi.github.io.git](https://github.com/agungwibi/agungwibi.github.io.git)
    cd agungwibi.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the local development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📦 Deploying Changes

A `deploy` script is configured in `package.json` to handle the build and deployment process automatically.

1.  Make sure all your changes are committed to the `source` branch.
2.  Run the deploy command:
    ```bash
    npm run deploy
    ```

This command will:
* Run `npm run build` to create a static `dist` folder.
* Use the `gh-pages` package to push the contents of the `dist` folder to the `main` branch, updating the live site.