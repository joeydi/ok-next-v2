/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1440px",
        },
        colors: {
            white: "#F0F0F0",
            black: "#000000",
            "dark-blue": "#0F0F24",
            mint: "#1CFFD6",
        },
        fontFamily: {
            sans: ["var(--font-sans)"],
            mono: ["var(--font-mono)"],
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
        },
    },
    plugins: [],
};
