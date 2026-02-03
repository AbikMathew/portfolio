# ⚡️ Abik Mathew - Senior Software Engineer Portfolio

A premium, interactive, scrollytelling portfolio website built for a Senior Flutter Developer. 
Featuring 3D interactions, smooth cinematic scrolling, and a dark-mode developer aesthetic.

[**View Live Demo**](https://abikmathew.github.io/portfolio/)

![Portfolio Hero](./public/dark_abstract_background_1770110046912.png)

## ✨ key Features

*   **Cinematic Scrollytelling**: A scroll-driven narrative of professional experience.
*   **3D Interactive Cards**: Project cards flip in 3D to reveal deep technical details (Architecture, Stacks, Metrics).
*   **Buttery Smooth Animation**: Powered by `Lenis` and `Framer Motion` for a luxury feel.
*   **Responsive Design**: Adapts seamlessly from mobile vertical stacks to desktop horizontal scrolls.
*   **Developer Aesthetic**: Dark mode, neon accents, and code-inspired typography.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
*   **Deployment**: GitHub Pages (Static Export)

## 🚀 Running Locally

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/AbikMathew/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```bash
src/
├── app/               # Next.js App Router pages and layout
├── components/        #
│   ├── Hero.tsx       # Loading & Text Reveal
│   ├── Experience.tsx # Timeline Component
│   ├── Projects.tsx   # Horizontal Scroll & 3D Cards
│   ├── Skills.tsx     # Tech Stack Grid
│   └── Contact.tsx    # Footer & Socials
└── lib/               # Utilities
```

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
