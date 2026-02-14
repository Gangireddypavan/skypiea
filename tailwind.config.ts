import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                foreground: "#ffffff",
                secondary: "#A1A1AA",
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
