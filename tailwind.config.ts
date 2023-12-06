import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 15px 0px rgba(163, 53, 215, 0.75);',
      }
    },
    colors: {
      white: "#FFF",
      black: "#000",
      primary: "#A335D7",
      gray: "#D9D9D9",
    },
  },
  plugins: [],
};
export default config;
