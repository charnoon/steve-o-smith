import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', "Times", "Georgia", "serif"],
        times: ['"Times New Roman"', "Times", "Georgia", "serif"],
      },
      fontSize: {
        body: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        nav: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        label: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      colors: {
        foreground: "#0a0a0a",
        background: "#ffffff",
        border: "#e5e5e5",
      },
    },
  },
  plugins: [],
};

export default config;
